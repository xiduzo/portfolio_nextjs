import Link from 'next/link';
import { Section } from './section';
import { Text } from './text';
import { Button } from '../ui/button';

export function Links(props: Props) {
  return (
    <Section>
      <Text as='h2' variant='subheading' size='sm'>
        {props.title}
      </Text>
      <ul className='flex gap-4 flex-wrap'>
        {props.links.map(([href, text]) => (
          <li className='m-0 list-none' key={href}>
            <Button variant='ghost' asChild>
              <Link href={href} passHref target='_blank'>
                {text}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

type Props = {
  title: string;
  links: [string, string][];
};
