import { CodeBlock } from "@/components/custom/code-block";
import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/text";
import Link from "next/link";
import { Image } from "@/components/custom/image";
import { Hero } from "@/components/custom/hero";
import Alert from "@/components/custom/alert";
import { Safari } from "@/components/magic-ui/safari";

export default function Page() {
  return (
    <>
      <Hero
        title="Zod"
        publishDate="June 30 2024"
        emoji="1F6C2"
        className="bg-emerald-500"
        subtitle="Stronger interfaces, cleaner code, fewer bugs"
        readTime={14}
      />
      <Section>
        <Text>
          I am a big fan of TypeScript, but one thing that I still find lacking
          compared to a real strongly type language: the runtime validation of
          the data.
        </Text>
        <Text>
          While a static type checker ensures everything <em>works</em>,
          eventually we have to interact with the scary outside world.
        </Text>
        <Text>
          This can include user input, API responses, streamed data, reading
          data from disk or even loading environment variables.
        </Text>
      </Section>
      <Section>
        <Text as="h2" variant="subheading">
          Lying interfaces
        </Text>
        <Text>
          One thing that is more harmful than no interface, is a lying
          interface. This will set you —and your team— up for a world of
          unnecessary debug sessions.
        </Text>
        <Text className="mt-60">
          Let&apos;s say you have a neat generic function that fetches data from
          an API:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response as T;
}
\`\`\`
                    `}
        />
        <Text>
          You have properly declared an interface for the data you expect:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
type ApiData = {
  foo: string;
  bar: number;
}
\`\`\`
                    `}
        />
        <Text>
          And when you call the function you expect to get the data you want:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const response = await fetchData<ApiData>("example.api.org"); // ApiData
\`\`\`
                    `}
        />
        <Text>
          At first glance the interface looks fine, the function has explicit
          type inputs and outputs.
        </Text>
        <Text>But theres a catch — or rather 2 lies:</Text>
        <Text as="ol">
          <li>
            The function can return anything, not just <code>ApiData</code>.
          </li>
          <li>
            The function can throw an error, but you do not know that from the
            interface. You are{" "}
            <span className="text-muted-foreground hover:text-foreground transition-colors">
              left in the dark
            </span>{" "}
            about what could go wrong.
          </li>
        </Text>
        <Text>
          You can easily spot those lies in source code whenever you see an{" "}
          <code>as T</code> which should be read as <code>as LIE</code>.
        </Text>
      </Section>
      <Section>
        <Text as="h2" variant="subheading">
          Removing the lies
        </Text>
        <Text>
          We can enhance the interface by adding a runtime validation library
          like{" "}
          <Link target="_blank" href="https://zod.dev">
            Zod
          </Link>
          <sup>1</sup>. This requires some initial extra typing, but it pays off
          in terms of new type-safe superpowers inside your IDE.
        </Text>
        <Text as="aside" size="sm" className="mt-8">
          <ol>
            <li>
              Zod is my personal go-to runtime validation library for
              JavaScript. But be aware that there is{" "}
              <Link target="_blank" href="https://zod.dev/?id=comparison">
                more out there
              </Link>
              .
            </li>
          </ol>
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { SafeParseReturnType } from 'zod';

type Response<T extends ZodSchema> =
  | SafeParseReturnType<T, z.output<T>>
  | { success: false; error: unknown };

async function fetchData<T extends ZodSchema>(url: string, schema: T): Promise<Response<T>> {
  try {
    const response = await fetch(url);
    return schema.safeParse(response);
  } catch (error) {
    return { success: false, error };
  }
}
\`\`\`
                    `}
        />
        <Text>
          Instead of defining a type directly, we define a schema with{" "}
          <code>Zod</code> and infer the type from it.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { z } from "zod";

const apiData = z.object({
  foo: z.string(),
  bar: z.number(),
});

// Direct replacement for the previous type
type ApiData = z.infer<typeof apiData>;
\`\`\`
                    `}
        />
        <Text>
          Now, when we call the function, we are sure that the data we get is
          according to the schema. And if not, we get proper typed errors.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
export async function getData() {
  const response = await fetchData("example.api.org", apiData);

  if (!response.success) {
    console.log(response.data); // undefined
    if (response.error instanceof ZodError) {
      // The data we got from the API is not according to the schema
      console.log(response.error); // ZodError
      return null;
    }

    // The API request failed
    console.log(response.error); // unknown
    return null;
  }

  console.log(response.error); // undefined
  return response.data; // ApiData
}
\`\`\`
                    `}
        />
      </Section>
      <Section>
        <Text as="h2" variant="subheading">
          Zod in the real world
        </Text>
        <Text>
          For my client,{" "}
          <Link target="_blank" href="https://www.growy.nl/">
            Growy
          </Link>
          , we are dealing with unstructured data from various sources.
        </Text>
        <Text>
          Growy is revolutionizing vertical farming by heavily relying on
          (hundreds of) IoT devices sending and receiving data to/from the
          cloud.
        </Text>
        <Text>
          Our software is handling data from two primary sources: DynamoDB and
          MQTT messages.
        </Text>
        <Text>
          In the software, there was efford put into data-classes that allow for
          creating data objects for static type-safety.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
export class GrowthCycle {
  id: string;
  type: string;
  amount: number;

  constructor(id: string, type: string, amount: number) {
    this.id = id;
    this.type = type;
    this.amount = amount;
  }

  static fromDynamoRecord(data: Record<string, string | number | undefined | null>) {
    return new GrowthCycle(
      data.id as string,
      data.type as string,
      data.amount as number
    );
  }

  // ... other methods
}
\`\`\`
                    `}
        />
        <Text>For DynamoDB queries, there were functions like:</Text>
        <CodeBlock
          code={`
\`\`\`typescript
function getRecord(id: string) {
  const response = await dynamoClient.send(<QUERY>);
  const Item = response.Item; // Record<string, any>

  return GrowthCycle.fromDynamoRecord(Item); // GrowthCycle
}
\`\`\`
                    `}
        />
        <Text>
          And for MQTT messages, there were handlers that parsed data
          <sup>2</sup> as follows:
        </Text>
        <Text as="aside" size="sm" className="mt-8">
          <ol start={2}>
            <li>
              For better <code>JSON.parse</code> type safety, check out{" "}
              <Link
                target="_blank"
                href="https://github.com/total-typescript/ts-reset"
              >
                ts-reset
              </Link>
              .
            </li>
          </ol>
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
mqqClient.onMessage(message => {
  const data = JSON.parse(message.payload.toString()); // any

  const example = new GrowthCycle(data.id, data.type, data.amount); // GrowthCycle

  // ... do something with the data
})
\`\`\`
                    `}
        />
        <Text>
          But, you might have noticed some <code>as LIE</code>s in the code.
        </Text>
        <Text>
          When parsing a record from DynamoDB, we are assuming that the data is
          always there and of the correct type. Similarly, when parsing an MQTT
          message, we are assuming that the payload is always a stringified JSON
          object containing the correct data.
        </Text>
        <Text>
          While all interfaces and static types are correct, runtime data could
          still be (and sometimes was) wrong.
        </Text>
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          The problem
        </Text>
        <Text>
          As we tested our platform with simulated (IoT) devices, everything
          seemed to work smoothly. But when the simulated devices were being
          replaced by their actual real-world counterparts, that is when things
          got interesting.
        </Text>
        <Text>
          When we started to get actual data from the real world, bugs started
          to surface. The data we were expecting and worked with in our
          simulated environment was not always the correct data. The interfaces
          from <em>&ldquo;the hardware team&rdquo;</em> and{" "}
          <em>&ldquo;the software team&rdquo;</em> were not always in sync.
        </Text>
        <Text>
          Some bugs were found immediately, as the services started breaking
          down when the wrong data was received:
        </Text>
        <Text>
          <code>
            TypeError: Cannot read property &apos;foo&apos; of undefined
          </code>{" "}
          or <code>NaN</code> values after calculations were not uncommon.
        </Text>
        <Text>
          But some bugs were more subtle. Wrongly received data was stored in
          the DynamoDB table and only processed in later stages, making it
          harder to identify the root cause.
        </Text>
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Adding runtime validation
        </Text>
        <Text>
          To prevent services from crashing and data from being stored
          incorrectly, we introduced runtime validation to our data objects.
        </Text>
        <Text>
          When I joined the project, which was already quite large, it had
          adopted a heavy Object-Oriented Programming (OOP) style. The data
          objects were used exetensively throughout the codebase. As a result,
          we decided to not go full-in on <em>the zod way</em>.
        </Text>
        <Text>
          Instead, we opted for a hybrid approach, adding zod parsing
          capabilities to the existing classes. This involved some TypeScript
          magic, but allowed us to leverage the benefits of runtime validation
          without disrupting the overall codebase structure.
        </Text>
      </Section>
      <Section>
        <Alert icon="AlertCircle" intent="warning">
          <Text>
            The following code took some time to made, had its&apos; fair share
            of issues while developing and also gave me some headaches.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text>
          The following <code>Parsable</code> class serves as the foundation for
          our runtime validation framework:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { SafeParseReturnType, ZodSchema, ZodTypeDef } from 'zod'

export interface GeneratedParsable<Output = unknown, TypeDef extends ZodTypeDef = ZodTypeDef, Input = Output> {
  schema: ZodSchema<Output, TypeDef, Input>
  // passing \`unknown\` instead of \`any\` will beak TS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parse<TFinal extends new (data: any) => InstanceType<TFinal>>(this: TFinal, value: unknown): InstanceType<TFinal>
  // passing \`unknown\` instead of \`any\` will beak TS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  safeParse(data: unknown): SafeParseReturnType<Input, Output>
  new (input: Input): Output
}

export function Parsable<Output = unknown, TypeDef extends ZodTypeDef = ZodTypeDef, Input = Output>(schema: ZodSchema<Output, TypeDef, Input>) {
  const Generated = class {
    static schema = schema
    static parse<T extends typeof Generated>(this: T, data: unknown) {
      return new this(data as Input)
    }
    static safeParse(data: unknown) {
      const result = schema.safeParse(data)

      if (!result.success) {
        console.warn('Failed to parse data', { data, error: result.error })
      }

      return result
    }

    constructor(input: Input) {
      const result = Generated.safeParse(input)

      if (!result.success) {
        throw result.error
      }

      Object.assign(this, result.data)
    }
  }

  return Generated as unknown as GeneratedParsable<Output, TypeDef, Input>
}
\`\`\`
                    `}
        />
        <Text>
          Okay, busted. In our code we also use some <code>as LIE</code>s, but
          let me break it down.
        </Text>
        <Text as="code" className="mt-16 inline-block">
          data as Input
        </Text>
        <Text>
          Our constructor requires an <code>Input</code> type and does not allow
          the <code>unknown</code> data we pass to the <code>parse</code>{" "}
          method.
        </Text>
        <Text as="code" className="mt-16 inline-block">
          {"as unknown as GeneratedParsable<Output, TypeDef, Input>"}
        </Text>
        <Text>
          A double <code>LIE</code>! To make your IDE happy we need to return
          any form of our <code>GeneratedParsable</code> interface.
        </Text>
        <Text>
          As the <em>shape</em> of the schema can be (almost) anything,
          typescript will infer everything from the generics
          <code>Output</code>, <code>TypeDef</code> and <code>Input</code> and
          use them in the
          <code>GeneratedParsable</code> interface.
        </Text>
      </Section>
      <Section>
        <Text>
          Luckely, all of the above happens behind the scenes and we can extend
          the <code>Parsable</code> in the data objects to give it runtime
          validation capabilities.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { z } from 'zod'

const schema = z.object({
  id: z.string(),
  type: z.string(),
  amount: z.number()
})

export class GrowthCycle extends Parsable(schema) {
  // ... other methods
}
\`\`\`
                    `}
        />
        <Text>
          With this setup, we can now use the <code>parse</code> and{" "}
          <code>safeParse</code>
          methods to validate any unknown data.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const validInput = { id: '123', type: "foo", amount: 42 }
const invalidInput = { id: '123', type: false, amount: 42 } // type should be a string

GrowthCycle.parse(validInput) // GrowthCycle
GrowthCycle.parse(invalidInput) // Throws a \`ZodError\`
// or
GrowthCycle.safeParse(validInput) // Returns a \`GrowthCycle\`
GrowthCycle.safeParse(input) // Gracefully returns a \`ZodError\`
\`\`\`
                    `}
        />
        <Text>
          On top of this, even <em>new</em> instances of any{" "}
          <code>Parsable</code> class will be validated using the schema and
          giving type-hints in the IDE. Adding some extra static type checking
          magic to the mix.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const invalidInput = { id: '123', type: false, amount: 42 }

const example = new GrowthCycle(invalidInput) // [!code error]
// Argument of type '{ id: string; type: boolean; amount: number; }' is not assignable to parameter of type '{ type: string; id: string; amount: number; }'.
//  Types of property 'type' are incompatible.
//    Type 'boolean' is not assignable to type 'string'.
\`\`\`
                    `}
        />
        <Text>
          From this moment onwards we can be sure the data we are working with
          is in the expected format, no more need for <code>as LIE</code>s.
        </Text>
        <Text>
          When receiving faulty data, we will be better equipped to pinpoint and
          handle it gracefully.
        </Text>
      </Section>
      <Section as="figure">
        <Safari
          src="/zod/parse-failures.png"
          alt="Monitoring results from parse errors"
          className="mx-auto"
        />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          The aftermath
        </Text>
        <Text>
          After implementing runtime validation, services started reporting a
          lot more faulty data inputs. Initially, the team was not very pleased
          with the constant need for fixing <em>unnecessary errors</em>. Instead
          of adding new features the focus was on data integrity for nearly a
          full month.
        </Text>
        <Text>
          However, as time passed, received data became increasingly in line
          with the expected format. This led to better discussions between teams
          about data formats and interfaces, as faulty data would no longer be
          accepted.
        </Text>
        <Text>
          As a result, the platform is now more stable, and the reliability of
          the data has improved significantly.
        </Text>
      </Section>
      <Section>
        <Text variant="note" className="italic" size="lg">
          Edit
        </Text>
        <Text>
          Before leaving the project, I was surprised with a gift from the team.
          They had named a robot after me, forever engraving <code>zod</code>{" "}
          <em>(and myself)</em> in the Growy system.
        </Text>
        <Image
          src="/zod/sander-zod.png"
          alt="A robot named after me"
          width={578}
          height={676}
          className="mx-auto mt-40"
        />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Room for improvement
        </Text>
        <Text>
          While the hybrid approach worked well for this project, it is not
          perfect. For instance, it does not work with more complex types like
          like{" "}
          <Link target="_blank" href="https://zod.dev/?id=unions">
            unions
          </Link>{" "}
          and{" "}
          <Link target="_blank" href="https://zod.dev/?id=intersections">
            intersections
          </Link>
          .
        </Text>
        <Text>
          When starting a new project, I would personally be going full-in on{" "}
          <em>the zod way</em>. This would remove the need for the{" "}
          <code>Parsable</code> entirely.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { z } from "zod";

export const GrowthCycle = z.object({
  id: z.string(),
  type: z.string(),
  amount: z.number()
});

export type GrowthCycle = z.infer<typeof GrowthCycle>;
\`\`\`
                    `}
        />
        <Text>
          You could then use the <code>GrowthCycle</code> type when only type
          information is needed.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import type { GrowthCycle } from "./GrowthCycle";

function handler(growthCycle: GrowthCycle) { /* ... */ }
\`\`\`
                    `}
        />
        <Text>
          Or pass the <code>GrowthCycle</code> zod object when data validation
          is required.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { GrowthCycle } from "./GrowthCycle";

export class Handler {
  handle(data: unkown) {
    const { success, data, error} = GrowthCycle.safeParse(data);

    // ... handle the result
  }
}
\`\`\`
                    `}
        />
      </Section>
    </>
  );
}
