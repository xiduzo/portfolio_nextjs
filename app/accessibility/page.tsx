import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { Section } from "@/components/custom/section";

export default function Page() {
    return (
        <Section>
            <Text size="sm" as="h1" variant="heading">
                Let&apos;s make the world a better place for everyone ❤️
            </Text>
            <figure className="space-y-4 my-16 mx-auto prose md:prose-xl lg:prose-2xl">
                <blockquote
                    cite="https://www.w3.org/mission/accessibility/"
                    className="text-muted-foreground not-italic"
                >
                    The power of the Web is in its universality. Access by
                    everyone <strong>regardless of ability</strong> is an{" "}
                    <em>essential</em> aspect.
                </blockquote>
                <figcaption className="text-muted-foreground">
                    Tim Berners-Lee
                </figcaption>
            </figure>
            <Text className="mb-24">I firmly believe in that quote.</Text>
            <Text className="mb-6">
                And although I have tried my best to make this website
                accessible for everybody, I am sure there are still some
                improvements to be made. If you have any suggestions or
                feedback, I would like to hear from you!
            </Text>
            <Link
                href="mailto:mail@sanderboer.nl"
                className="text-2xl underline"
            >
                Send me an email.
            </Link>
        </Section>
    );
}
