import { Badge } from "../ui/badge";
import { Section } from "./section";
import { Text } from "./typography";

export function Technologies(props: Props) {
    return (
        <Section className="motion-blur-in-xl motion-grayscale-in motion-delay-300">
            <Text size="sm" className="text-muted-foreground" motion="none">
                Technologies used
            </Text>
            <ul className="flex flex-wrap gap-1.5 max-w-sm pointer-events-none">
                {props.technologies.map((technology) => (
                    <li key={technology} className="m-0 list-none">
                        <Badge variant="secondary">{technology}</Badge>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

type Props = {
    technologies: string[];
};
