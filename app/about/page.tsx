import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h1" variant="heading">
                    Who am I?
                </Text>
                <Text className="mb-1" size="sm">
                    Designer by education,
                </Text>
                <Text className="mb-1" size="sm">
                    Developer by interest,
                </Text>
                <Text size="sm">Tinkerer by curiosity.</Text>
            </Section>
            <Section>
                <Text>
                    I have always been fascinated by technology. While my
                    friends played{" "}
                    <Link target="_blank" href="https://tibia.com">
                        tibia
                    </Link>
                    , I was busy creating my own hacked version.
                </Text>
                <Text>
                    This is where my interest for programming began as I learned
                    how to host a server, create a database and modify game code
                    to make it work as I wanted. Checkout my awesome{" "}
                    <Link
                        href="https://otland.net/threads/bombsquad-9-6.187509"
                        target="_blank"
                    >
                        bomb squad mod
                    </Link>
                    !
                </Text>
                <Text>
                    The process of unraveling complex systems is a driving force
                    for me, ever since the day I ran my first <code>XAMPP</code>{" "}
                    stack with a <code>phpMyAdmin</code> database.
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Creative technologist
                </Text>
                <Text>
                    Throughout my journey as a creative technologist, I have
                    gained a firm grasp on the principles of (digital) design
                    <sup>1</sup> and a deep understanding of programming
                    <sup>2</sup>. Merging the worlds of aesthetics and
                    functionality.
                </Text>
                <Text as="aside" className="mt-8 text-base">
                    <ol>
                        <li>
                            With a bachelor&apos;s degree in{" "}
                            <Link
                                target="_blank"
                                href="https://www.cmd-amsterdam.nl"
                            >
                                Communication and Multimedia design
                            </Link>{" "}
                            and a master&apos;s degree in{" "}
                            <Link
                                href="https://www.masterdigitaldesign.com/alumni/sander-boer"
                                target="_blank"
                            >
                                Digital Design
                            </Link>
                        </li>
                        <li>
                            With{" "}
                            {new Date().getFullYear() -
                                new Date("01-01-2007").getFullYear()}
                            + years of software development experience
                        </li>
                    </ol>
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    What I like to do
                </Text>
                <Text>Fusing 🔥 technology with ✨ design.</Text>
                <Text>
                    I love to create tools that enhance the performance of
                    professionals or/and empower individuals.
                </Text>
                <Text>
                    Collaborating with people from diverse backgrounds to
                    achieve a shared objective is a value I hold dear. I firmly
                    believe that exceptional solutions emerge only when we
                    embrace a multitude of perspectives.
                </Text>
                <Text>
                    My true strengths shine at the intersection of development
                    and User Experience (UX) design. Engaging in both
                    disciplines is where I like to play ball.
                </Text>
            </Section>
            <Section className="flex flex-col items-center mb-60">
                <Text as="h2" variant="subheading" size="sm">
                    What I am up to
                </Text>
                <Link href="https://github.com/xiduzo" target="_blank">
                    <section className="xl:max-w-screen-sm lg:max-w-screen-sm max-w-96 overflow-hidden">
                        <GitHubCalendar username="xiduzo" />
                    </section>
                </Link>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Who is Sander <em>really</em>?
                </Text>
                <Text>
                    Besides solving wicked problems, I enjoy cooking —and
                    eating. Making a mean pasta or some sloppy tacos, but
                    whenever there is flavour, I’m in!
                </Text>
                <Text>
                    I like (to be in) nature and am your go-to-guy to
                    entertain/annoy the dog/cat at any party!
                </Text>
            </Section>
            <Image
                src="/about/me_1.png"
                alt="Sander with food, in nature and with a dog"
                width={1920}
                height={1080}
                className="my-16"
            />
            <Section>
                <Text>
                    I try to experiment with random technologies like
                    3D-printing, Augmented- and Virtual-Reality or
                    micro-controllers. Stepping away from that screen and
                    interact with the (real) world.
                </Text>
            </Section>
            <Image
                src="/about/technologies.png"
                alt="Random technologies Sander has experimented with"
                width={1920}
                height={1080}
                className="my-16"
            />
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    Sharing === caring
                </Text>
                <Text>
                    I like to share my knowledge and experience with others. I
                    do this by giving workshops, mentoring students and trying
                    to be an active member of the developer community.
                </Text>
            </Section>
            <Image
                src="/about/sharing.png"
                alt="Sander in various workshops and mentoring sessions"
                width={1920}
                height={1080}
                className="my-16"
            />
            <Section>
                <Text className="mb-80">
                    You can always challenge me for a game but be aware…
                </Text>
                <Text>...I am in it to win it.</Text>
            </Section>
            <Image
                src="/about/games.png"
                alt="Sander playing various games"
                width={1920}
                height={1080}
                className="my-16"
            />
            <Section>
                <Text>
                    And if the sun is out, I’d love to join you for a beer (or
                    tequila).
                </Text>
            </Section>
            <Image
                src="/about/beer.png"
                alt="Sander enjoying some beers in the sun and visiting tequila in Mexico"
                width={1920}
                height={1080}
                className="my-16"
            />
        </>
    );
}

// [^1]: With a bachelor's degree in [Communication and Multimedia design](https://www.cmd-amsterdam.nl) and a master's degree in [Digital Design](https://www.masterdigitaldesign.com/alumni/sander-boer)
// [^2]: With 15+ years of software development experience
