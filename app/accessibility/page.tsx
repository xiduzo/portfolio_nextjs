import Link from 'next/link';
import { Text } from '@/components/custom/text';
import { Section } from '@/components/custom/section';
import { Quote } from '@/components/custom/quote';
import { CallToAction } from '@/components/custom/call-to-action';
import { MailIcon } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Section>
        <Text size='sm' as='h1' variant='heading' motion='none'>
          The web works best when it works for everyone
        </Text>
        <Quote
          link='https://www.w3.org/mission/accessibility/'
          cite='Tim Berners-Lee'
        >
          The power of the Web is in its universality. Access by everyone{' '}
          <strong>regardless of ability</strong> is an{' '}
          <em className='text-muted-foreground italic'>essential</em> aspect.
        </Quote>
        <Text motion='none'>
          That is not just a nice idea — it is a responsibility. I build with
          accessibility in mind from the start, not as an afterthought.
        </Text>
        <Text motion='none'>
          Found something that does not work for you? I want to know. Whether it
          is a screen reader issue, a keyboard trap, or anything in between.
        </Text>
        <Text motion='none'>
          Your feedback helps me do better!
        </Text>
        <Text as='div' className='flex justify-center flex-wrap pt-12'>
          <Link href='mailto:mail@sanderboer.nl' className='text-2xl underline'>
            <CallToAction icon={<MailIcon />}>Report an issue</CallToAction>
          </Link>
        </Text>
      </Section>
    </>
  );
}
