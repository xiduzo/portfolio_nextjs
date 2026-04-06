import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Openmoji } from '@/components/custom/openmoji';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type SitePageSeo,
  sitePageJsonLdFromSeo,
  sitePageMetadata,
} from '@/lib/schema';

const SEO: SitePageSeo = {
  title: '2026 — Blog archive',
  description:
    'Posts from 2026 on sanderboer.nl, starting with Designing Intent—a guide to spec-driven and agentic AI workflows so you delegate outcomes, not one-off prompts.',
  path: '/post/2026',
  openGraphTitle: 'Blog archive — 2026',
  openGraphDescription: 'Designing intent and more from 2026.',
  pageJsonLd: 'CollectionPage',
};

export const metadata = sitePageMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={sitePageJsonLdFromSeo(SEO)} />
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
