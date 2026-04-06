import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2025 — Blog archive',
  description:
    'Archive page for posts published in 2025 on sanderboer.nl. New writing will appear here and on the main blog index when it goes live.',
  alternates: { canonical: '/post/2025' },
  openGraph: {
    url: 'https://sanderboer.nl/post/2025',
    title: 'Blog archive — 2025',
    description: 'Placeholder archive for 2025 posts.',
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading'>
          Posts from 2025
        </Text>
        <Text
          size='sm'
          as='small'
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          We don&rsquo;t talk about 2025
        </Text>
        <Text className='mt-24 text-muted-foreground italic'>
          Nothing to see here. The posts are still trapped somewhere between my
          brain and the keyboard. They will be released when ready.
        </Text>
        <Text size='sm' className='text-muted-foreground'>
          (They are not ready.)
        </Text>
      </Section>
    </>
  );
}
