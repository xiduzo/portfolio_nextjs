declare module "openmoji" {
    export type Emoji = {
        emoji: string;
        hexcode: string;
        group: string;
        subgroups: string;
        annotation: string;
        tags: string;
        openmoji_tags: string;
        openmoji_author: string;
        openmoji_date: string;
        skintone: string;
        skintone_combination: string;
        skintone_base_emoji: string;
        skintone_base_hexcode: string;
        unicode: number;
        order: number;
        openmoji_images: Record<string, { svg: string }>;
    };
    const openmojis: Emoji[] = [];

    return { openmojis };
}

// {
//     "emoji": "😡",
//     "hexcode": "1F621",
//     "group": "smileys-emotion",
//     "subgroups": "face-negative",
//     "annotation": "enraged face",
//     "tags": "angry, enraged, face, mad, pouting, rage, red",
//     "openmoji_tags": "",
//     "openmoji_author": "Mariella Steeb",
//     "openmoji_date": "2018-04-18",
//     "skintone": "",
//     "skintone_combination": "",
//     "skintone_base_emoji": "",
//     "skintone_base_hexcode": "",
//     "unicode": 0.6,
//     "order": 104,
//     "openmoji_images": {
//         "black": {
//             "svg": "/Users/sander.boer/Documents/personal/portfolio_nextjs/.next/server/vendor-chunks/black/svg/1F621.svg"
//         },
//         "color": {
//             "svg": "/Users/sander.boer/Documents/personal/portfolio_nextjs/.next/server/vendor-chunks/color/svg/1F621.svg"
//         }
//     }
// }
