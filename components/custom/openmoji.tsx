import Image from "next/image";
import { EMOJIS } from "@/lib/openmoji";

export function Openmoji(props: Props) {
    const emoji = EMOJIS[props.hexcode];

    if (!emoji) return null;

    return (
        <Image
            className={props.className}
            alt={emoji.annotation}
            width={props.size ?? 24}
            height={props.size ?? 24}
            src={`/openmoji/${props.style ?? "color"}/${props.hexcode}.svg`}
            loading="eager"
            priority
        />
    );
}

type Props = {
    hexcode: keyof typeof EMOJIS;
    size?: number;
    style?: "black" | "color";
    className?: string;
};

export type EmojiHexcode = keyof typeof EMOJIS;
