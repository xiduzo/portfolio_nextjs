import Link from "next/link";
import { Section } from "./section";
import { Text } from "./text";
import { Button } from "../ui/button";

export function Links(props: Props) {
    return (
        <Section>
            <Text as="h2" variant="subheading" size="sm">
                {props.title}
            </Text>
            <div className="flex gap-4 flex-wrap">
                {props.links.map(([href, text]) => (
                    <Link key={href} href={href} passHref target="_blank">
                        <Button variant="outline">{text}</Button>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

type Props = {
    title: string;
    links: [string, string][];
};
