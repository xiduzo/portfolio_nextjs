import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/text";
import Link from "next/link";
import { Iphone15Pro } from "@/components/magic-ui/iphone-15-pro";
import { Image } from "@/components/custom/image";
import { CodeBlock } from "@/components/custom/code-block";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magic-ui/marquee";
import { randomSort } from "@/lib/utils";
import { CallToAction } from "@/components/custom/call-to-action";
import { Hero } from "@/components/custom/hero";
import { Technologies } from "@/components/custom/technologies";
import { AppleIcon, StoreIcon } from "lucide-react";

const animals = ["🐋", "🦀", "🐕", "🦦", "🦔", "🦉", "🦥", "🐍", "🦑", "🐘"];

export default function Page() {
    return (
        <>
            <Hero
                title="Fissa"
                subtitle="Not only one person should decide what is playing on a party"
                readTime={12}
                publishDate="Jun 02 2023"
                emoji="1F415"
                className="bg-pink-500"
                link="https://fissa-houseparty.vercel.app"
            />
            <Technologies
                technologies={[
                    "Expo",
                    "NativeWind",
                    "Next.js",
                    "NextAuth.js",
                    "Prisma",
                    "React Native",
                    "Vercel serverless",
                    "tRPC",
                ]}
            />
            <Section>
                <Text as="h2" variant="subheading">
                    Everyone can be the DJ
                </Text>
                <Text>
                    Having friends at a party with a bad taste in music stinks.
                </Text>
                <Text>
                    This is what{" "}
                    <Link
                        href="https://www.linkedin.com/in/milan-van-der-maaten-307a1697"
                        target="_blank"
                    >
                        Milan
                    </Link>{" "}
                    and myself have experienced countless times and instead of
                    complaining about it constantly we decided to do something
                    about it.
                </Text>
                <Text size="sm">
                    As I am always looking for an excuse to start a new
                    pet-project to learn and explore new technologies, Fissa
                    seemed like a perfect opportunity to do so.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <div className="lg:-mt-32 lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/fissa/screen-3.svg"
                        className="w-full"
                        alt="Fissa visual exploration #1"
                    />
                </div>
                <div className="lg:mt-32 lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/fissa/screen-2.svg"
                        className="w-full"
                        alt="Fissa visual exploration #2"
                    />
                </div>
                <div className="lg:lg:col-span-4 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9">
                    <Iphone15Pro
                        src="/fissa/screen-1.svg"
                        className="w-full"
                        alt="Fissa visual exploration #3"
                    />
                </div>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    Group session
                </Text>
                <Text size="sm">
                    While building Fissa, we noticed Spotify introduced the{" "}
                    <Link
                        href="https://support.spotify.com/us/article/remote-group-session"
                        target="_blank"
                    >
                        remote group session
                    </Link>
                    . This was still a hidden feature at the time, changed
                    constantly and did not seem to have any focus from Spotify.
                </Text>
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
                    We wanted to give the user a personal experience too. This
                    is why decided to give each Fissa their own color.
                </Text>
            </Section>
            <Section variant="full" as="figure">
                <Text variant="note" as="figcaption">
                    It is a fissa, but within our boundaries
                </Text>
                <Image
                    src="/fissa/colors.svg"
                    alt="The different color pallettes Fissa has"
                    className="w-fit"
                    width={1920}
                    height={1080}
                />
            </Section>
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
\`\`\`typescript
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
\`\`\`
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
// tailwind.config.js

// ...

const theme = themes[Math.floor(Math.random() * themes.length)];

module.exports.theme = theme;
\`\`\`
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
\`\`\`
`}
                />
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <div className="xl:col-start-2 xl:col-span-4 md:col-span-6 col-span-12">
                    <Iphone15Pro
                        src="/fissa/pinkey.svg"
                        className="w-full"
                        alt="Fissa in the pinkey colors"
                    />
                </div>
                <div className="xl:col-span-4 md:col-span-6 col-span-12">
                    <Iphone15Pro
                        src="/fissa/orangy.svg"
                        className="w-full"
                        alt="Fissa in the orangy colors"
                    />
                </div>
                <div className="xl:col-start-4 xl:col-span-4 md:col-span-6 col-span-12">
                    <Iphone15Pro
                        src="/fissa/greeny.svg"
                        className="w-full"
                        alt="Fissa in the greeny colors"
                    />
                </div>
                <div className="xl:col-span-4 md:col-span-6 col-span-12">
                    <Iphone15Pro
                        src="/fissa/blueey.svg"
                        className="w-full"
                        alt="Fissa in the blueey colors"
                    />
                </div>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Less === more
                </Text>
                <Text>
                    Milan and myself are both big fans of Spotify and we
                    recognize its strength. They focus on one thing, and they do
                    it very well; <em>explore and discover music</em>.
                </Text>
                <Text>
                    Although we want to keep users fully engaged in Fissa, we
                    would never be able to do the exploration of music as well
                    as Spotify does.
                </Text>
                <Text>
                    Therefore we put our focus on managing a collaborative
                    playlist and utilize Spotify for the rest.
                </Text>
                <Text as="strong">Do one thing, and do it well.</Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <Text
                    className="col-span-12 xl:mb-32"
                    variant="note"
                    as="figcaption"
                >
                    Explorations on how we could add songs to a Fissa
                </Text>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/zoeken.svg"
                        className="w-full"
                        alt="Fissa add songs exploration #1"
                    />
                </div>
                <div className="lg:-mt-32 col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/search.svg"
                        className="w-full"
                        alt="Fissa add songs exploration #2"
                    />
                </div>
                <div className="lg:mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/add-song.svg"
                        className="w-full"
                        alt="Fissa add songs exploration #3"
                    />
                </div>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Experience Fissa
                </Text>
                <Text>
                    Before I lose you in the details, I would like to invite you
                    to experience Fissa yourself.
                </Text>
                <Text>
                    Make a Fissa and enjoy some tunes while you read the rest of
                    the article.
                </Text>
                <Text
                    as="div"
                    className="flex justify-center flex-wrap gap-4 mt-12"
                >
                    <Link
                        href="https://apps.apple.com/nl/app/fissa-houseparty/id1632218985"
                        target="_blank"
                    >
                        <CallToAction icon={<StoreIcon />}>
                            Fissa for iOS
                        </CallToAction>
                    </Link>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.fissa.app"
                        target="_blank"
                    >
                        <CallToAction icon={<StoreIcon />}>
                            Fissa for Android
                        </CallToAction>
                    </Link>
                </Text>
            </Section>
            <Section variant="full" aria-hidden="true">
                <Marquee className="[--duration:180s]">
                    {animals.sort(randomSort).map((animal) => (
                        <Text
                            key={animal}
                            variant="heading"
                            size="lg"
                            className="px-12"
                        >
                            {animal}
                        </Text>
                    ))}
                </Marquee>
                <Marquee reverse className="[--duration:180s]">
                    {animals.sort(randomSort).map((animal) => (
                        <Text
                            key={animal}
                            variant="heading"
                            size="lg"
                            className="px-12"
                        >
                            {animal}
                        </Text>
                    ))}
                </Marquee>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Beyond the app
                </Text>
                <Text>
                    Of course any app needs to work, what is the point of having
                    a non-functioning app. Besides playing tracks at a party we
                    wanted Fissa to be a fun experience, both for the users and
                    for us creating Fissa.
                </Text>
                <Text>
                    By playing around with animal-eomjis as copy we try to
                    lighten the mood of Fissa and bring some extra joy to the
                    experience.
                </Text>
                <Text>
                    It was a fun exercise to match the right animal for the
                    different states of Fissa.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <Text
                    className="col-span-12 xl:mb-32"
                    variant="note"
                    as="figcaption"
                >
                    A few examples of the use of emojis in Fissa
                </Text>
                <div className="lg:-mt-32 col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/explorer.svg"
                        className="w-full"
                        alt="Notification with a hedgehog"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/empty.svg"
                        className="w-full"
                        alt="Warning with a otter"
                    />
                </div>
                <div className="lg:mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4">
                    <Iphone15Pro
                        src="/fissa/fetch.svg"
                        className="w-full"
                        alt="Empty state with a dog"
                    />
                </div>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    The Fissa never stops 🦦
                </Text>
                <Text>
                    What is more annoying than being at a party,{" "}
                    <em>finally</em> having the courage to show your moves and
                    then the musics stops.
                </Text>
                <Text>
                    This should never happen,{" "}
                    <strong>the Fissa never stops</strong>.
                </Text>
                <Text>
                    Whenever the queue is about to get empty, Fissa will add
                    recommended tracks. These will be semi-random tracks,
                    utilizing the{" "}
                    <Link
                        href="https://developer.spotify.com/documentation/web-api/reference/get-recommendations"
                        target="_blank"
                    >
                        Spotify recommendations
                    </Link>
                    , but most importantly they will be based on the tracks
                    which are the most popular in <strong>your Fissa</strong>.
                </Text>
                <CodeBlock
                    code={`
\`\`\`tsx
class FissaService {
    playNextTrack = async () => {
        // ...

        if (nextTracks.length <= TRACKS_BEFORE_ADDING_RECOMMENDATIONS) { // [!code focus]
            const withPositiveScore = tracks.filter(({ totalScore }) => totalScore > 0); // [!code focus]
            const tracksToMap = withPositiveScore.length ? withPositiveScore : tracks; // [!code focus]

            const trackIds = tracksToMap // [!code focus]
                .map(({ trackId }) => trackId) // [!code focus]
                .sort(randomSort) // [!code focus]
                .slice(0, TRACKS_BEFORE_ADDING_RECOMMENDATIONS); // [!code focus]

            try {
                await this.trackService.addRecommendedTracks(pin, trackIds, access_token!); // [!code focus]
            } catch (e) {
                logger.error(\`\${fissa.pin}, failed adding recommended tracks\`, e);
            }
        }
    }
}
\`\`\`
`}
                />
            </Section>
            <Section>
                <Text as="h3" variant="subheading">
                    Determining the next song
                </Text>
                <Text>
                    As the Fissa is a collaborative playlist, users determine
                    the order of the songs. This is done by up- or down-voting
                    songs. This proved to be the most challenging part of the
                    project.
                </Text>
                <Text>
                    So strap-on your seatbelt, the next part will contain a lot
                    of nerd info.
                </Text>
            </Section>
            <Section
                className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12"
                as="figure"
            >
                <Text className="col-span-12" variant="note" as="figcaption">
                    The playlist is democratic, votes determine the queue
                </Text>
                <div className="lg:col-start-3 lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/fissa/vote.svg"
                        className="w-full"
                        alt="Notification with a hedgehog"
                    />
                </div>
                <div className="lg:col-span-4 col-span-12 md:col-span-6">
                    <Iphone15Pro
                        src="/fissa/longpress.svg"
                        className="w-full"
                        alt="Warning with a otter"
                    />
                </div>
            </Section>
            <Section>
                <Text>
                    Initially we stored the index of the songs directly into the
                    database. This way we put an unique index on the track for
                    data integrity, and we could easily sort the tracks by their
                    index.
                </Text>
                <CodeBlock
                    code={`
\`\`\`prisma
model Track {
    index  Int @db.SmallInt // [!code focus]
    trackId String @map("track_id") @db.VarChar(22)

    fissa Fissa @relation(fields: [pin], references: [pin], onDelete: Cascade)
    pin String @db.VarChar(4)

    @@id([pin, trackId])
    @@unique([pin, index])
    @@map("tracks")
}
\`\`\`
                        `}
                />
                <Text>
                    Easy peasy, lemon squeezy right? Well, not quite. This
                    approach has a few drawbacks:
                </Text>
                <Text as="ol">
                    <li>
                        When we add a song to Fissa, we up-vote it.{" "}
                        <em>Who would not up-vote their own track</em>? But this
                        means that whenever a track is added, we must
                        recalculate the indexes of all the tracks because their
                        order might have changed.
                    </li>
                    <li>
                        Users can up- or down-vote tracks anytime, leading to
                        constant index changes. While this is not inherently
                        problematic, it can disrupt ongoing index
                        recalculations.
                    </li>
                    <li>
                        Because of the unique index constraint in prisma (read
                        postgres), we had to update it twice: once to clear the
                        new index and once to update the moved tracks&apos;
                        index.
                    </li>
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
class FissaService {
    reorderPlaylist = async (pin: string) => {
        const { currentIndex, tracks } = await this.getRoomDetailedInformation(pin);

        try {
            const { updates, fakeUpdates, newCurrentIndex } =
            this.generateTrackIndexUpdates(tracks, currentIndex);

            await this.db.$transaction(async (transaction) => {
                if (currentIndex !== newCurrentIndex) {
                    await transaction.room.update({
                        where: { pin },
                        data: { currentIndex: newCurrentIndex },
                    });
                }

                // (1) Clear out the indexes // [!code focus]
                await transaction.room.update({ // [!code focus]
                    where: { pin }, // [!code focus]
                    data: { tracks: { updateMany: fakeUpdates } }, // [!code focus]
                }); // [!code focus]

                // (2) Set the correct indexes // [!code focus]
                await transaction.room.update({ // [!code focus]
                    where: { pin }, // [!code focus]
                    data: { tracks: { updateMany: updates } }, // [!code focus]
                }); // [!code focus]
            });
        } catch (e) {
            console.log(e);
        };
    }
}
\`\`\`
                    `}
                />
                <Text>
                    And for the final nail in the coffin, Fissa is hosted
                    serverless on{" "}
                    <Link href="https://vercel.com" target="_blank">
                        vercel
                    </Link>
                    . As nobody pays for their pet-project in this day-and-age,
                    we only have <strong>10 seconds</strong> to perform any
                    operation.
                </Text>
                <Text>
                    Recalculating and updating indexes of Fissas with 50+ songs
                    proved to be not possible. Even with the latest{" "}
                    <Link
                        href="https://www.prisma.io/blog/prisma-and-serverless-73hbgKnZ6t"
                        target="_blank"
                    >
                        9x improvements in prisma serverless cold starts
                    </Link>
                    .
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    The path of least resistance
                </Text>
                <Text>
                    Eventually we settled on inferring the position of a track
                    based on its&apos; score. The score is updated each time a
                    user votes on a track and the score will be cleared whenever
                    the song is being played.
                </Text>
                <Text>
                    By using the logic which was already in Fissa, we could
                    remove a lot of code and make the whole process a lot
                    simpler and stable.{" "}
                    <Link
                        href="https://www.youtube.com/watch?v=h3uBr0CCm58"
                        target="_blank"
                    >
                        Noice
                    </Link>
                </Text>
                <CodeBlock
                    code={`
\`\`\`prisma
model Track {
    index Int @db.SmallInt // [!code --]
    score Int @db.SmallInt @default(0) // [!code ++]
    trackId String @map("track_id") @db.VarChar(22)

    fissa Fissa @relation(fields: [pin], references: [pin], onDelete: Cascade)
    pin String @db.VarChar(4)

    @@unique([pin, trackId])
    @@map("tracks")
}
\`\`\`
                    `}
                />
                <Text>
                    This only leaves us with <strong>THE algorithm</strong>{" "}
                    which is the heart of Fissa.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
type Dates = { lastUpdateAt: Date; createdAt: Date; };

export type SortableTrack = Dates & {
    score: number;
    trackId: string;
    hasBeenPlayed: boolean;
};

const sortTrack = (date: keyof Dates) => (a: SortableTrack, b: SortableTrack) => {
    const aTime = a[date].getTime();
    const bTime = b[date].getTime();

    if (a.score !== b.score) return b.score - a.score;  // [!code focus]
    if (aTime === bTime) return a.trackId.localeCompare(b.trackId);

    return aTime - bTime;
};

export const sortFissaTracksOrder = <T extends SortableTrack>(
    tracks?: T[],
    activeTrackId?: string | null,
) => {
    if (!tracks) return [];

    const { played, unplayed, active } = tracks.reduce(
    (acc, track) => {
        const { hasBeenPlayed, trackId } = track;

        if (trackId === activeTrackId) acc.active = track;
        else if (hasBeenPlayed) acc.played.push(track);
        else acc.unplayed.push(track);

        return acc;
    },
    { played: [] as T[], unplayed: [] as T[], active: null as T | null },
    );

    const sortedPlayedTracks = played.sort(sortTrack("lastUpdateAt"));
    const sortedUnplayedTracks = unplayed.sort(sortTrack("createdAt"));

    return [...sortedPlayedTracks, ...(active ? [active] : []), ...sortedUnplayedTracks];
};
\`\`\`
                        `}
                />
            </Section>
            <aside>
                <Section>
                    <Text as="h2" variant="subheading" size="sm">
                        In collaboration with
                    </Text>
                    <Text className="flex gap-4 flex-wrap">
                        <Link
                            href="https://www.linkedin.com/in/milan-van-der-maaten-307a1697"
                            target="_blank"
                        >
                            <Button variant="outline">
                                Milan van der Maaten
                            </Button>
                        </Link>
                    </Text>
                </Section>
                <Section>
                    <Text as="h2" variant="subheading" size="sm">
                        Source code
                    </Text>
                    <Text className="flex gap-4 flex-wrap">
                        <Link
                            href="https://github.com/xiduzo/t3-fissa"
                            target="_blank"
                        >
                            <Button variant="outline">Fissa</Button>
                        </Link>
                        <Link
                            href="https://github.com/xiduzo/fissa"
                            target="_blank"
                        >
                            <Button variant="outline">Prototype</Button>
                        </Link>
                    </Text>
                </Section>
            </aside>
        </>
    );
}
