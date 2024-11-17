import { Section } from "@/components/custom/section";
import { Openmoji } from "@/components/custom/openmoji";
import { Text } from "@/components/custom/typography";
import { VelocityScroll } from "@/components/magic-ui/scroll-based-velocity";

export default function Page() {
    return (
        <>
            <header className="mb-32 flex flex-col relative">
                <section className="bg-blue-500 flex items-end justify-center z-10">
                    <Openmoji
                        hexcode="E1D3"
                        size={420}
                        className="translate-y-32"
                    />
                </section>
                <section className="text-9xl w-screen font-extrabold font-heading absolute -bottom-32">
                    <VelocityScroll text="Microflow" default_velocity={0.5} />
                </section>
            </header>
            <Section>
                <section className="text-center max-w-2xl mx-auto">
                    <Text
                        as="h1"
                        size="sm"
                        variant="body"
                        className="italic text-muted-foreground font-light mb-2"
                    >
                        Fissa,
                    </Text>
                    <Text variant="subheading" className="text-center">
                        Not only one person should decide what's playing on a
                        party
                    </Text>
                </section>
            </Section>
        </>
    );
}
