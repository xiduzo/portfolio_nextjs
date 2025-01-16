import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import { Hero } from "@/components/custom/hero";
import { Title } from "@/components/custom/title";
import { ScrollHint } from "@/components/custom/scroll-hint";
import { Technologies } from "@/components/custom/technologies";
import Link from "next/link";
import { Image } from "@/components/custom/image";

export default function Page() {
    return (
        <>
            <Hero
                title="LiveStock"
                publishDate="Feb 21 2018"
                emoji="1F4B0"
                className="bg-cyan-700"
            />
            <Title
                title="LiveStock"
                subtitle="Introduce humans to the blockchain and crypto-currency wallets"
                readTime={6}
            />
            <ScrollHint />
            <Technologies technologies={["Angular", "Express", "WebSockets"]} />
            <Section>
                <Text as="h2" variant="subheading">
                    Back to the basics
                </Text>
                <Text>
                    Bitcoin emerged in 2009 when the global financial crisis had
                    left a profound impact on society.
                </Text>
                <Text>
                    Can we somehow simplify the concept of blockchain so that
                    it’s accessible to everyone?
                </Text>
            </Section>
            <Section>... images ...</Section>
            <Section>
                <Text>
                    The technology that underpins Bitcoin is called blockchain,
                    which initially began as a way to offer an alternative to
                    the traditional financial system. However, blockchain has
                    gradually been adopted by the financial sector.
                </Text>
                <Text>
                    <Link href="https://networkcultures.org/" target="_blank">
                        The Institute of Network Cultures (INC)
                    </Link>{" "}
                    is researching how cryptocurrency wallets can be designed to
                    help more people understand the impact of blockchain
                    technology. Their aim is to determine what constitutes good
                    or bad wallet design.
                </Text>
            </Section>
            <Section variant="full">
                <Image
                    src="/livestock/mindmap.png"
                    alt="Brainstorming session on a game around the blockchain technology"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Challenge
                </Text>
                <Text>
                    The blockchain and cryptocurrencies can be complex and
                    difficult to understand. Because of its global influence
                    it&apos;s important to make them accessible for discussion
                    and use.
                </Text>
                <Text>
                    Potential users face many options for currencies, wallets,
                    and services and require knowledge to avoid errors.
                </Text>
            </Section>
            <Section variant="full">
                <Image
                    src="/livestock/mindmap.png"
                    alt="Brainstorming session on a game around the blockchain technology"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Outcome
                </Text>
                <Text>
                    By creating the research tool for the Institute of Network
                    Cultures (INC) we facilitate a study on how cryptocurrency
                    wallets can be designed to facilitate a broader
                    understanding of the influence of blockchain technology and
                    define what good or bad wallet design is.
                </Text>
            </Section>
            <Section variant="full">
                <Image
                    src="/livestock/mindmap.png"
                    alt="Brainstorming session on a game around the blockchain technology"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Wallets for dummies
                </Text>
                <Text>
                    Individuals who own cryptocurrency can utilize digital
                    wallets to access their funds. These applications streamline
                    the process of purchasing digital currencies, but they may
                    obscure the inner workings of blockchain technology.
                </Text>
                <Text>
                    Who creates these wallets, and what motivates their
                    development?
                </Text>
            </Section>
            <Section variant="full">
                <Image
                    src="/livestock/mindmap.png"
                    alt="Brainstorming session on a game around the blockchain technology"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Data collection
                </Text>
                <Text>
                    The research tool can monitor the actions of 2-5
                    participants in a 15-60 minute session, including trading
                    strategies, wallet upgrades, and usage of miners.
                </Text>
                <Text>
                    This data will help the Institute of Network Cultures (INC)
                    to evaluate wallet designs
                </Text>
            </Section>
            <Section variant="full">
                <Image
                    src="/livestock/mindmap.png"
                    alt="Brainstorming session on a game around the blockchain technology"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Learning through play
                </Text>
                <Text>
                    Livestock is a multiplayer research tool that utilizes the
                    human brain’s ability to subconsciously learn abstract and
                    complex concepts.
                </Text>
                <Text>
                    While it may appear to be another <em>Farmville-style</em>{" "}
                    game, it is actually based on the blockchain technology that
                    supports cryptocurrencies.
                </Text>
                <Text>
                    LiveStock adds abstract blockchain concepts as layers to the
                    game and simulates the blockchain market through the farm in
                    a real-time multiplayer game.
                </Text>
            </Section>
            <Section variant="full">
                <Text variant="note">Snapshots of the design process</Text>
                <Image
                    src="/livestock/progress.png"
                    alt="A set of screenshots showcasing the design itterations LiveStock went through"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
        </>
    );
}
