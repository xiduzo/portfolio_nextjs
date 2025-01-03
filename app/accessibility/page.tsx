import Link from "next/link";
import { Text } from "@/components/custom/typography";
import { Section } from "@/components/custom/section";
import { Quote } from "@/components/custom/quote";
import { CallToAction } from "@/components/custom/call-to-action";

export default function Page() {
    return (
        <>
            <Section>
                <Text size="sm" as="h1" variant="heading" motion="none">
                    Let&apos;s make the world a better place for everyone ❤️
                </Text>
                <Quote
                    link="https://www.w3.org/mission/accessibility/"
                    cite="Tim Berners-Lee"
                >
                    The power of the Web is in its universality. Access by
                    everyone <strong>regardless of ability</strong> is an{" "}
                    <em className="text-muted-foreground italic">essential</em>{" "}
                    aspect.
                </Quote>
                <Text motion="none">I firmly believe in that quote.</Text>
                <Text motion="none">
                    And although I have tried my best to make this website
                    accessible for everybody, I am sure there are still some
                    improvements to be made. If you have any suggestions or
                    feedback, I would like to hear from you!
                </Text>
                <Text as="div" className="flex justify-center flex-wrap pt-12">
                    <Link
                        href="mailto:mail@sanderboer.nl"
                        className="text-2xl underline"
                    >
                        <CallToAction colorFrom="#ffcc00" colorTo="#ffcc00">
                            Send me an email
                        </CallToAction>
                    </Link>
                </Text>
            </Section>
        </>
    );
}
