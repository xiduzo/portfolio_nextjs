import Link from "next/link";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function HighlightedProjects() {
    return (
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
                        <div className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Assessor bot
                        </div>
                        <p className="mt-4 text-left text-base/6 text-neutral-200">
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
                        <div className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Fissa
                        </div>
                        <p className="mt-4 max-w-[12rem] text-left text-base/6 text-neutral-200">
                            Not only one person should decide what is playing at
                            a party
                        </p>
                    </div>
                    <Image
                        src="/fissa.webp"
                        width={414}
                        height={896}
                        alt="Fissa demo image"
                        className="scale-50 absolute -right-4 lg:-right-[30%] filter grayscale group-hover:filter-none -bottom-96 object-contain rounded-2xl -z-10 transition duration-300"
                    />
                </WobbleCard>
            </Link>
            <Link
                href="/project/microflow"
                className="col-span-1 lg:col-span-3"
            >
                <WobbleCard containerClassName="h-full bg-orange-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] group">
                    <div className="max-w-sm">
                        <div className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Microflow
                        </div>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            Microcontrollers made simple, a set of tools to make
                            it easier to start prototyping for interactivity.
                        </p>
                    </div>
                    <Image
                        src="/microflow.webp"
                        width={480}
                        height={270}
                        alt="Microflow demo image"
                        className="absolute -right-10 md:-right-[20%] filter grayscale group-hover:filter-none lg:right-20 -bottom-24 object-contain rounded-2xl -z-10 transition duration-300"
                    />
                </WobbleCard>
            </Link>
        </div>
    );
}
