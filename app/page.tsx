import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Section } from "@/components/custom/section";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading">
                    <span className="inline-block motion-rotate-in-12 motion-ease-spring-bounciest">
                        👋
                    </span>{" "}
                    <code>Hello world!</code>
                </Text>
            </Section>
            <Section
                className="flex gap-12 flex-col-reverse lg:flex-row items-center"
                space="sm"
            >
                <section>
                    <Text>
                        My name is <strong>Sander</strong>, and I am a
                        passionate developer with a creative mind™.
                    </Text>
                    <Text>
                        I love to create tools that enhance the performance of
                        professionals and empower individuals.
                    </Text>
                </section>
                <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all">
                    <AvatarImage src="/me.jpeg" alt="Sander Boer" />
                    <AvatarFallback>XDZ</AvatarFallback>
                </Avatar>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Highlighted cases
                </Text>
                <Text size="sm" className="text-muted-foreground mb-8">
                    A selection of personal projects I have worked on in the
                    past.
                </Text>
                <HighlightedProjects />
                <div className="text-center mt-12">
                    <Link href="/project">
                        <Button variant="link">See all projects</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
