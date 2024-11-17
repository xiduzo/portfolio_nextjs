import { Section } from "@/components/custom/section";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Text } from "@/components/custom/typography";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading">
                    My projects
                </Text>
                <Text as="h2" variant="subheading" className="mb-1 mt-24">
                    Highlighted cases
                </Text>
                <Text size="sm" className="text-muted-foreground mb-8">
                    A selection of personal projects I have worked on in the
                    past.
                </Text>
                <HighlightedProjects />
            </Section>
            <Section>
                <Text as="h2" variant="subheading" className="mb-1">
                    Other cases
                </Text>
                <Text size="sm" className="text-muted-foreground mb-8">
                    Some more projects I have done and am proud to share.
                </Text>
            </Section>
        </>
    );
}
