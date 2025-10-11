import { EMOJIS } from "@/lib/openmoji";
import { cn } from "@/lib/utils";

export function Openmoji(props: Props) {
    const emoji = EMOJIS[props.hexcode];

    if (!emoji) return null;

    return (
        <div
            className={cn(
                "open-moji",
                `text-[${props.size ?? 24}px]`,
                props.className,
            )}
            style={{
                fontSize: props.size ?? 24,
                lineHeight: 1,
            }}
            dangerouslySetInnerHTML={{
                __html: `&#x${props.hexcode};`,
            }}
        ></div>
    );
}

type Props = {
    hexcode: keyof typeof EMOJIS;
    size?: number;
    style?: "black" | "color";
    className?: string;
};

export type EmojiHexcode = keyof typeof EMOJIS;
