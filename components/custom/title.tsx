import { Badge } from "../ui/badge";
import { Section } from "./section";
import { Text } from "./typography";

const pluralRules = new Intl.PluralRules("en-US");

const pluralForms = new Map([
    ["one", "minute"],
    ["other", "minutes"],
]);

export function Title(props: Props) {
    return (
        <Section className="text-center max-w-4xl mx-auto">
            <Text
                as="h1"
                size="sm"
                variant="body"
                className="italic text-muted-foreground font-light"
            >
                {props.title},
            </Text>
            <Text size="lg" variant="subheading" className="text-center mb-8">
                {props.subtitle}
            </Text>
            <Badge
                variant="outline"
                className="motion-scale-in-0 motion-delay-300"
            >
                {props.readTime}{" "}
                {pluralForms.get(pluralRules.select(props.readTime))} read
            </Badge>
        </Section>
    );
}

type Props = {
    title: string;
    subtitle: string;
    readTime: number;
};
