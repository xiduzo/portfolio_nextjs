import { Section } from "@/components/custom/section";
import { Openmoji } from "@/components/custom/openmoji";
import { Text } from "@/components/custom/typography";
import { VelocityScroll } from "@/components/magic-ui/scroll-based-velocity";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Iphone15Pro } from "@/components/magic-ui/iphone-15-pro";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { CodeBlock } from "@/components/custom/code-block";
import SyntaxHighlighter from "react-syntax-highlighter";

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
                <section className="text-9xl w-screen font-extrabold font-heading absolute left-0 -bottom-32">
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
                <Text as="h3" variant="subheading" size="sm" className="mt-16">
                    A little challenge to ourself
                </Text>
                <Text as="ol" size="sm" className="list-decimal list-inside">
                    <li>
                        Everyone can be the DJ, Fissa should be available on iOS
                        and Android,
                    </li>
                    <li>
                        No onboarding! Like jokes, apps lose their charm when
                        you have to explain them
                    </li>
                    <li>A fissa never stops, there is always music playing</li>
                </Text>
            </Section>
            <Section className="flex justify-between gap-4 md:gap-12">
                <Iphone15Pro
                    src="/fissa/screen-3.svg"
                    className="-mt-32 md:w-full"
                    alt="Fissa visual exploration #1"
                />
                <Iphone15Pro
                    src="/fissa/screen-2.svg"
                    className="mt-32 md:w-full"
                    alt="Fissa visual exploration #2"
                />
                <Iphone15Pro
                    src="/fissa/screen-1.svg"
                    className="md:w-full"
                    alt="Fissa visual exploration #3"
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    A colorful Fissa
                </Text>
                <Text>
                    Music is a blend of personal expression and social
                    connection. By creating a collaborative playlist, and
                    sharing your favorite tunes, we create a social experience.
                </Text>
                <Text>
                    We wanted to give the user a personal experience. This is
                    why decided to give each Fissa their own color.
                </Text>
            </Section>
            <Text variant="note">It is a fissa, but within our boundaries</Text>
            <Image
                src="/fissa/colors.svg"
                alt="The different color pallettes Fissa has"
                width={1920}
                height={1080}
            />
            <Section>
                <Text as="h3" size="sm" variant="subheading">
                    Tailwind
                </Text>
                <Text>
                    Tailwind offers a great way to{" "}
                    <Link
                        href="https://tailwindcss.com/docs/configuration"
                        target="_blank"
                    >
                        configure a theme
                    </Link>
                    . Initially this was the setup we went for.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript {4} showLineNumbers
// tailwind.config.js
const pinkey = {
    100: "#FFCAF7",
    500: "#FF5FE5",
    900: "#150423",
    gradient: ["#FF5FE5", "#FF5F72"],
};

// ...

const themes = [pinkey, orangy, greeny, blueey, sunney, limey];

const theme = themes[Math.floor(Math.random() * themes.length)];

const config = {
    theme: {
        extend: {
            colors: { theme },
            textColor: { theme },
            backgroundColor: { theme },
            ringColor: { theme },
        },
    },
};
                            `}
                />
                <Text>
                    For{" "}
                    <Link href="https://www.nativewind.dev" target="_blank">
                        NativeWind
                    </Link>
                    , the tailwind helper for React Native, this does not work
                    out-of-the-box well and we do needed to{" "}
                    <Link
                        href="https://www.nativewind.dev/guides/theme-values"
                        target="_blank"
                    >
                        expose the runtime variables
                    </Link>{" "}
                    to use the dynamic theme.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// Tailwind config.js

// ...

const theme = themes[Math.floor(Math.random() * themes.length)];

module.exports.theme = theme;
`}
                />
                <Text>
                    We can then use this exposed variable within our components.
                </Text>
                <CodeBlock
                    code={`
\`\`\`tsx
// Component.tsx
import { theme } from "@fissa/tailwind-config";

const Component = () => {
    return (
        <SafeAreaView style={{ backgroundColor: theme["900"] }}>
            { /* ... */ }
        </SafeAreaView>
    )
}
`}
                />
            </Section>
        </>
    );
}
