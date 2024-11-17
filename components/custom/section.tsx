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

const section = cva("container mx-auto py-16", {
    variants: {
        variant: {
            default: "px-2 md:px-12",
            full: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
