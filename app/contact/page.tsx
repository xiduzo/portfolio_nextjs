import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import GitHubCalendar from "react-github-calendar";

export default function Page() {
    return (
        <Section>
            <Text as="h1" variant="heading">
                Reach out to me
            </Text>
            <Text>
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
            <GitHubCalendar username="xiduzo" />
            <Text size="sm" className="text-muted-foreground mb-8">
                A selection of personal projects I have worked on in the past.
            </Text>
        </Section>
    );
}
