import { Section } from "@/components/custom/section";
import { Openmoji } from "@/components/custom/openmoji";
import { Text } from "@/components/custom/typography";
import { VelocityScroll } from "@/components/magic-ui/scroll-based-velocity";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Iphone15Pro } from "@/components/magic-ui/iphone-15-pro";
import { ExternalLink } from "lucide-react";

export default function Page() {
    return (
        <>
            <header className="mb-44 flex flex-col relative" aria-hidden>
                <section className="absolute top-6 right-6 z-20 flex gap-2">
                    <Badge variant="secondary" className="pointer-events-none">
                        2024
                    </Badge>
                    <Link
                        href="https://fissa-houseparty.vercel.app"
                        target="_blank"
                    >
                        <Badge className="space-x-1">
                            <span>Visit Fissa</span> <ExternalLink size={12} />
                        </Badge>
                    </Link>
                </section>
                <section className="bg-orange-500 flex items-end justify-center z-10">
                    <Openmoji
                        hexcode="1F415"
                        size={420}
                        className="translate-y-32"
                    />
                </section>
                <section className="text-9xl w-screen font-extrabold font-heading absolute -bottom-32">
                    <VelocityScroll text="Fissa" default_velocity={2} />
                </section>
            </header>
            <Section className="text-center max-w-4xl mx-auto">
                <Text
                    as="h1"
                    size="sm"
                    variant="body"
                    className="italic text-muted-foreground font-light"
                >
                    Fissa,
                </Text>
                <Text
                    size="lg"
                    variant="subheading"
                    className="text-center mb-8"
                >
                    Not only one person should decide what is playing on a party
                </Text>
                <Badge variant="outline">12 minute read</Badge>
            </Section>
            <Section>
                <Text size="sm" as="h2" className="mb-2">
                    Technologies used
                </Text>
                <section className="flex flex-wrap gap-1.5 max-w-sm pointer-events-none">
                    <Badge variant="secondary">Expo</Badge>
                    <Badge variant="secondary">NativeWind</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">NextAuth.js</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">tRPC</Badge>
                    <Badge variant="secondary">Vercel serverless</Badge>
                </section>
            </Section>
            <Section>
                <Text as="h2" variant="subheading" className="mb-8">
                    Everyone can be the DJ
                </Text>
                <Text className="mb-4">
                    Having friends at a party with a bad taste in music stinks.
                    This is what{" "}
                    <Link
                        href="https://www.linkedin.com/in/milan-van-der-maaten-307a1697"
                        target="_blank"
                    >
                        Milan
                    </Link>{" "}
                    and myself have experienced countless times. And instead of
                    complaining about it constantly we decided to do something
                    about it.
                </Text>
                <Text>
                    As I am always looking for an excuse to start a new
                    pet-project to learn and explore new technologies, Fissa
                    seemed like a perfect opportunity to do so.
                </Text>
            </Section>
            <Section>
                <Iphone15Pro src="/fissa.webp" />
            </Section>
        </>
    );
}
