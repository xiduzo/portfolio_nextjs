"use client";

import { Section } from "./section";
import { Text } from "./typography";

const hints = [
    "Scroll to read more",
    "Scrolling is free!",
    "What are you waiting for?",
    "Scroll like nobody is watching",
    "Peek below for more fun",
    "Do not miss out on what is next",
    "Do not stop now, there is more to see",
    "More wonders await",
    "Continue for more excitement",
];

export function ScrollHint() {
    function scrollDownSmooth() {
        window.scrollBy({
            top: window.innerHeight * 0.85,
            behavior: "smooth",
        });
    }

    return (
        <Section aria-hidden="true">
            <Text
                onClick={scrollDownSmooth}
                variant="note"
                size="sm"
                className="my-32 hidden md:block motion-preset-oscillate motion-duration-[3s] motion-ease-out-quad motion-delay-2000 motion-opacity-in-0 motion-blur-in-0 cursor-pointer"
                motion="none"
            >
                {hints[Math.floor(Math.random() * hints.length)]}
            </Text>
        </Section>
    );
}
