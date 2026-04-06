import Link from 'next/link';
import { Text } from '@/components/custom/text';
import { HighlightedProjects } from '@/components/custom/highlighted-projects';
import { Section } from '@/components/custom/section';
import { ProfileAvatar } from '@/components/custom/profile-avatar';
import { CallToAction } from '@/components/custom/call-to-action';
import { ScrollHint } from '@/components/custom/scroll-hint';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type SitePageSeo,
  sitePageJsonLdFromSeo,
  sitePageMetadata,
} from '@/lib/schema';

const SEO: SitePageSeo = {
  title: 'Sander Boer — Developer & Designer',
  description:
    'Welcome. I am Sander Boer, a developer and designer. Explore my portfolio for case studies, side projects, and articles on React, TypeScript, testing, and working with AI.',
  path: '/',
  openGraphDescription:
    'Portfolio of developer and designer Sander Boer: shipping software that feels as good as it works.',
};

export const metadata = sitePageMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={sitePageJsonLdFromSeo(SEO)} />
      <Section className='min-h-screen flex flex-col justify-between'>
        <Text as='h1' variant='heading' motion='none' className='mb-0'>
          <span className='inline-block motion-rotate-in-12 motion-ease-spring-bounciest motion-delay-700'>
            👋
          </span>{' '}
          <code className="after:content-['`'] after:-ml-8">Hello world!</code>
        </Text>
        <div className='flex gap-6 md:gap-12 flex-col-reverse xl:flex-row items-center'>
          <section>
            <Text motion='none'>
              I am <strong>Sander</strong>. A developer who turns complex
              problems into tools people actually enjoy using.
            </Text>
            <Text motion='none'>
              I{' '}
              <span className='motion-preset-pulse inline-block motion-ease-bounce'>
                ♥️
              </span>{' '}
              bridging the gap between <em>good engineering</em> and{' '}
              <em>great experience</em>. Making professionals faster and
              individuals more capable.
            </Text>
            <Text as='div' className='flex justify-center mt-12 md:mt-20'>
              <Link href='/about'>
                <CallToAction>See what drives me</CallToAction>
              </Link>
            </Text>
          </section>
          <ProfileAvatar
            alt='Sander Boer'
            className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all'
            sizes='(min-width: 1024px) 384px, (min-width: 768px) 320px, 288px'
            priority
          />
        </div>
        <ScrollHint />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Work worth talking about
        </Text>
        <Text size='sm' className='text-muted-foreground pb-12'>
          A selection of <em>things</em> built to solve real problems.
        </Text>
        <HighlightedProjects />
      </Section>
      <Section className='flex justify-center flex-wrap'>
        <Link href='/project'>
          <CallToAction>
            Explore all my work
          </CallToAction>
        </Link>
      </Section>
    </>
  );
}
