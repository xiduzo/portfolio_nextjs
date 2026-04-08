'use client';

import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const id = setTimeout(() => Observer.start(), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
