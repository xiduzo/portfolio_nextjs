'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import mqtt, { MqttClient } from 'mqtt';
import { usePathname } from 'next/navigation';
import { useThrottledCallback } from '@tanstack/react-pacer';
import {
  getOrCreateIdentity,
  MQTT_TOPIC_PREFIX,
  PRESENCE_TTL_MS,
  PresencePayload,
} from '@/lib/presence';

type PresenceMap = Record<string, PresencePayload>;

type PresenceContextValue = {
  others: PresencePayload[];
  self: { clientId: string; name: string; color: string } | null;
};

const PresenceContext = createContext<PresenceContextValue>({
  others: [],
  self: null,
});

export function usePresence() {
  return useContext(PresenceContext);
}

const BROKER_URL =
  process.env.NEXT_PUBLIC_MQTT_BROKER_URL ??
  'wss://broker.hivemq.com:8884/mqtt';

export function MqttPresenceProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [others, setOthers] = useState<PresenceMap>({});
  const clientRef = useRef<MqttClient | null>(null);
  const identityRef = useRef(getOrCreateIdentity());
  const presenceRef = useRef<Omit<PresencePayload, 'timestamp'>>({
    ...identityRef.current,
    cursor: null,
    page: pathname,
    selection: null,
  });

  // Throttled flush: always reads the latest ref state, so no patch is ever lost.
  const flushPresence = useThrottledCallback(() => {
    const client = clientRef.current;
    if (!client?.connected) return;
    const payload: PresencePayload = {
      ...presenceRef.current,
      timestamp: Date.now(),
    };
    client.publish(
      `${MQTT_TOPIC_PREFIX}${identityRef.current.clientId}`,
      JSON.stringify(payload),
      { retain: false, qos: 0 }
    );
  }, { wait: 50 });

  // Apply patch immediately to ref, then schedule a throttled publish.
  // Separating patch application from the throttle ensures that if cursor moves
  // and selectionchange fire in the same window, neither patch is dropped.
  const publish = useCallback((patch: Partial<Omit<PresencePayload, 'clientId' | 'color' | 'name' | 'timestamp'>>) => {
    presenceRef.current = { ...presenceRef.current, ...patch };
    flushPresence();
  }, [flushPresence]);

  // Sync page changes
  useEffect(() => {
    publish({ page: pathname, cursor: null, selection: null });
  }, [pathname, publish]);

  // Cursor tracking (throttled to ~30fps)
  useEffect(() => {
    let rafId: number;
    let pending: { x: number; y: number } | null = null;

    const onMove = (e: MouseEvent) => {
      pending = {
        x: e.pageX / document.documentElement.scrollWidth,
        y: e.pageY / document.documentElement.scrollHeight,
      };
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (pending) publish({ cursor: pending });
          pending = null;
          rafId = 0;
        });
      }
    };

    const onLeave = () => {
      pending = null;
      cancelAnimationFrame(rafId);
      rafId = 0;
      publish({ cursor: null });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [publish]);

  // Text selection
  useEffect(() => {
    // Returns the path of child indices from root down to targetNode.
    const getNodePath = (root: Node, targetNode: Node): number[] | null => {
      const path: number[] = [];
      let current: Node = targetNode;
      while (current !== root) {
        const parent = current.parentNode;
        if (!parent) return null;
        let index = 0;
        let sibling: ChildNode | null = parent.firstChild;
        while (sibling && sibling !== current) {
          index++;
          sibling = sibling.nextSibling;
        }
        if (!sibling) return null;
        path.unshift(index);
        current = parent;
      }
      return path;
    };

    // Walk up from node to find the nearest ancestor element with an id.
    const findNamedAncestor = (node: Node): Element | null => {
      let current: Node | null = node.nodeType === Node.ELEMENT_NODE ? node : node.parentNode;
      while (current && current !== document.body) {
        if ((current as Element).id) return current as Element;
        current = current.parentNode;
      }
      return null;
    };

    const onSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) {
        publish({ selection: null });
        return;
      }
      const text = sel.toString().trim();
      if (!text) {
        publish({ selection: null });
        return;
      }
      const range = sel.getRangeAt(0);
      // Use the nearest named ancestor of the start container as root so paths
      // are short and stable. Fall back to document.body if none found.
      const anchor = findNamedAncestor(range.startContainer);
      const root: Node = anchor ?? document.body;
      const startPath = getNodePath(root, range.startContainer);
      const endPath = getNodePath(root, range.endContainer);
      if (!startPath || !endPath) {
        publish({ selection: null });
        return;
      }
      const selection = {
        text,
        rootId: anchor?.id ?? null,
        startPath,
        startOffset: range.startOffset,
        endPath,
        endOffset: range.endOffset,
      };
      console.log('[Presence] publishing selection', JSON.stringify(selection));
      publish({ selection });
    };

    document.addEventListener('selectionchange', onSelectionChange);
    return () => document.removeEventListener('selectionchange', onSelectionChange);
  }, [publish]);

  // Prune stale presences
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setOthers((prev) => {
        const next = { ...prev };
        let changed = false;
        for (const [id, p] of Object.entries(next)) {
          if (now - p.timestamp > PRESENCE_TTL_MS) {
            delete next[id];
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // MQTT connection
  useEffect(() => {
    const { clientId, name, color } = identityRef.current;

    const disconnectPayload: PresencePayload = {
      clientId,
      name,
      color,
      cursor: null,
      page: pathname,
      selection: null,
      timestamp: 0, // signals disconnected
    };

    const client = mqtt.connect(BROKER_URL, {
      clientId: `portfolio-${clientId}-${Math.random().toString(36).slice(2, 6)}`,
      clean: true,
      reconnectPeriod: 3000,
      will: {
        topic: `${MQTT_TOPIC_PREFIX}${clientId}`,
        payload: JSON.stringify(disconnectPayload),
        qos: 0,
        retain: false,
      },
    });

    clientRef.current = client;

    client.on('connect', () => {
      client.subscribe(`${MQTT_TOPIC_PREFIX}+`, { qos: 0 });
      // Announce ourselves
      publish({ page: pathname });
    });

    client.on('message', (_topic: string, message: Buffer) => {
      try {
        const payload: PresencePayload = JSON.parse(message.toString());
        if (payload.clientId === clientId) return; // skip self
        if (payload.selection) {
          console.log('[Presence] received selection from', payload.name, JSON.stringify(payload.selection));
        }

        if (payload.timestamp === 0) {
          // Disconnect signal
          setOthers((prev) => {
            const next = { ...prev };
            delete next[payload.clientId];
            return next;
          });
        } else {
          setOthers((prev) => ({
            ...prev,
            [payload.clientId]: payload,
          }));
        }
      } catch {
        // malformed message, ignore
      }
    });

    return () => {
      // Publish disconnect before closing
      if (client.connected) {
        client.publish(
          `${MQTT_TOPIC_PREFIX}${clientId}`,
          JSON.stringify(disconnectPayload),
          { qos: 0 }
        );
      }
      client.end(true);
      clientRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const othersArray = useMemo(() => Object.values(others), [others]);

  const value = useMemo<PresenceContextValue>(
    () => ({ others: othersArray, self: identityRef.current }),
    [othersArray]
  );

  return (
    <PresenceContext.Provider value={value}>
      {children}
    </PresenceContext.Provider>
  );
}
