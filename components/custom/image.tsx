import { cva } from 'class-variance-authority';
import NextImage, { ImageProps } from 'next/image';

export async function Image(props: Props) {
  return (
    <NextImage
      width={1920}
      height={1080}
      loading='lazy'
      sizes='(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw'
      {...props}
      className={image({
        className: props.className,
      })}
    />
  );
}

type Props = ImageProps;

const image = cva(
  'intersect-once intersect:motion-preset-blur-up-md intersect:motion-delay-500 max-w-[80vw]'
);
