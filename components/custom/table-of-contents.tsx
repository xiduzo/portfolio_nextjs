'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setActiveIds(new Set());
    intersectingIds.current = new Set();

    const timer = setTimeout(() => {
      const article = document.getElementById('main-content');
      if (!article) return;

      const headings = article.querySelectorAll('h2[id], h3[id]');
      const tocItems: TocItem[] = Array.from(headings).map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));

      setItems(tocItems);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const intersectingIds = useRef<Set<string>>(new Set());

  const syncActive = useCallback(() => {
    if (intersectingIds.current.size > 0) {
      setActiveIds(new Set(intersectingIds.current));
      return;
    }
    // Nothing intersecting — pick the closest heading above scroll position
    const scrollY = window.scrollY + 100;
    let closestId = '';
    let closestTop = -Infinity;
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= scrollY && top > closestTop) {
        closestTop = top;
        closestId = id;
      }
    }
    setActiveIds(closestId ? new Set([closestId]) : new Set());
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
      syncActive();
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [syncActive]);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          intersectingIds.current.add(entry.target.id);
        } else {
          intersectingIds.current.delete(entry.target.id);
        }
      }
      syncActive();
    },
    [syncActive]
  );

  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0,
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items, handleIntersect]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  if (pathname === '/') return null;

  if (items.length === 0) return null;

  const activeItem = items.find((i) => activeIds.has(i.id));
  const lastActiveIndex = items.reduce(
    (acc, item, idx) => (activeIds.has(item.id) ? idx : acc),
    0
  );
  const progress =
    items.length > 1 ? (lastActiveIndex / (items.length - 1)) * 100 : 0;

  const tocList = (compact?: boolean) => (
    <ul className="relative">
      {/* Continuous left border line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border rounded-full" />
      {items.map((item) => {
        const isActive = activeIds.has(item.id);
        return (
          <li key={item.id} className="relative">
            {/* Active highlight on the left line */}
            {isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground rounded-full z-10" />
            )}
            <button
              onClick={() => scrollTo(item.id)}
              className={cn(
                'w-full text-left transition-colors font-subheading',
                compact ? 'text-lg py-4' : 'text-sm py-1.5',
                item.level === 3
                  ? compact ? 'pl-6' : 'pl-6'
                  : compact ? 'pl-3' : 'pl-4',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.text}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <nav
        aria-label="Table of contents"
        className={cn(
          'hidden min-[2200px]:block fixed right-8 top-36 w-56 z-20 transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <p className="text-xs text-muted-foreground mb-3 font-subheading">
          On this page
        </p>
        {tocList()}
      </nav>

      {/* Mobile: positioned below toolbar, overlaying content */}
      <div className={cn(
        "min-[2200px]:hidden absolute left-0 right-0 z-30 transition-all duration-300",
          visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
      )}>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="w-full flex items-center gap-2 px-4 py-2.5 bg-background border-b border-border text-sm font-subheading"
              aria-expanded={mobileOpen}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="shrink-0"
                aria-hidden="true"
              >
                <circle
                  cx="9" cy="9" r="7"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-muted"
                />
                <circle
                  cx="9" cy="9" r="7"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeDasharray={`${2 * Math.PI * 7}`}
                  strokeDashoffset={`${2 * Math.PI * 7 * (1 - progress / 100)}`}
                  className="text-foreground transition-all duration-300"
                  transform="rotate(-90 9 9)"
                />
              </svg>
              <span className="truncate text-muted-foreground text-xl">
                {activeItem?.text ?? 'On this page'}
              </span>
              <ChevronDown
                size={14}
                className={cn(
                  'ml-auto text-muted-foreground transition-transform shrink-0',
                  mobileOpen && 'rotate-180'
                )}
              />
            </button>
            {mobileOpen && (
              <nav
                className="absolute left-0 right-0 bg-background border-b border-border px-4 py-2 max-h-[60vh] overflow-y-auto"
                aria-label="Table of contents"
              >
                {tocList(true)}
              </nav>
            )}
      </div>
    </>
  );
}
