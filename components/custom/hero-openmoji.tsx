import { EmojiHexcode, Openmoji } from './openmoji';

export function HeroOpenMoji(props: Props) {
  return (
    <Openmoji
      hexcode={props.emoji}
      className='translate-y-28 md:translate-y-32 lg:translate-y-36 motion-blur-in-3xl transition-all motion-opacity-in-65 motion-delay-75 !text-[180px] sm:!text-[240px] md:!text-[300px] lg:!text-[420px]'
    />
  );
}

type Props = {
  emoji: EmojiHexcode;
};
