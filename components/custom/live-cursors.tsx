'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { usePresence } from '@/providers/MqttPresenceProvider';
import type { CursorColor } from '@/lib/presence';

// Shade 700 → white text ≥7:1 contrast for all hues (WCAG AA).
// Yellow is too light at 700; shade 500/400 + dark text gives ≥10:1 instead.
const cursorFill = cva('', {
  variants: {
    color: {
      blue:    'fill-blue-700',
      red:     'fill-red-700',
      green:   'fill-green-700',
      orange:  'fill-orange-700',
      purple:  'fill-purple-700',
      pink:    'fill-pink-700',
      teal:    'fill-teal-700',
      cyan:    'fill-cyan-700',
      yellow:  'fill-yellow-500 dark:fill-yellow-400',
      rose:    'fill-rose-700',
      violet:  'fill-violet-700',
      emerald: 'fill-emerald-700',
    } satisfies Record<CursorColor, string>,
  },
});

const cursorStroke = cva('', {
  variants: {
    color: {
      blue:    'stroke-white dark:stroke-neutral-900',
      red:     'stroke-white dark:stroke-neutral-900',
      green:   'stroke-white dark:stroke-neutral-900',
      orange:  'stroke-white dark:stroke-neutral-900',
      purple:  'stroke-white dark:stroke-neutral-900',
      pink:    'stroke-white dark:stroke-neutral-900',
      teal:    'stroke-white dark:stroke-neutral-900',
      cyan:    'stroke-white dark:stroke-neutral-900',
      yellow:  'stroke-neutral-800',
      rose:    'stroke-white dark:stroke-neutral-900',
      violet:  'stroke-white dark:stroke-neutral-900',
      emerald: 'stroke-white dark:stroke-neutral-900',
    } satisfies Record<CursorColor, string>,
  },
});

const cursorLabel = cva(
  'absolute left-6 top-6 whitespace-nowrap rounded px-1.5 py-0.5 font-mono leading-tight font-extrabold',
  {
    variants: {
      color: {
        blue:    'bg-blue-700    text-white border-white dark:border-neutral-900 border-2',
        red:     'bg-red-700     text-white border-white dark:border-neutral-900 border-2',
        green:   'bg-green-700   text-white border-white dark:border-neutral-900 border-2',
        orange:  'bg-orange-700  text-white border-white dark:border-neutral-900 border-2',
        purple:  'bg-purple-700  text-white border-white dark:border-neutral-900 border-2',
        pink:    'bg-pink-700    text-white border-white dark:border-neutral-900 border-2',
        teal:    'bg-teal-700    text-white border-white dark:border-neutral-900 border-2',
        cyan:    'bg-cyan-700    text-white border-white dark:border-neutral-900 border-2',
        yellow:  'bg-yellow-500  text-neutral-900 dark:bg-yellow-400 border-yellow-500 dark:border-yellow-400 border-2',
        rose:    'bg-rose-700    text-white border-white dark:border-neutral-900 border-2',
        violet:  'bg-violet-700  text-white border-white dark:border-neutral-900 border-2',
        emerald: 'bg-emerald-700 text-white border-white dark:border-neutral-900 border-2',
      } satisfies Record<CursorColor, string>,
    },
  }
);

export function LiveCursors() {
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

  const onPageCursors = others.filter(
    (o) => o.page === pathname && o.cursor !== null
  );

  if (!onPageCursors.length) return null;

  return (
    <div className='pointer-events-none fixed inset-0 z-50 overflow-hidden'>
      {onPageCursors.map((user) => {
        const color = user.color as CursorColor;
        return (
          <div
            key={user.clientId}
            className='absolute transition-[top,left] duration-75'
            style={{
              top: user.cursor!.y * docSize.h - scroll.y,
              left: user.cursor!.x * docSize.w - scroll.x,
            }}
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              className='drop-shadow-sm'
            >
              <path
                d='M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z'
                strokeWidth='2'
                strokeLinejoin='round'
                strokeLinecap='round'
                className={`${cursorFill({ color })} ${cursorStroke({ color })}`}
              />
            </svg>
            <span className={cursorLabel({ color })}>{user.name}</span>
          </div>
        );
      })}
    </div>
  );
}
