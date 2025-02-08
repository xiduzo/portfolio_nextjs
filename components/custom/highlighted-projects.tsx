import Link from "next/link";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Image } from "@/components/custom/image";
import { Text } from "@/components/custom/text";
import { Iphone15Pro } from "../magic-ui/iphone-15-pro";
import { Openmoji } from "./openmoji";

export function HighlightedProjects() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto w-full">
            <Link
                href="/project/assessor-bot"
                className="col-span-6 xl:col-span-3"
            >
                <WobbleCard containerClassName="h-full bg-green-800 min-h-[500px] group">
                    <Text
                        variant="subheading"
                        size="sm"
                        motion="none"
                        className="flex gap-4 md:justify-start justify-between"
                    >
                        Assessor bot
                        <Openmoji hexcode="1F99C" size={42} />
                    </Text>
                    <Text size="sm" motion="none">
                        A LLM experiment for providing students with feedback
                    </Text>
                    <div className="absolute top-[60%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300">
                        <Image
                            width={1920}
                            height={1080}
                            src="/mdd-assessor-bot/mdd-assessor-bot.png"
                            alt="MDD assessor bot demo image"
                        />
                    </div>
                </WobbleCard>
            </Link>
            <Link href="/project/fissa" className="col-span-6 xl:col-span-3">
                <WobbleCard containerClassName="h-full bg-pink-800 min-h-[500px] group">
                    <Text
                        variant="subheading"
                        size="sm"
                        motion="none"
                        className="flex gap-4 md:justify-start justify-between"
                    >
                        Fissa
                        <Openmoji hexcode="1F415" size={42} />
                    </Text>
                    <Text size="sm" motion="none">
                        Not only one person should decide what is playing at a
                        party
                    </Text>
                    <div className="absolute top-[50%] right-[5%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300">
                        <Iphone15Pro
                            src="/fissa/pinkey.svg"
                            alt="Fissa demo image"
                            className="w-full"
                        />
                    </div>
                </WobbleCard>
            </Link>
            <Link href="/project/microflow" className="col-span-6">
                <WobbleCard containerClassName="h-full bg-orange-800 min-h-[500px] group">
                    <div className="md:max-w-sm">
                        <Text
                            variant="subheading"
                            size="sm"
                            motion="none"
                            className="flex gap-4 md:justify-start justify-between"
                        >
                            Microflow
                            <Openmoji hexcode="E1D3" size={42} />
                        </Text>
                        <Text size="sm" motion="none">
                            Microcontrollers made easy.
                        </Text>
                    </div>
                    <div className="absolute xl:left-[30%] xl:top-[10%] top-[40%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300">
                        <Image
                            src="/microflow/microflow-studio.png"
                            width={1920}
                            height={1080}
                            alt="Microflow demo image"
                        />
                    </div>
                </WobbleCard>
            </Link>
        </div>
    );
}
