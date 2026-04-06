import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Openmoji } from '@/components/custom/openmoji';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2023 — Blog archive',
  description:
    'Writing from 2023 on sanderboer.nl, including a long post on React Suspense—how it really works beyond the “magic,” with mental models for concurrent rendering.',
  alternates: { canonical: '/post/2023' },
  openGraph: {
    url: 'https://sanderboer.nl/post/2023',
    title: 'Blog archive — 2023',
    description: 'React Suspense deep dive and other notes from 2023.',
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading'>
          Posts from 2023
        </Text>
        <Text
          size='sm'
          as='small'
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          One post. Turns out I am a slow writer.
        </Text>
        <ul className='mt-24 flex flex-col gap-4 list-none'>
          <li>
            <Link href='/post/2023/suspense'>
              <WobbleCard containerClassName='bg-sky-300 dark:bg-sky-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-sky-950 dark:text-sky-100'
                >
                  {'<Suspense />'}
                  <Openmoji
                    hexcode='1FA84'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-sky-950 dark:text-sky-50 max-w-xl'
                >
                  Unravelling the magic from React
                </Text>
                <Openmoji
                  hexcode='1FA84'
                  size={420}
                  className='xl:block hidden absolute right-6 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
