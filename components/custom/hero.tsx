import { cva } from 'class-variance-authority';
import { VelocityScroll } from '../magic-ui/scroll-based-velocity';
import { Badge } from '../ui/badge';
import { EmojiHexcode } from './openmoji';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Title, TitleProps } from './title';
import { ScrollHint } from './scroll-hint';
import { HeroOpenMoji } from './hero-openmoji';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
});

export function Hero(props: Props) {
  return (
    <header className='mb-24 md:mb-32 lg:mb-44 flex flex-col relative z-0 min-h-[90vh] justify-between'>
      <section className='absolute top-6 right-6 z-20 flex gap-2'>
        <time dateTime={props.publishDate}>
          <Badge variant='secondary' className='pointer-events-none'>
            {dateFormatter.format(new Date(props.publishDate))}
          </Badge>
        </time>
        {props.link && (
          <Link href={props.link} target='_blank' tabIndex={-1}>
            <Badge className='space-x-1'>
              <span>Visit project</span> <ExternalLink size={12} />
            </Badge>
          </Link>
        )}
      </section>
      <section
        className={header({ className: props.className })}
        aria-hidden='true'
      >
        <section className='absolute w-full text-9xl leading-[9.25rem] font-extrabold font-heading left-0 -bottom-16'>
          <VelocityScroll text={props.title} default_velocity={2} amount={1} />
        </section>
        <HeroOpenMoji emoji={props.emoji} />
      </section>
      <Title
        title={props.title}
        subtitle={props.subtitle}
        readTime={props.readTime}
      />
      <ScrollHint />
    </header>
  );
}

type Props = TitleProps & {
  emoji: EmojiHexcode;
  publishDate: string;
  link?: string;
  className?: string;
};

const header = cva(
  'flex items-end justify-center z-10 motion-grayscale-in motion-delay-150'
);
