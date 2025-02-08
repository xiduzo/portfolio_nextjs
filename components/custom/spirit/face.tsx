"use client";

import { Slider } from "@/components/ui/slider";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";
import { Text } from "../text";

export function Face(props: {
    initialPhase?: Phase;
    className?: string;
    text?: string;
}) {
    const [phase, setPhase] = useState<Phase>(props.initialPhase ?? 1);

    return (
        <section
            className={face({
                phase: phase,
                className: props.className,
            })}
        >
            {phase === 4 && (
                <section className="flex gap-10 absolute mb-40 z-20">
                    <div className="w-20 h-3 rounded-full bg-zinc-700 -rotate-12"></div>
                    <div className="w-20 h-3 rounded-full bg-zinc-700 rotate-12"></div>
                </section>
            )}
            <section className="flex">
                <div className={eye({ phase: phase })}>
                    <div className={pupil({ phase: phase })}></div>
                </div>
                <div className={eye({ phase: phase })}>
                    <div className={pupil({ phase: phase })}></div>
                </div>
            </section>
            {phase === 4 && (
                <section className="absolute ml-52">
                    <div className="w-12 h-12 rounded-[0px_90px_90px_90px] rotate-45 bg-blue-300 motion-preset-slide-down-lg"></div>
                </section>
            )}
            {phase === 1 && (
                <section className="flex gap-20">
                    <div className="w-10 h-10 rounded-full bg-orange-200"></div>
                    <div className="w-10 h-10 rounded-full bg-orange-200"></div>
                </section>
            )}
            <section className="flex">
                <div className={mouth({ phase: phase })}></div>
            </section>
            <section className="w-full px-6 absolute bottom-12 text-center">
                {!props.text && (
                    <div>
                        <Slider
                            className="w-full"
                            value={[Number(phase)]}
                            min={1}
                            max={5}
                            step={1}
                            onValueChange={([value]) =>
                                setPhase(value as Phase)
                            }
                            aria-label="Slider to control a visualisation change based on the users' mood"
                        />
                        <Text
                            aria-hidden="true"
                            variant="note"
                            size="sm"
                            className="mt-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                        >
                            (slide me)
                        </Text>
                    </div>
                )}
                {props.text && (
                    <Text variant="heading" size="sm">
                        {props.text}
                    </Text>
                )}
            </section>
        </section>
    );
}

type Phase = VariantProps<typeof face>["phase"];

const face = cva(
    "relative rounded-3xl w-[90vw] md:w-[50vw] lg:w-[33vw] xl:w-[25vw] h-[66vh] lg:h-[50vh] flex flex-col items-center justify-center transition-all duration-700",
    {
        variants: {
            phase: {
                1: "bg-orange-300",
                2: "bg-emerald-200",
                3: "bg-stone-300",
                4: "bg-blue-400",
                5: "bg-red-400",
            },
        },
    },
);

const eye = cva(
    "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 z-10",
    {
        variants: {
            phase: {
                1: "border-b-8",
                2: "border-transparent bg-white mx-2",
                3: "bg-white mx-2",
                4: "bg-white mx-0.5",
                5: "bg-white",
            },
        },
    },
);

const pupil = cva("rounded-full bg-zinc-900 transition-all duration-500", {
    variants: {
        phase: {
            1: "w-0 h-0",
            2: "w-8 h-8",
            3: "w-6 h-6",
            4: "w-6 h-6 mt-2",
            5: "w-6 h-6 mb-16",
        },
    },
});

const mouth = cva("transition-all", {
    variants: {
        phase: {
            1: "w-16 h-20 -mt-12 rounded-full border-8 border-b-zinc-700 border-orange-300 duration-700",
            2: "w-16 h-12 rounded-full border-b-8 border-b-zinc-700 border-emerald-200 duration-700",
            3: "w-24 h-2 mt-12 rounded-full border-8 border-b-zinc-700 border-stone-300 duration-200",
            4: "w-24 h-6 mt-12 rounded-full border-t-8 border-t-zinc-700 border-blue-400 duration-50",
            5: "w-20 h-32 rounded-[50%_50%_25%_25%_/_60%_60%_30%_30%] bg-gray-950 border-emerald-200 mt-2 border-8 duration-200",
        },
    },
});
