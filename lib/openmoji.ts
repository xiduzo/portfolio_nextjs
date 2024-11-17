import { openmojis, type Emoji } from "openmoji";

export const EMOJIS = openmojis.reduce(
    (acc, emoji) => {
        acc[emoji.hexcode] = emoji;

        return acc;
    },
    {} as Record<string, Emoji>,
);
