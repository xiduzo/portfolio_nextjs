import { Badge } from "../ui/badge";
import { Section } from "./section";
import { Text } from "./typography";

export function Technologies(props: Props) {
    return (
        // <Section className="motion-blur-in-3xl motion-opacity-in-10 motion-delay-500">
        <Section>
            <Text size="sm" className="text-muted-foreground">
                Technologies used
            </Text>
            <ul className="flex flex-wrap gap-1.5 max-w-sm pointer-events-none intersect-once intersect:motion-translate-y-in-25 intersect:motion-opacity-in-40 intersect:motion-duration-700">
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
