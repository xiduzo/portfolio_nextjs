import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/text";
import { Hero } from "@/components/custom/hero";
import { Technologies } from "@/components/custom/technologies";
import Link from "next/link";
import { Image } from "@/components/custom/image";
import { Marquee } from "@/components/magic-ui/marquee";
import NextImage from "next/image";
import { Iphone15Pro } from "@/components/magic-ui/iphone-15-pro";
import { Links } from "@/components/custom/links";

const images = [
    "/livestock/bacon.svg",
    "/livestock/castle.svg",
    "/livestock/coins.svg",
    "/livestock/cow-farmer.svg",
    "/livestock/cow.svg",
    "/livestock/eye.svg",
    "/livestock/grandma.svg",
    "/livestock/guard.svg",
    "/livestock/medicine.svg",
    "/livestock/milk.svg",
    "/livestock/money.svg",
    "/livestock/pig.svg",
    "/livestock/queen.svg",
    "/livestock/sheep-farmer.svg",
    "/livestock/sheep.svg",
    "/livestock/whool.svg",
];

export default function Page() {
    return (
        <>
            <Hero
                title="LiveStock"
                subtitle="Introduce humans to the blockchain and crypto-currency wallets"
                readTime={6}
                publishDate="Feb 21 2018"
                emoji="1F4B0"
                className="bg-cyan-700"
            />
            <Technologies technologies={["Angular", "Express", "Socket.io"]} />
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
            <Section
                variant="full"
                className="gap-28 flex flex-col"
                aria-hidden="true"
            >
                <Marquee className="[--gap:80px]">
                    {images
                        .sort(() => (Math.random() > 0.5 ? -1 : 1))
                        .slice(0, 5)
                        .map((src) => (
                            <NextImage
                                key={src}
                                src={src}
                                width={200}
                                height={200}
                                alt="Illustration"
                                aria-hidden="true"
                            />
                        ))}
                </Marquee>
                <Marquee reverse className="[--gap:80px]">
                    {images
                        .sort(() => (Math.random() > 0.3 ? -1 : 1))
                        .slice(0, 5)
                        .map((src) => (
                            <NextImage
                                key={src}
                                src={src}
                                width={200}
                                height={200}
                                alt="Illustration"
                                aria-hidden="true"
                            />
                        ))}
                </Marquee>
            </Section>
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
            <Section variant="full" as="figure">
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
                    difficult to understand. Because of its global influence it
                    is important to make them accessible for discussion and use.
                </Text>
                <Text>
                    Potential users face many options for currencies, wallets,
                    and services and require knowledge to avoid errors.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/challenge_1.png"
                        className="w-full"
                        alt="Screen showing an event happening in the livestock app, explaining concepts to the user along the way of using the app"
                    />
                </div>
                <div className="lg:-mt-32 col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/challenge_2.png"
                        className="w-full"
                        alt="Onboarding screen to the livestock app explaining the goal of the application"
                    />
                </div>
                <div className="lg:mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/challenge_3.png"
                        className="w-full"
                        alt="Screen displaying the way to buy currency within the livestock app"
                    />
                </div>
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
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                aria-hidden="true"
            >
                {images
                    .sort(() => (Math.random() > 0.3 ? -1 : 1))
                    .slice(0, 3)
                    .map((src) => (
                        <div className="col-span-4" key={src}>
                            <NextImage
                                src={src}
                                alt="An illustration"
                                className="w-full"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))}
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
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <div className="lg:mt-32 col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/wallets_1.png"
                        className="w-full"
                        alt="LiveStock application screen showing addons to purchase in the research tool"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/wallets_2.png"
                        className="w-full"
                        alt="Showcase of different products to 'purchase' within in the livestock app"
                    />
                </div>
                <div className="lg:-mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/wallets_3.png"
                        className="w-full"
                        alt="A screen showing the user's wallet (storage) in the livestock app"
                    />
                </div>
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
                    to evaluate wallet designs.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                aria-hidden="true"
            >
                {images
                    .sort(() => (Math.random() > 0.3 ? -1 : 1))
                    .slice(0, 4)
                    .map((src) => (
                        <div className="col-span-3" key={src}>
                            <NextImage
                                src={src}
                                alt="An illustration"
                                className="w-full"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))}
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Learning through play
                </Text>
                <Text>
                    Livestock is a multiplayer research tool that utilizes the
                    human brains&apos; ability to subconsciously learn abstract
                    and complex concepts.
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
            <Section variant="full" as="figure">
                <Text variant="note" as="figcaption">
                    Snapshots of the design process
                </Text>
                <Image
                    src="/livestock/progress.png"
                    alt="A set of screenshots showcasing the design itterations LiveStock went through"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Symbolism
                </Text>
                <Text>
                    In Livestock, core concepts of the blockchain are explained
                    through symbolism.
                </Text>
                <Text>
                    For example, Bitcoin, Ethereum and Dogecoin are replaced by
                    wool, milk and bacon, while sheep, cow and pig represent
                    hardware mining rigs.
                </Text>
                <Text>
                    To get started in the crypto world, gold is used to
                    represent fiat currency. Farm animals symbolize mine power
                    on the blockchain. Wool, milk and bacon representing their
                    respective currencies.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/symbolism_2.png"
                        className="w-full"
                        alt="A screen introducing the pig merchant and explaining bacon is the least stable currency in the livestock app"
                    />
                </div>
                <div className="lg:mt-32 col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/symbolism_3.png"
                        className="w-full"
                        alt="A screen introducing the sheep merchant and explaining how animals allow you to produce goods"
                    />
                </div>
                <div className="lg:-mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4">
                    <Iphone15Pro
                        src="/livestock/symbolism_1.png"
                        className="w-full"
                        alt="A screen introducing the cow merchant and explaining milk is less stable than whool"
                    />
                </div>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <Text className="col-span-12" variant="note" as="figcaption">
                    Hardware wallets are replaced by your safe vault
                </Text>
                <div className="lg:col-start-3 lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/livestock/symbolism_4.png"
                        className="w-full"
                        alt="A screen showing how the user has to enter a pin to access their safe vault"
                    />
                </div>
                <div className="lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/livestock/symbolism_5.png"
                        className="w-full"
                        alt="A screen showing the user's safe vault with the different products they own"
                    />
                </div>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Graspable
                </Text>
                <Text>
                    As the LiveStock session progresses, increasingly complex
                    blockchain concepts will be introduced, including
                    Proof-of-Work algorithms, cryptocurrencies with varying
                    volatilities, and soft- and hardware ledgers.
                </Text>
                <Text>
                    Users can explore and experience these concepts and their
                    choices will impact the outcome of the session.
                </Text>
            </Section>
            <Section variant="full" as="figure">
                <Text variant="note" as="figcaption">
                    User testing with a paper prototype
                </Text>
                <Image
                    src="/livestock/paper_prototype.png"
                    alt="A picture taken during in the early stages of the project, paper prototyping the concept of LiveStock"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section variant="full" as="figure">
                <Text variant="note" as="figcaption">
                    Some symbolisms started to emerge during the paper prototype
                </Text>
                <Image
                    src="/livestock/symbolism_test.png"
                    alt="Some post-it notes with hand written additions to the game while paper prototyping"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Competition
                </Text>
                <Text>
                    Healthy competition can spur creativity and encourage people
                    to approach things from a different perspective.
                </Text>
                <Text>
                    In Livestock, players can choose to store their products in
                    either an their barn <em>(representing open wallets)</em> or
                    a more secure, vault <em>(representing offline wallets)</em>
                    .
                </Text>
                <Text>
                    The vault is password-protected and impervious to theft{" "}
                    <em>(blockchain hacks)</em> but losing your password means
                    losing access to your funds{" "}
                    <em>(similar as losing your private keys)</em>.
                </Text>
            </Section>
            <Section variant="full" as="figure">
                <Image
                    src="/livestock/wireframes.png"
                    alt="Early wireframes of the LiveStock application after the initial tests with the paper prototype"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Market volatility
                </Text>
                <Text>
                    LiveStock{" "}
                    <Link
                        href="https://github.com/xiduzo/blockchaingame/blob/debdb89793332c27b2ae9a508c9bd14d905c0d9e/src/app/routes/room/room.controller.js#L287"
                        target="_blank"
                    >
                        generates
                    </Link>{" "}
                    a new market for each session to increase unpredictability.
                    With wool being stable and inexpensive, and bacon being
                    expensive and unstable.
                </Text>
                <Text>
                    <em>Who doesn’t want that sweet ol’ bacon right?</em>
                </Text>
                <Text>
                    Users can trade commodities or use animals to produce them.
                </Text>
            </Section>
            <aside>
                <Links
                    title="Mentioned at"
                    links={[
                        [
                            "https://networkcultures.org/moneylab/2018/06/04/students-design-blockchain-wallet-game",
                            "Institute of network cultures",
                        ],
                    ]}
                />
                <Links
                    title="In collaboration with"
                    links={[
                        ["https://bkantar.com/", "Buğra Kantar"],
                        ["https://chantalramzy.com/", "Chantal Ramzy"],
                        ["https://lenaheinrich.de/", "Lena Heinrich"],
                    ]}
                />
                <Links
                    title="References"
                    links={[
                        [
                            "https://github.com/xiduzo/blockchaingame",
                            "Code (app)",
                        ],
                        [
                            "https://github.com/xiduzo/blockchainserver",
                            "Code (server)",
                        ],
                    ]}
                />
            </aside>
        </>
    );
}
