import { Badge } from '../ui/badge';
import { Section } from './section';
import { Text } from './text';

export function Technologies(props: Props) {
  return (
    <Section>
      <Text
        size='sm'
        as='small'
        className="text-muted-foreground before:content-['//'] before:mr-2"
      >
        Technologies used
      </Text>
      <ul className='flex flex-wrap mt-2 gap-1.5 max-w-sm pointer-events-none intersect-once intersect:motion-translate-y-in-25 intersect:motion-opacity-in-40 intersect:motion-duration-700'>
        {props.technologies.map(technology => (
          <li key={technology} className='m-0 list-none'>
            <Badge variant='secondary'>{technology}</Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}

type Props = {
  technologies: string[];
};
