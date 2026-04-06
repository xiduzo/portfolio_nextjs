import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type SitePageSeo,
  sitePageJsonLdFromSeo,
  sitePageMetadata,
} from '@/lib/schema';

const SEO: SitePageSeo = {
  title: '2025 — Blog archive',
  description:
    'Archive page for posts published in 2025 on sanderboer.nl. New writing will appear here and on the main blog index when it goes live.',
  path: '/post/2025',
  openGraphTitle: 'Blog archive — 2025',
  openGraphDescription: 'Placeholder archive for 2025 posts.',
  pageJsonLd: 'CollectionPage',
};

export const metadata = sitePageMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={sitePageJsonLdFromSeo(SEO)} />
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
