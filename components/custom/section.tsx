import { cva, VariantProps } from 'class-variance-authority';
import { JSX, PropsWithChildren } from 'react';

export function Section<T extends keyof JSX.IntrinsicElements = 'section'>(
  props: Props<T>
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { as: Component = 'section' as any, ...restProps } = props;

  return (
    <Component
      {...restProps}
      className={section({
        className: props.className,
        variant: props.variant,
        space: props.space,
      })}
    >
      {props.children}
    </Component>
  );
}

type Props<T extends keyof JSX.IntrinsicElements> = PropsWithChildren &
  VariantProps<typeof section> & {
    className?: string;
    as?: T;
  } & JSX.IntrinsicElements[T];

const section = cva('', {
  variants: {
    variant: {
      default: 'container mx-auto px-4 lg:px-12',
      full: '',
    },
    space: {
      none: '',
      sm: 'pt-4 pb-8 md:pb-20 lg:pt-12 lg:pb-24',
      base: 'pt-8 pb-12 md:pb-28 lg:pt-16 lg:pb-32',
      lg: 'pt-12 pb-16 md:pb-36 lg:pt-20 lg:pb-40',
    },
  },
  defaultVariants: {
    variant: 'default',
    space: 'base',
  },
});
