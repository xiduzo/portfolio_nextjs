import { type Emoji } from 'openmoji';

// Lazy load emojis to reduce memory usage during build
let emojisCache: Record<string, Emoji> | null = null;

export async function getEmojis(): Promise<Record<string, Emoji>> {
  if (emojisCache) {
    return emojisCache;
  }

  // Dynamic import to reduce initial memory usage
  const { openmojis } = await import('openmoji');

  emojisCache = openmojis.reduce(
    (acc, emoji) => {
      acc[emoji.hexcode] = emoji;
      return acc;
    },
    {} as Record<string, Emoji>
  );

  return emojisCache;
}

// For backward compatibility, but this will be loaded lazily
export const EMOJIS = new Proxy({} as Record<string, Emoji>, {
  get(target, prop) {
    if (typeof prop === 'string') {
      // Return a promise that resolves to the emoji
      return getEmojis().then(emojis => emojis[prop]);
    }
    return (target as any)[prop] || undefined;
  },
});
