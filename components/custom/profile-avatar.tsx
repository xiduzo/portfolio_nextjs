import Image from 'next/image';
import { cn } from '@/lib/utils';

type ProfileAvatarProps = {
  alt: string;
  /** Passed to next/image — keep in sync with rendered layout width. */
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * Profile photo with next/image so AVIF/WebP and width-constrained srcset are used.
 * Prefer this over AvatarImage for /me.jpeg — a plain img would download the full source file.
 */
export function ProfileAvatar({
  alt,
  sizes,
  className,
  priority,
}: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 overflow-hidden rounded-full bg-muted',
        className
      )}
    >
      <Image
        src='/me.jpeg'
        alt={alt}
        fill
        sizes={sizes}
        className='object-cover'
        fetchPriority='high'
        loading='eager'
        priority={priority}
      />
    </div>
  );
}
