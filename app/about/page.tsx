import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { Image } from '@/components/custom/image';
import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { TextRevealByWord } from '@/components/magic-ui/text-reveal';
import { ScrollHint } from '@/components/custom/scroll-hint';
import { SmileIcon } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'About Sander Boer — Developer & Designer',
  },
  description:
    'Meet Sander Boer: designer by training, developer by obsession. Background, values, GitHub activity, and how I collaborate when the goal is craft, clarity, and usable software.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: 'https://sanderboer.nl/about',
    title: 'About Sander Boer',
    description:
      'Background and approach—design education, hands-on engineering, tinkering, and what drives the work.',
  },
};

export default function Page() {
  return (
    <>
      <Section className='flex flex-col items-center justify-between min-h-screen'>
        <div className='flex-grow flex items-center'>
          <Avatar className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all'>
            <AvatarImage src='/me.jpeg' alt='Sander Boer' />
            <AvatarFallback>
              <SmileIcon size={72} className='text-muted-foreground' />
            </AvatarFallback>
          </Avatar>
        </div>
        <ScrollHint className='-mt-32' />
      </Section>
      <TextRevealByWord text='Designer by education, Developer by passion, Tinkerer by nature.' />
      <Section>
        <Text motion='none'>
          I have always been fascinated by technology. While my friends played{' '}
          <Link target='_blank' href='https://tibia.com'>
            tibia
          </Link>
          , I was busy reverse-engineering my own version of it.
        </Text>
        <Text motion='none'>
          That is where my programming journey began — hosting a server,
          designing a database, and bending game code to my will. One result?
          A fully working{' '}
          <Link
            href='https://otland.net/threads/bombsquad-9-6.187509'
            target='_blank'
          >
            bomb squad mod
          </Link>{' '}
          that players actually enjoyed.
        </Text>
        <Text>
          That drive of taking something apart to understand it, then building
          something better has never left me. It started with{' '}
          <code>XAMPP</code>. These days the stack is a bit more complex.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Creative technologist
        </Text>
        <Text>
          Most teams split design and engineering into separate silos. I sit at
          the intersection. Fluent in both.<sup>1</sup> That means I can turn a
          vague idea into a polished, working product without the usual
          back-and-forth. I speak designer and developer, and I bridge the
          gap.<sup>2</sup>
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>
              With a bachelor&apos;s degree in{' '}
              <Link target='_blank' href='https://www.cmd-amsterdam.nl'>
                Communication and Multimedia design
              </Link>{' '}
              and a master&apos;s degree in{' '}
              <Link
                href='https://www.masterdigitaldesign.com/alumni/sander-boer'
                target='_blank'
              >
                Digital Design
              </Link>
            </li>
            <li>
              With{' '}
              {new Date().getFullYear() - new Date('01-01-2007').getFullYear()}+
              years of software development experience
            </li>
          </ol>
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          What I like to do
        </Text>
        <Text aria-label='Fusing hot technology with magic design'>
          Fusing{' '}
          <span className='relative inline-block w-8'>
            <span className='absolute bottom-0 left-0 motion-preset-stretch motion-ease-bounce motion-loop-infinite'>
              🔥
            </span>
            <span className='absolute bottom-0 left-2 motion-preset-stretch motion-delay-500 motion-ease-bounce motion-loop-infinite'>
              🔥
            </span>
            <span className='absolute bottom-0 -left-2 motion-preset-stretch motion-delay-150 motion-ease-bounce motion-loop-infinite'>
              🔥
            </span>
          </span>{' '}
          technology with{' '}
          <SparklesText className='font-base inline-block text-3xl'>
            🪄
          </SparklesText>{' '}
          design.
        </Text>
        <Text>
          I build tools that make professionals faster and individuals more
          capable. Things that actually change how people work.
        </Text>
        <Text>
          My best work happens in cross-functional teams. Designers, developers,
          researchers, stakeholders. The more diverse the room, the better the
          outcome. I have seen too many &ldquo;great&rdquo; solutions fail because only one
          perspective built them.
        </Text>
        <Text>
          Where I add the most value: taking ownership of the full
          design-to-delivery pipeline. From early UX thinking to the last pixel
          in production.
        </Text>
      </Section>
      <Section className='flex flex-col items-center mb-60 max-w-[95%] overflow-hidden'>
        <Text as='h2' variant='subheading' size='sm'>
          What I am up to
        </Text>
        <Link href='https://github.com/xiduzo' target='_blank'>
          <GitHubCalendar username='xiduzo' />
        </Link>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Who is Sander <em>really</em>?
        </Text>
        <Text>
          Besides solving wicked problems, I enjoy cooking — and eating. Making
          a mean pasta or some sloppy tacos but whenever there is flavour, I’m
          in!
        </Text>
        <Text>
          I like (to be in) nature and am your go-to-person to <del>annoy</del><ins>entertain</ins>{" "}
          the house pet at any party!
        </Text>
      </Section>
      <Section variant='full'>
        <Image
          src='/about/me_1.png'
          alt='Sander with food, in nature and with a dog'
          width={1920}
          height={1080}
          className='w-full'
        />
      </Section>
      <Section>
        <Text>
          I try to experiment with random technologies like 3D-printing,
          Augmented- and Virtual-Reality or micro-controllers. Stepping away
          from that screen and interact with the (real) world.
        </Text>
      </Section>
      <Section variant='full'>
        <Image
          src='/about/technologies.png'
          alt='Random technologies Sander has experimented with'
          width={1920}
          height={1080}
          className='w-full'
        />
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Sharing === caring
        </Text>
        <Text>
          I give workshops, mentor students, and stay active in the developer
          community. Sharing what I know makes everyone better — including me.
          Teaching forces you to actually understand something, not just use it.
        </Text>
      </Section>
      <Section variant='full'>
        <Image
          src='/about/sharing.png'
          alt='Sander in various workshops and mentoring sessions'
          width={1920}
          height={1080}
          className='w-full'
        />
      </Section>
      <Section>
        <Text className='mb-80'>
          You can always challenge me for a game but be aware…
        </Text>
        <Text>...I am in it to win it.</Text>
      </Section>
      <Section variant='full'>
        <Image
          src='/about/games.png'
          alt='Sander playing various games'
          width={1920}
          height={1080}
          className='w-full'
        />
      </Section>
      <Section>
        <Text>
          And if the sun is out, I’d love to join you for a beer (or tequila).
        </Text>
      </Section>
      <Section variant='full'>
        <Image
          src='/about/beer.png'
          alt='Sander enjoying some beers in the sun and visiting tequila in Mexico'
          width={1920}
          height={1080}
          className='w-full'
        />
      </Section>
    </>
  );
}
