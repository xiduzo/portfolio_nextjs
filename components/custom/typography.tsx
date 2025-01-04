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

export function Text<T extends keyof JSX.IntrinsicElements = "p">(
    props: Props<T>,
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { as: Component = "p" as any, ...restProps } = props;

    return (
        <Component
            {...restProps}
            className={typography({
                className: props.className,
                variant: props.variant,
                size: props.size,
                motion: props.motion,
            })}
        >
            {props.children}
        </Component>
    );
}

type Props<T extends keyof JSX.IntrinsicElements> = PropsWithChildren &
    VariantProps<typeof typography> & {
        className?: string;
        as?: T;
    } & JSX.IntrinsicElements[T];

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
        motion: {
            intersect:
                "intersect-once intersect:motion-translate-y-in-25 intersect:motion-opacity-in-40 intersect:motion-duration-700",
            none: "",
        },
    },
    defaultVariants: {
        variant: "body",
        size: "base",
        motion: "intersect",
    },
    compoundVariants: [
        {
            variant: "heading",
            size: "sm",
            className: "text-6xl md:text-7xl mb-8",
        },
        {
            variant: "heading",
            size: "base",
            className: "text-7xl md:text-8xl mb-10",
        },
        {
            variant: "heading",
            size: "lg",
            className: "text-8xl md:text-9xl mb-12",
        },
        {
            variant: "subheading",
            size: "sm",
            className: "text-3xl md:text-4xl mb-6",
        },
        {
            variant: "subheading",
            size: "base",
            className: "text-4xl md:text-5xl mb-8",
        },
        {
            variant: "subheading",
            size: "lg",
            className: "text-5xl md:text-6xl mb-10",
        },
        {
            variant: "body",
            size: "sm",
            className: "text-xl md:text-2xl mb-3",
        },
        {
            variant: "body",
            size: "base",
            className: "text-2xl md:text-3xl mb-6",
        },
        {
            variant: "body",
            size: "lg",
            className: "text-3xl md:text-4xl mb-9",
        },
        {
            variant: "note",
            size: "sm",
            className: "text-lg md:text-xl mb-2",
        },
        {
            variant: "note",
            size: "base",
            className: "text-xl md:text-2xl mb-3",
        },
        {
            variant: "note",
            size: "lg",
            className: "text-2xl md:text-3xl mb-4",
        },
    ],
});
