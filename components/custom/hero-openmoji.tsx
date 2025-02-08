"use client";

import { useWindowSize } from "usehooks-ts";
import { EmojiHexcode, Openmoji } from "./openmoji";
import { useMemo } from "react";

export function HeroOpenMoji(props: Props) {
    const { width } = useWindowSize();

    const size = useMemo(() => {
        if (width < 500) return 180;
        if (width < 768) return 240;
        if (width < 1024) return 300;
        return 420;
    }, [width]);

    return (
        <Openmoji
            hexcode={props.emoji}
            size={size}
            className="translate-y-28 md:translate-y-32 lg:translate-y-36 motion-blur-in-3xl transition-all motion-opacity-in-65 motion-delay-75"
        />
    );
}

type Props = {
    emoji: EmojiHexcode;
};
