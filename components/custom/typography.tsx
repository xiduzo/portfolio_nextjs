import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import {
    Alegreya,
    Caveat,
    Fira_Sans_Extra_Condensed,
    Work_Sans,
} from "next/font/google";

export const headings = Alegreya({
    variable: "--font-heading",
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const subHeadings = Fira_Sans_Extra_Condensed({
    variable: "--font-subheading",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const body = Work_Sans({
    variable: "--font-body",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const note = Caveat({
    variable: "--font-note",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export function Text(props: Props) {
    const Component = props.as ?? "p";

    return (
        <Component
            className={typography({
                className: props.className,
                variant: props.variant,
                size: props.size,
            })}
        >
            {props.children}
        </Component>
    );
}

type Props = PropsWithChildren &
    VariantProps<typeof typography> & {
        className?: string;
        as?: keyof JSX.IntrinsicElements; // TODO: narrow down?
    };

<Text className="font"></Text>;

const typography = cva("", {
    variants: {
        variant: {
            heading: `font-extrabold font-heading`,
            subheading: "font-extrabold font-subheading",
            body: "font-body",
            note: "font-note text-center",
        },
        size: {
            sm: "",
            base: "",
            lg: "",
        },
    },
    defaultVariants: {
        variant: "body",
        size: "base",
    },
    compoundVariants: [
        {
            variant: "heading",
            size: "sm",
            className: "text-7xl mb-8",
        },
        {
            variant: "heading",
            size: "base",
            className: "text-8xl mb-10",
        },
        {
            variant: "heading",
            size: "lg",
            className: "text-9xl mb-12",
        },
        {
            variant: "subheading",
            size: "sm",
            className: "text-4xl mb-7",
        },
        {
            variant: "subheading",
            size: "base",
            className: "text-5xl mb-8",
        },
        {
            variant: "subheading",
            size: "lg",
            className: "text-6xl mb-9",
        },
        {
            variant: "body",
            size: "sm",
            className: "text-2xl mb-3",
        },
        {
            variant: "body",
            size: "base",
            className: "text-3xl mb-4",
        },
        {
            variant: "body",
            size: "lg",
            className: "text-4xl mb-5",
        },
        {
            variant: "note",
            size: "sm",
            className: "text-xl mb-2",
        },
        {
            variant: "note",
            size: "base",
            className: "text-2xl mb-3",
        },
        {
            variant: "note",
            size: "lg",
            className: "text-3xl mb-4",
        },
    ],
});
