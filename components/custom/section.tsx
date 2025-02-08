import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export function Section(props: Props) {
    return (
        <section
            className={section({
                className: props.className,
                variant: props.variant,
                space: props.space,
            })}
        >
            {props.children}
        </section>
    );
}

type Props = PropsWithChildren &
    VariantProps<typeof section> & {
        className?: string;
    };

const section = cva("", {
    variants: {
        variant: {
            default: "container mx-auto px-4 lg:px-12",
            full: "",
        },
        space: {
            none: "",
            sm: "pt-4 pb-8 md:pb-20 lg:pt-12 lg:pb-24",
            base: "pt-8 pb-12 md:pb-28 lg:pt-16 lg:pb-32",
            lg: "pt-12 pb-16 md:pb-36 lg:pt-20 lg:pb-40",
        },
    },
    defaultVariants: {
        variant: "default",
        space: "base",
    },
});
