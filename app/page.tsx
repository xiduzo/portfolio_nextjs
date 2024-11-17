import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Section } from "@/components/custom/section";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <Section>
            <Text as="h1" variant="heading">
                <code>Hello world!</code>
            </Text>
            <Text>
                My name is <strong>Sander</strong> and I am a passionate
                developer with a creative mind™.
            </Text>
            <Text>
                I love to create tools that enhance the performance of
                professionals or/and empower individuals.
            </Text>
            <Text as="h2" variant="subheading" className="mb-1 mt-24">
                Highlighted cases
            </Text>
            <Text size="sm" className="text-muted-foreground mb-8">
                A selection of personal projects I have worked on in the past.
            </Text>
            <HighlightedProjects />
            <div className="text-center mt-12">
                <Link href="/project">
                    <Button variant="link">See all projects</Button>
                </Link>
            </div>
        </Section>
    );
}
