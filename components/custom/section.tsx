import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export function Section(props: Props) {
    return (
        <section
            className={section({
                className: props.className,
                variant: props.variant,
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

const section = cva("pt-4 pb-12 md:pb-28 lg:pt-16 lg:pb-32", {
    variants: {
        variant: {
            default: "container mx-auto px-4 lg:px-12",
            full: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
