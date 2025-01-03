import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import Link from "next/link";
import { CodeBlock } from "@/components/custom/code-block";

export default function Page() {
    return (
        <>
            <Section>
                <Text as="h2" variant="subheading">
                    Everyone can be the DJ
                </Text>
                <Text>
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
        </>
    );
}
