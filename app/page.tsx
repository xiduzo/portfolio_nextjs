import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Section } from "@/components/custom/section";

export default function Page() {
    return (
        <Section>
            <Text as="h1" variant="heading" className="mb-8">
                <code>Hello world!</code>
            </Text>
            <Text className="mb-4">
                My name is <strong>Sander</strong> and I am a passionate
                developer with a creative mind™.
            </Text>
            <Text>
                I love to create tools that enhance the performance of
                professionals or/and empower individuals.
            </Text>
            <Text as="h2" variant="subheading" className="mb-2 mt-24">
                Highlighted cases
            </Text>
            <Text size="sm" className="text-muted-foreground mb-8">
                A selection of personal projects I have worked on in the past.
            </Text>
            <HighlightedProjects />
            <div className="text-center mt-8">
                <Link
                    href="/project"
                    className="underline hover:text-white text-muted-foreground mb-8 mt-12"
                >
                    See all projects
                </Link>
            </div>
        </Section>
    );
}
