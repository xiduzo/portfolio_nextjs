'use client';

import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

const MqttPresenceProvider = dynamic(
  () =>
    import('@/providers/MqttPresenceProvider').then(
      (mod) => mod.MqttPresenceProvider
    ),
  { ssr: false }
);

const LiveCursors = dynamic(
  () =>
    import('@/components/custom/live-cursors').then((mod) => mod.LiveCursors),
  { ssr: false }
);

const LiveSelections = dynamic(
  () =>
    import('@/components/custom/live-selections').then(
      (mod) => mod.LiveSelections
    ),
  { ssr: false }
);

export function LazyPresence({ children }: PropsWithChildren) {
  return (
    <MqttPresenceProvider>
      <LiveCursors />
      <LiveSelections />
      {children}
    </MqttPresenceProvider>
  );
}
