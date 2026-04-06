import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Openmoji } from '@/components/custom/openmoji';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts from 2026',
  description: 'Blog posts from 2026 — including designing intent and working agentically with AI.',
  alternates: { canonical: '/post/2026' },
};

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading'>
          Posts from 2026
        </Text>
        <Text
          size='sm'
          as='small'
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          Back. Rested. Arguably wiser.
        </Text>
        <ul className='mt-24 flex flex-col gap-4 list-none'>
          <li>
            <Link href='/post/2026/designing-intent'>
              <WobbleCard containerClassName='bg-violet-300 dark:bg-violet-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-violet-950 dark:text-violet-100'
                >
                  Designing intent
                  <Openmoji
                    hexcode='2728'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-violet-950 dark:text-violet-50 max-w-xl'
                >
                  Stop prompting. Start delegating.
                </Text>
                <Openmoji
                  hexcode='2728'
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
