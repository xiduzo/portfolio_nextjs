"use client";

import { PropsWithChildren } from "react";
import {
  InteractiveHoverButton,
  InteractiveHoverButtonProps,
} from "../ui/interactive-hover-button";
import { playCTASound } from "@/lib/sound";

export function CallToAction(
  props: PropsWithChildren & InteractiveHoverButtonProps
) {
  return <InteractiveHoverButton {...props} onMouseEnter={playCTASound} />;
}
