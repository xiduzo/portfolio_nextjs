import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Openmoji } from '@/components/custom/openmoji';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading'>
          All posts
        </Text>
        <Text
          size='sm'
          as='small'
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          A bunch of <em>things</em> I wrote so future me can nod knowingly.
        </Text>
        <ul className='mt-24 flex flex-col gap-4 list-none'>
          <li>
            <Link href='/post/2024/zod'>
              <WobbleCard containerClassName='bg-emerald-300 dark:bg-emerald-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-emerald-950 dark:text-emerald-100'
                >
                  Zod
                  <Openmoji
                    hexcode='1F6C2'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-emerald-950 dark:text-emerald-50 max-w-xl'
                >
                  Stronger interfaces, cleaner code, fewer bugs
                </Text>
                <Openmoji
                  hexcode='1F6C2'
                  size={420}
                  className='xl:block hidden absolute right-6 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/post/2024/testing'>
              <WobbleCard containerClassName='bg-red-300 dark:bg-red-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-red-950 dark:text-red-100'
                >
                  Testing
                  <Openmoji
                    hexcode='1F9EA'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-red-950 dark:text-red-50 max-w-xl'
                >
                  And become a better engineer
                </Text>
                <Openmoji
                  hexcode='1F9EA'
                  size={420}
                  className='xl:block hidden absolute right-6 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href='/post/2024/talking-to-water'>
              <WobbleCard containerClassName='bg-violet-300 dark:bg-violet-900'>
                <Text
                  variant='subheading'
                  motion='none'
                  className='flex gap-4 justify-between text-violet-950 dark:text-violet-100'
                >
                  Talking to water
                  <Openmoji
                    hexcode='1F30A'
                    size={42}
                    className='block xl:hidden'
                  />
                </Text>
                <Text
                  motion='none'
                  className='text-violet-950 dark:text-violet-50 max-w-xl'
                >
                  The art of the bodge
                </Text>
                <Openmoji
                  hexcode='1F30A'
                  size={420}
                  className='xl:block hidden absolute right-6 top-8 -z-10'
                />
              </WobbleCard>
            </Link>
          </li>
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
