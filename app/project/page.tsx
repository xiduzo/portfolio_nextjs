import { Section } from '@/components/custom/section';
import { HighlightedProjects } from '@/components/custom/highlighted-projects';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Openmoji } from '@/components/custom/openmoji';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — apps, tools & case studies',
  description:
    'Selected work by Sander Boer: collaborative party playlists, visual microcontroller tooling, peer feedback products, LLM-assisted grading experiments, glossary platforms, and auction-platform modernization.',
  alternates: { canonical: '/project' },
  openGraph: {
    url: 'https://sanderboer.nl/project',
    title: 'Projects — Sander Boer',
    description:
      'Case studies and shipped products spanning mobile, web, hardware-adjacent tools, and large legacy modernization.',
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading' motion='none'>
          Things I made
        </Text>
        <Text>
          Every project here started with a real problem — something that annoyed
          me enough to build a solution.
        </Text>
        <Text>
          Some shipped to thousands of users. Some taught me something I could
          not have learned any other way. All of them were worth building.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading' motion='none'>
          Highlighted
        </Text>
        <Text size='sm' className='text-muted-foreground pb-12' motion='none'>
          A selection of <em>things</em> I am proud to share.
        </Text>
        <HighlightedProjects />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Archive
        </Text>
        <Text size='sm' className='text-muted-foreground'>
          More projects — each one a different problem, a different lesson.
        </Text>
        <ul className='mt-24 flex flex-col gap-4 list-none'>
          <li>
            <Link href='/project/assessor-bot'>
              <WobbleCard containerClassName='bg-green-300 dark:bg-green-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex justify-between gap-4 text-green-950 dark:text-green-100'
                >
                  Assessor bot
                  <Openmoji
                    hexcode='1F99C'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-green-950 dark:text-green-50 max-w-xl'
                >
                  What if students got instant, honest feedback — without waiting for a teacher?
                </Text>
                <Openmoji
                  hexcode='1F99C'
                  size={420}
                  className='xl:block hidden absolute right-4 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/project/veilenext'>
              <WobbleCard containerClassName='bg-indigo-300 dark:bg-indigo-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex justify-between gap-4 text-indigo-950 dark:text-indigo-100'
                >
                  VeileNext
                  <Openmoji
                    hexcode='1F490'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-indigo-950 dark:text-indigo-50 max-w-xl'
                >
                  Dragging the world&apos;s largest flower auction into the modern web
                </Text>
                <Openmoji
                  hexcode='1F490'
                  size={420}
                  className='xl:block hidden absolute right-4 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/project/spirit'>
              <WobbleCard containerClassName='bg-orange-300 dark:bg-orange-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex text-orange-950 dark:text-orange-100 justify-between gap-4'
                >
                  Spirit
                  <Openmoji
                    hexcode='1FA9C'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-orange-950 dark:text-orange-50 max-w-xl'
                >
                  A tool that helps OCD patients track and break their compulsion cycles
                </Text>
                <Openmoji
                  hexcode='1FA9C'
                  size={420}
                  className='xl:block hidden absolute right-0 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/project/livestock'>
              <WobbleCard containerClassName='bg-cyan-300 dark:bg-cyan-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex justify-between gap-4 text-cyan-950 dark:text-cyan-100'
                >
                  LiveStock
                  <Openmoji
                    hexcode='1F4B0'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-cyan-950 dark:text-cyan-50 max-w-xl'
                >
                  Making crypto wallets feel less like rocket science
                </Text>
                <Openmoji
                  hexcode='1F4B0'
                  size={420}
                  className='xl:block hidden absolute right-0 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/project/athena'>
              <WobbleCard containerClassName='bg-amber-300 dark:bg-amber-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-amber-950 dark:text-amber-100'
                >
                  Athena
                  <Openmoji
                    hexcode='1F984'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-amber-950 dark:text-amber-50 max-w-xl'
                >
                  Peer feedback that students actually engage with
                </Text>
                <Openmoji
                  hexcode='1F984'
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
