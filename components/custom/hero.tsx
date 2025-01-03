import { cva } from "class-variance-authority";
import { VelocityScroll } from "../magic-ui/scroll-based-velocity";
import { Badge } from "../ui/badge";
import { EmojiHexcode, Openmoji } from "./openmoji";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
});

export function Hero(props: Props) {
    return (
        <header className="mb-44 flex flex-col relative" aria-hidden>
            <section className="absolute top-6 right-6 z-20 flex gap-2">
                <time dateTime={props.publishDate}>
                    <Badge variant="secondary" className="pointer-events-none">
                        {dateFormatter.format(new Date(props.publishDate))}
                    </Badge>
                </time>
                {props.link && (
                    <Link href={props.link} target="_blank">
                        <Badge className="space-x-1">
                            <span>Visit project</span>{" "}
                            <ExternalLink size={12} />
                        </Badge>
                    </Link>
                )}
            </section>
            <section
                className={header({
                    className: props.className,
                })}
            >
                <Openmoji
                    hexcode={props.emoji}
                    size={420}
                    className="translate-y-32 motion-blur-in-3xl motion-delay-500"
                />
            </section>
            <section className="text-9xl leading-[9.25rem] w-screen font-extrabold font-heading absolute left-0 -bottom-32">
                <VelocityScroll text={props.title} default_velocity={2} />
            </section>
        </header>
    );
}

type Props = {
    title: string;
    emoji: EmojiHexcode;
    publishDate: string;
    link?: string;
    className?: string;
};

const header = cva("flex items-end justify-center z-10");
