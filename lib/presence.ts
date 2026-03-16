import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

export const COLORS = [
  'blue', 'red', 'green', 'orange', 'purple',
  'pink', 'teal', 'cyan', 'yellow', 'rose',
  'violet', 'emerald',
] as const;

export type CursorColor = (typeof COLORS)[number];

export type PresencePayload = {
  clientId: string;
  cursor: { x: number; y: number; area: 'sidebar' | 'content' } | null;
  page: string;
  selection: {
    text: string;
    rootId: string | null; // id of the anchor element; null means document.body
    startPath: number[];
    startOffset: number;
    endPath: number[];
    endOffset: number;
  } | null;
  color: CursorColor;
  name: string;
  timestamp: number;
};

const IDENTITY_KEY = 'portfolio-presence-identity';

function generateIdentity(): { name: string; color: CursorColor; clientId: string } {
  return {
    name: uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: ' ',
      style: 'capital',
      length: 2,
    }),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    clientId: Math.random().toString(36).slice(2, 10),
  };
}

export function getOrCreateIdentity(): { name: string; color: CursorColor; clientId: string } {
  if (typeof window === 'undefined') return generateIdentity();
  try {
    const stored = localStorage.getItem(IDENTITY_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.name && COLORS.includes(parsed.color) && parsed.clientId) {
        return parsed as { name: string; color: CursorColor; clientId: string };
      }
    }
  } catch {}
  const identity = generateIdentity();
  localStorage.setItem(IDENTITY_KEY, JSON.stringify(identity));
  return identity;
}

export const MQTT_TOPIC_PREFIX = 'portfolio/presence/';
export const PRESENCE_TTL_MS = 10_000;
