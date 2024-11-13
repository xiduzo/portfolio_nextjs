import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <article className="container mx-auto px-2 md:px-12">
            <h1 className="text-9xl mb-8 mt-16 font-extrabold font-mono">
                Hello world!
            </h1>
            <p className="text-3xl mb-2">
                My name is <strong>Sander</strong> and I am a passionate
                developer with a creative mind™.
            </p>
            <p className="text-3xl">
                I love to create tools that enhance the performance of
                professionals or/and empower individuals.
            </p>
            <h2 className="text-5xl mb-2 mt-24 font-extrabold">
                Highlighted projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
                A selection of personal projects I have worked on in the past.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
                <Link
                    aria-disabled={true}
                    href="#/project/mdd-assessor-bot"
                    className="col-span-1 lg:col-span-2"
                >
                    <WobbleCard
                        containerClassName="h-full bg-green-800 min-h-[500px] lg:min-h-[300px] group"
                        className=""
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                MDD assessor bot
                            </h2>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                A LLM experiment for providing students with
                                feedback
                            </p>
                            <Badge
                                className="mt-4 pointer-events-none"
                                variant="secondary"
                            >
                                Released soon
                            </Badge>
                        </div>
                        <Image
                            src="/mdd-assessor-bot.webp"
                            width={480}
                            height={270}
                            alt="MDD assessor bot demo image"
                            className="absolute -right-4 lg:-right-[10%] filter grayscale group-hover:filter-none -bottom-20 object-contain rounded-2xl -z-10 transition duration-300"
                        />
                    </WobbleCard>
                </Link>
                <Link href="/project/fissa" className="col-span-1">
                    <WobbleCard containerClassName="h-full bg-pink-800 group">
                        <div>
                            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Fissa
                            </h2>
                            <p className="mt-4 max-w-[12rem] text-left  text-base/6 text-neutral-200">
                                Not only one person should decide what is
                                playing at a party
                            </p>
                        </div>
                        <Image
                            src="/fissa.webp"
                            width={414}
                            height={896}
                            alt="Fissa demo image"
                            className="scale-50 absolute -right-4 lg:-right-[20%] filter grayscale group-hover:filter-none -bottom-96 object-contain rounded-2xl -z-10 transition duration-300"
                        />
                    </WobbleCard>
                </Link>
                <Link
                    href="/project/fissa"
                    className="col-span-1 lg:col-span-3"
                >
                    <WobbleCard containerClassName="h-full bg-yellow-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] group">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Microflow
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                Microcontrollers made simple, a set of tools to
                                make it easier to start prototyping for
                                interactivity.
                            </p>
                        </div>
                        <Image
                            src="/microflow.webp"
                            width={480}
                            height={270}
                            alt="Microflow demo image"
                            className="absolute -right-10 md:-right-[20%] filter grayscale group-hover:filter-none lg:right-20 -bottom-20 object-contain rounded-2xl -z-10 transition duration-300"
                        />
                    </WobbleCard>
                </Link>
            </div>
            <div className="text-center mt-8">
                <Link
                    href="/project"
                    className="underline hover:text-white text-muted-foreground mb-8 mt-12"
                >
                    See all projects
                </Link>
            </div>
        </article>
    );
}
