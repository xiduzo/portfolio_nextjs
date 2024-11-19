import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { BorderBeam, BorderBeamProps } from "../magic-ui/border-beam";

export function CallToAction(props: PropsWithChildren & BorderBeamProps) {
    const { children, ...rest } = props;

    return (
        <Button
            variant="outline"
            className="relative text-2xl p-4 md:text-4xl md:p-8 font-note font-extrabold"
        >
            {children}
            <BorderBeam size={90} {...rest} />
        </Button>
    );
}
