import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Openmoji } from "@/components/custom/openmoji";
import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/text";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Section>
        <Text as="h1" variant="heading">
          Posts from 2024
        </Text>
        <Text
          size="sm"
          as="small"
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          I was on a roll this year
        </Text>
        <ul className="mt-24 flex flex-col gap-4 list-none">
          <li>
            <Link href="/post/2024/zod">
              <WobbleCard containerClassName="bg-emerald-500">
                <Text
                  variant="subheading"
                  motion="none"
                  className="flex gap-4 justify-between text-muted"
                >
                  Zod
                  <Openmoji
                    hexcode="1F6C2"
                    size={42}
                    className="block xl:hidden"
                  />
                </Text>
                <Text motion="none" className="text-muted max-w-xl">
                  Stronger interfaces, cleaner code, fewer bugs
                </Text>
                <Openmoji
                  hexcode="1F6C2"
                  size={420}
                  className="xl:block hidden absolute right-6 top-8 -z-10"
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href="/post/2024/testing">
              <WobbleCard containerClassName="bg-red-500">
                <Text
                  variant="subheading"
                  motion="none"
                  className="flex gap-4 justify-between text-muted"
                >
                  Testing
                  <Openmoji
                    hexcode="1F9EA"
                    size={42}
                    className="block xl:hidden"
                  />
                </Text>
                <Text motion="none" className="text-muted max-w-xl">
                  And become a better engineer
                </Text>
                <Openmoji
                  hexcode="1F9EA"
                  size={420}
                  className="xl:block hidden absolute right-6 top-8 -z-10"
                />
              </WobbleCard>
            </Link>
          </li>
          <li>
            <Link href="/post/2024/talking-to-water">
              <WobbleCard containerClassName="bg-violet-500">
                <Text
                  variant="subheading"
                  motion="none"
                  className="flex gap-4 justify-between text-muted"
                >
                  Talking to water
                  <Openmoji
                    hexcode="1F30A"
                    size={42}
                    className="block xl:hidden"
                  />
                </Text>
                <Text motion="none" className="text-muted max-w-xl">
                  The art of the bodge
                </Text>
                <Openmoji
                  hexcode="1F30A"
                  size={420}
                  className="xl:block hidden absolute right-6 top-8 -z-10"
                />
              </WobbleCard>
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
