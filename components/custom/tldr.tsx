import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Section } from './section';
import { Text } from './text';
import { EllipsisIcon } from 'lucide-react';

export function TLDR(props: Props) {
  return (
    <Section>
      <Accordion
        type='single'
        collapsible
        dir='ltr'
        className='[&_div]:border-none'
      >
        <AccordionItem value='tldr'>
          <AccordionTrigger
            className={cn(
              'flex-row-reverse',
              'text-muted-foreground hover:text-muted-foreground hover:no-underline',
              '[&[data-state=open]_svg.lucide-ellipsis]:opacity-0',
              '[&[data-state=open]_svg.lucide-chevron-down]:rotate-0 [&[data-state=closed]_svg.lucide-chevron-down]:-rotate-90'
            )}
          >
            <Text
              motion='none'
              size='sm'
              className={cn(
                'flex-grow text-left flex items-center',
                'text-muted-foreground hover:text-muted-foreground',
                'ml-2.5 !mb-0'
              )}
            >
              <span className='inline-block text-3xl mr-2' aria-hidden='true'>
                {'/**'}
              </span>
              TL;DR
              <EllipsisIcon
                aria-hidden='true'
                className='opacity-60 size-4 ml-0.5'
              />
            </Text>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground after:content-['\*/'] after:font-body after:ml-11 after:text-3xl">
            <ul
              className='list-outside ml-20 [&_li::marker]:font-body [&_li::marker]:text-3xl'
              style={{ listStyleType: "'* '" }}
            >
              {props.lines.map((line, index) => (
                <Text
                  as='li'
                  motion='none'
                  size='sm'
                  className='!mb-1.5'
                  key={index}
                >
                  {line}
                </Text>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}

type Props = {
  lines: string[];
};
