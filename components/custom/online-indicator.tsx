'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePresence } from '@/providers/MqttPresenceProvider';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function OnlineIndicator() {
  const { others } = usePresence();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const count = others.length + 1; // include self

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className='flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors font-mono'
          aria-label={`${count} ${count === 1 ? 'person' : 'people'} online`}
        >
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
          </span>
          {count} online
        </button>
      </PopoverTrigger>
      <PopoverContent
        side='right'
        align='end'
        className='w-56 p-2 font-mono text-xs'
      >
        <p className='px-2 py-1 text-muted-foreground mb-1'>
          {count} {count === 1 ? 'person' : 'people'} browsing
        </p>
        <div className='space-y-0.5'>
          {/* Self */}
          <div className='flex items-center gap-2 rounded px-2 py-1.5 text-muted-foreground'>
            <span className='h-2 w-2 rounded-full bg-green-500 shrink-0' />
            <span className='truncate'>you</span>
            <span className='ml-auto text-[10px] opacity-60 truncate max-w-[80px]'>
              here
            </span>
          </div>
          {others.map((user) => (
            <button
              key={user.clientId}
              onClick={() => {
                router.push(user.page);
                setOpen(false);
              }}
              className='flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-muted transition-colors text-left'
            >
              <span
                className='h-2 w-2 rounded-full shrink-0'
                style={{ backgroundColor: user.color }}
              />
              <span className='truncate'>{user.name}</span>
              <span className='ml-auto text-[10px] opacity-60 truncate max-w-[80px]'>
                {user.page}
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
