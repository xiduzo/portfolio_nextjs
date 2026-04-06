import { cva, VariantProps } from 'class-variance-authority';
import { Children, JSX, PropsWithChildren, isValidElement } from 'react';
import { Alegreya, Caveat, IBM_Plex_Mono } from 'next/font/google';

export const headings = Alegreya({
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const subHeadings = IBM_Plex_Mono({
  variable: '--font-subheading',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const body = IBM_Plex_Mono({
  variable: '--font-body',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const note = Caveat({
  variable: '--font-note',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function extractText(children: React.ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') return child;
      if (typeof child === 'number') return String(child);
      if (isValidElement<{ children?: React.ReactNode }>(child) && child.props.children)
        return extractText(child.props.children);
      return '';
    })
    .join('');
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const headingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

export function Text<T extends keyof JSX.IntrinsicElements = 'p'>(
  props: Props<T>
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { as: Component = 'p' as any, ...restProps } = props;

  const isHeading =
    headingTags.has(Component as string) && props.variant === 'subheading';
  const id =
    isHeading && !restProps.id
      ? slugify(extractText(props.children))
      : restProps.id;

  return (
    <Component
      {...restProps}
      id={id}
      className={typography({
        className: `${props.className ?? ''} ${isHeading ? 'scroll-mt-32 xl:scroll-mt-20' : ''}`.trim(),
        variant: props.variant,
        size: props.size,
        motion: props.motion,
      })}
    >
      {props.children}
    </Component>
  );
}

type Props<T extends keyof JSX.IntrinsicElements> = PropsWithChildren &
  VariantProps<typeof typography> & {
    className?: string;
    as?: T;
  } & JSX.IntrinsicElements[T];

const typography = cva('', {
  variants: {
    variant: {
      heading: `font-extrabold font-heading`,
      subheading: 'font-extrabold font-subheading',
      body: 'font-body',
      note: 'font-note text-center',
    },
    size: {
      sm: '',
      base: '',
      lg: '',
    },
    motion: {
      intersect:
        'intersect-once intersect:motion-translate-y-in-25 intersect:motion-opacity-in-40 intersect:motion-duration-700',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'body',
    size: 'base',
    motion: 'intersect',
  },
  compoundVariants: [
    {
      variant: 'heading',
      size: 'sm',
      className: 'text-6xl md:text-7xl mb-8',
    },
    {
      variant: 'heading',
      size: 'base',
      className: 'text-7xl md:text-8xl mb-10',
    },
    {
      variant: 'heading',
      size: 'lg',
      className: 'text-8xl md:text-9xl mb-12',
    },
    {
      variant: 'subheading',
      size: 'sm',
      className: 'text-3xl md:text-4xl mb-6',
    },
    {
      variant: 'subheading',
      size: 'base',
      className: 'text-4xl md:text-5xl mb-8',
    },
    {
      variant: 'subheading',
      size: 'lg',
      className: 'text-5xl md:text-6xl mb-10',
    },
    {
      variant: 'body',
      size: 'sm',
      className: 'text-xl md:text-2xl mb-3',
    },
    {
      variant: 'body',
      size: 'base',
      className: 'text-2xl md:text-3xl mb-6',
    },
    {
      variant: 'body',
      size: 'lg',
      className: 'text-3xl md:text-4xl mb-9',
    },
    {
      variant: 'note',
      size: 'sm',
      className: 'text-lg md:text-xl mb-2',
    },
    {
      variant: 'note',
      size: 'base',
      className: 'text-xl md:text-2xl mb-3',
    },
    {
      variant: 'note',
      size: 'lg',
      className: 'text-2xl md:text-3xl mb-4',
    },
  ],
});
