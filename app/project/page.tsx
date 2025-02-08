import { Section } from "@/components/custom/section";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Text } from "@/components/custom/text";
import { ProjectCard } from "@/components/custom/project-card";
import Link from "next/link";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Openmoji } from "@/components/custom/openmoji";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading" motion="none">
                    Things I made
                </Text>
                <Text>
                    I enjoy the act of making <em>things</em>. Not all of those
                    see the light of day. This is a selection of those who did.
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading" motion="none">
                    Highlighted
                </Text>
                <Text
                    size="sm"
                    className="text-muted-foreground pb-12"
                    motion="none"
                >
                    A selection of things I am proud to share.
                </Text>
                <HighlightedProjects />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Archive
                </Text>
                <Text size="sm" className="text-muted-foreground">
                    Some more things I made over the years.
                </Text>
                <ul className="mt-24 flex flex-col gap-4">
                    <Link href="/project/athena" as="li">
                        <WobbleCard containerClassName="bg-amber-300">
                            <Text
                                variant="subheading"
                                motion="none"
                                className="flex gap-4 justify-between text-muted"
                            >
                                Athena
                                <Openmoji
                                    hexcode="1F984"
                                    size={42}
                                    className="block xl:hidden"
                                />
                            </Text>
                            <Text motion="none" className="text-muted max-w-xl">
                                An honest feedback tool for students
                            </Text>
                            <Openmoji
                                hexcode="1F984"
                                size={420}
                                className="xl:block hidden absolute right-6 top-8 -z-10"
                            />
                        </WobbleCard>
                    </Link>
                    <Link href="/project/livestock" as="li">
                        <WobbleCard containerClassName="bg-cyan-700">
                            <Text
                                variant="subheading"
                                motion="none"
                                className="flex justify-between gap-4"
                            >
                                LiveStock
                                <Openmoji
                                    hexcode="1F4B0"
                                    size={42}
                                    className="block xl:hidden"
                                />
                            </Text>
                            <Text motion="none" className="max-w-xl">
                                Introduce humans to the blockchain and
                                crypto-currency wallets
                            </Text>
                            <Openmoji
                                hexcode="1F4B0"
                                size={420}
                                className="xl:block hidden absolute right-0 top-8 -z-10"
                            />
                        </WobbleCard>
                    </Link>
                    <Link href="/project/spirit" as="li">
                        <WobbleCard containerClassName="bg-orange-300">
                            <Text
                                variant="subheading"
                                motion="none"
                                className="flex text-muted justify-between gap-4"
                            >
                                Spirit
                                <Openmoji
                                    hexcode="1FA9C"
                                    size={42}
                                    className="block xl:hidden"
                                />
                            </Text>
                            <Text motion="none" className="text-muted max-w-xl">
                                Empower patients who suffer from
                                Obsessive-Compulsive Disorder (OCD)
                            </Text>
                            <Openmoji
                                hexcode="1FA9C"
                                size={420}
                                className="xl:block hidden absolute right-0 top-8 -z-10"
                            />
                        </WobbleCard>
                    </Link>
                    <Link href="/project/veilenext" as="li">
                        <WobbleCard containerClassName="bg-indigo-900">
                            <Text
                                variant="subheading"
                                motion="none"
                                className="flex justify-between gap-4"
                            >
                                VeileNext
                                <Openmoji
                                    hexcode="1F490"
                                    size={42}
                                    className="block xl:hidden"
                                />
                            </Text>
                            <Text motion="none" className="max-w-xl">
                                Modernize the biggest flower auction in the
                                world
                            </Text>
                            <Openmoji
                                hexcode="1F490"
                                size={420}
                                className="xl:block hidden absolute right-4 top-8 -z-10"
                            />
                        </WobbleCard>
                    </Link>
                </ul>
            </Section>
        </>
    );
}
