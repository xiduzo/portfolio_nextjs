import Link from 'next/link';
import { Text } from '@/components/custom/text';
import { HighlightedProjects } from '@/components/custom/highlighted-projects';
import { Section } from '@/components/custom/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CallToAction } from '@/components/custom/call-to-action';
import { ScrollHint } from '@/components/custom/scroll-hint';
import { SmileIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sander Boer — Developer & Designer',
  description:
    'Developer who turns complex problems into tools people actually enjoy using. Bridging the gap between good engineering and great experience.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return (
    <>
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
          <Avatar className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all'>
            <AvatarImage src='/me.jpeg' alt='Sander Boer' fetchPriority='high' />
            <AvatarFallback>
              <SmileIcon size={72} className='text-muted-foreground' />
            </AvatarFallback>
          </Avatar>
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
