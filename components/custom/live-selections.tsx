'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { usePresence } from '@/providers/MqttPresenceProvider';
import type { CursorColor, PresencePayload } from '@/lib/presence';

// Highlight uses shade 600 at reduced opacity — vivid enough to see but not overwhelming.
const selectionHighlight = cva('absolute rounded-sm opacity-30', {
  variants: {
    color: {
      blue:    'bg-blue-600',
      red:     'bg-red-600',
      green:   'bg-green-600',
      orange:  'bg-orange-600',
      purple:  'bg-purple-600',
      pink:    'bg-pink-600',
      teal:    'bg-teal-600',
      cyan:    'bg-cyan-600',
      yellow:  'bg-yellow-500',
      rose:    'bg-rose-600',
      violet:  'bg-violet-600',
      emerald: 'bg-emerald-600',
    } satisfies Record<CursorColor, string>,
  },
});

// Label uses shade 700 + white text (≥7:1 WCAG AA). Yellow uses dark text instead.
const selectionLabel = cva(
  'absolute -translate-y-full whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-mono leading-tight',
  {
    variants: {
      color: {
        blue:    'bg-blue-700    text-white',
        red:     'bg-red-700     text-white',
        green:   'bg-green-700   text-white',
        orange:  'bg-orange-700  text-white',
        purple:  'bg-purple-700  text-white',
        pink:    'bg-pink-700    text-white',
        teal:    'bg-teal-700    text-white',
        cyan:    'bg-cyan-700    text-white',
        yellow:  'bg-yellow-500  text-neutral-900 dark:bg-yellow-400',
        rose:    'bg-rose-700    text-white',
        violet:  'bg-violet-700  text-white',
        emerald: 'bg-emerald-700 text-white',
      } satisfies Record<CursorColor, string>,
    },
  }
);

// Walk the child-index path from root to recover the exact node that was serialized.
function resolveNodePath(root: Node, path: number[]): Node | null {
  let current: Node = root;
  for (const index of path) {
    if (index >= current.childNodes.length) return null;
    current = current.childNodes[index];
  }
  return current;
}

function resolveRects(sel: NonNullable<PresencePayload['selection']>): DOMRect[] {
  try {
    const root: Node = sel.rootId
      ? (document.getElementById(sel.rootId) ?? document.body)
      : document.body;
    const startNode = resolveNodePath(root, sel.startPath);
    const endNode = resolveNodePath(root, sel.endPath);
    if (!startNode || !endNode) {
      return [];
    }
    const range = document.createRange();
    range.setStart(startNode, sel.startOffset);
    range.setEnd(endNode, sel.endOffset);
    return Array.from(range.getClientRects());
  } catch {
    return [];
  }
}

export function LiveSelections() {
  const pathname = usePathname();
  const { others } = usePresence();
  // Tick forces re-render when viewport changes so getClientRects() stays accurate.
  const [, setTick] = useState(0);

  useEffect(() => {
    const tick = () => setTick((t) => t + 1);
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    return () => {
      window.removeEventListener('scroll', tick);
      window.removeEventListener('resize', tick);
    };
  }, []);

  const selectingUsers = others.filter(
    (o) => o.page === pathname && o.selection !== null
  );

  if (!selectingUsers.length) return null;

  // Pre-compute rects once per user to avoid calling resolveRects twice.
  const resolved = selectingUsers.map((user) => ({
    user,
    color: user.color as CursorColor,
    rects: resolveRects(user.selection!),
  }));

  return (
    <div className='pointer-events-none fixed inset-0 z-40 overflow-hidden'>
      {resolved.map(({ user, color, rects }) =>
        rects.map((rect, i) => (
          <div
            key={`${user.clientId}-${i}`}
            className={selectionHighlight({ color })}
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
          />
        ))
      )}
      {resolved.map(({ user, color, rects }) => {
        const first = rects[0];
        if (!first) return null;
        return (
          <div
            key={`${user.clientId}-label`}
            className={selectionLabel({ color })}
            style={{ top: first.top, left: first.left }}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
}
