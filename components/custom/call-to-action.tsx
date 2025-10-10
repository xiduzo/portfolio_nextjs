import { PropsWithChildren } from "react";
import {
    InteractiveHoverButton,
    InteractiveHoverButtonProps,
} from "../ui/interactive-hover-button";

export function CallToAction(
    props: PropsWithChildren & InteractiveHoverButtonProps,
) {
    return <InteractiveHoverButton {...props} />;
}
