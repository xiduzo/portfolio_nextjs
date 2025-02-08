import { Section } from "@/components/custom/section";
import { HighlightedProjects } from "@/components/custom/highlighted-projects";
import { Text } from "@/components/custom/text";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading" motion="none">
                    My projects
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading" motion="none">
                    Highlighted cases
                </Text>
                <Text
                    size="sm"
                    className="text-muted-foreground pb-12"
                    motion="none"
                >
                    A selection of personal projects I am proud to share with
                    you.
                </Text>
                <HighlightedProjects />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Other cases
                </Text>
                <Text size="sm" className="text-muted-foreground">
                    Some more projects I have done that you might like.
                </Text>
            </Section>
        </>
    );
}
