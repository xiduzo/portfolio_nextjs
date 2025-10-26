import { Badge } from '../ui/badge';
import { Section } from './section';
import { Text } from './text';

const pluralRules = new Intl.PluralRules('en-US');

const pluralForms = new Map([
  ['one', 'minute'],
  ['other', 'minutes'],
]);

export function Title(props: Props) {
  return (
    <Section space='none' className='text-center max-w-screen-lg mx-auto mt-24'>
      <Text
        as='h1'
        size='sm'
        variant='body'
        className='italic text-muted-foreground font-light motion-preset-slide-up-md'
        motion='none'
      >
        {props.title},
      </Text>
      <Text
        size='lg'
        variant='subheading'
        className='text-center mb-8 motion-preset-slide-up-md motion-delay-75'
        motion='none'
      >
        {props.subtitle}
      </Text>
      <Badge variant='outline' className='motion-scale-in-0 motion-delay-200'>
        {props.readTime} {pluralForms.get(pluralRules.select(props.readTime))}{' '}
        read
      </Badge>
    </Section>
  );
}

type Props = {
  title: string;
  subtitle: string;
  readTime: number;
};

export type TitleProps = Props;
