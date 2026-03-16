'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { usePresence } from '@/providers/MqttPresenceProvider';
import type { CursorColor } from '@/lib/presence';

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

export function LiveSelections() {
  const pathname = usePathname();
  const { others } = usePresence();
  const [scroll, setScroll] = useState(() =>
    typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 }
  );
  const [docSize, setDocSize] = useState(() =>
    typeof window !== 'undefined'
      ? { w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }
      : { w: 0, h: 0 }
  );

  useEffect(() => {
    const onScroll = () => setScroll({ x: window.scrollX, y: window.scrollY });
    const onResize = () => setDocSize({
      w: document.documentElement.scrollWidth,
      h: document.documentElement.scrollHeight,
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const selectingUsers = others.filter(
    (o) => o.page === pathname && o.selection !== null
  );

  if (!selectingUsers.length) return null;

  return (
    <div className='pointer-events-none fixed inset-0 z-40 overflow-hidden'>
      {selectingUsers.map((user) => {
        const color = user.color as CursorColor;
        return user.selection!.rects.map((rect, i) => (
          <div
            key={`${user.clientId}-${i}`}
            className={selectionHighlight({ color })}
            style={{
              top: rect.top * docSize.h - scroll.y,
              left: rect.left * docSize.w - scroll.x,
              width: rect.width * docSize.w,
              height: rect.height * docSize.h,
            }}
          />
        ));
      })}
      {selectingUsers.map((user) => {
        const first = user.selection!.rects[0];
        if (!first) return null;
        const color = user.color as CursorColor;
        return (
          <div
            key={`${user.clientId}-label`}
            className={selectionLabel({ color })}
            style={{ top: first.top * docSize.h - scroll.y, left: first.left * docSize.w - scroll.x }}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
}
