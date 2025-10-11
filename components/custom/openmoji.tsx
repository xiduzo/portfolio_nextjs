import { EMOJIS } from "@/lib/openmoji";
import { cn } from "@/lib/utils";

export function Openmoji(props: Props) {
  const emoji = EMOJIS[props.hexcode];

  if (!emoji) return null;

  return (
    <span
      className={cn(
        "open-moji inline-block",
        `text-[${props.size ?? 24}px]`,
        props.className
      )}
      style={{
        fontSize: props.size ?? 24,
        lineHeight: 1,
      }}
      dangerouslySetInnerHTML={{
        __html: `&#x${props.hexcode};`,
      }}
    ></span>
  );
}

type Props = {
  hexcode: keyof typeof EMOJIS;
  size?: number;
  style?: "black" | "color";
  className?: string;
};

export type EmojiHexcode = keyof typeof EMOJIS;
