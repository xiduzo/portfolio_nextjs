import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Section } from "@/components/custom/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CallToAction } from "@/components/custom/call-to-action";
import { ScrollHint } from "@/components/custom/scroll-hint";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading" motion="none">
                    <span className="inline-block motion-rotate-in-12 motion-ease-spring-bounciest">
                        👋
                    </span>{" "}
                    <code>Hello world!</code>
                </Text>
            </Section>
            <Section className="flex gap-12 flex-col-reverse lg:flex-row items-center">
                <section>
                    <Text motion="none">
                        My name is <strong>Sander</strong>, and I am a
                        passionate developer with a creative mind.
                    </Text>
                    <Text motion="none">
                        I{" "}
                        <span className="motion-preset-pulse inline-block motion-ease-bounce">
                            ♥️
                        </span>{" "}
                        to create tools that enhance the performance of
                        professionals and empower individuals.
                    </Text>
                    <Text as="div" className="flex justify-center mt-20">
                        <Link href="/about">
                            <CallToAction colorFrom="#f43f5e" colorTo="#14b8a6">
                                Get to know me better
                            </CallToAction>
                        </Link>
                    </Text>
                </section>
                <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all">
                    <AvatarImage src="/me.jpeg" alt="Sander Boer" />
                    <AvatarFallback>Xiduzo</AvatarFallback>
                </Avatar>
            </Section>
            <ScrollHint />
            <Section>
                <Text as="h2" variant="subheading">
                    Highlighted cases
                </Text>
                <Text size="sm" className="text-muted-foreground  mb-14">
                    A selection of personal projects I am proud to share with
                    you.
                </Text>
                <HighlightedProjects />
            </Section>
            <Section className="flex justify-center flex-wrap">
                <Link href="/project">
                    <CallToAction colorFrom="#f43f5e" colorTo="#14b8a6">
                        See all projects
                    </CallToAction>
                </Link>
            </Section>
        </>
    );
}
