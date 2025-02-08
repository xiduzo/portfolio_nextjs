import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

export function CallToAction(
    props: PropsWithChildren & Pick<ButtonProps, "variant">,
) {
    const { children, variant } = props;

    return (
        <div className="intersect:motion-preset-confetti pointer-events-none">
            <Button
                variant={variant ?? "secondary"}
                className="text-2xl p-4 md:text-4xl md:p-8 font-note font-extrabold pointer-events-auto"
            >
                {children}
            </Button>
        </div>
    );
}
