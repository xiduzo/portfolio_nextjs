"use client";

import clsx from "clsx";
import { TypingAnimation } from "../ui/typing-animation";

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
    "Keep going, there is more to the story",
    "Scroll down, it gets better",
    "Curious? You should be",
    "Go on, have a look below",
    "Down there, things get interesting",
    "The story continues in pixels below",
    "Keep scrolling, discovery is iterative",
    "Keep exploring, curiosity pays off",
    "Every scroll is a small act of exploration",
    "Each scroll reveals something new",
];

export function ScrollHint(props: { className?: string }) {
    function scrollDownSmooth() {
        window.scrollTo({
            top: window.innerHeight * 0.95,
            behavior: "smooth",
        });
    }

    return (
        <div
            className="flex justify-center hover:cursor-s-resize"
            onClick={scrollDownSmooth}
        >
            <TypingAnimation
                cursorStyle="block"
                delay={5000}
                className={clsx(
                    "text-sm text-muted-foreground rounded-lg p-4 transition-all",
                    props.className,
                )}
            >
                {hints[Math.floor(Math.random() * hints.length)]}
            </TypingAnimation>
        </div>
    );
}
