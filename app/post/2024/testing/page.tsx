import { CodeBlock } from "@/components/custom/code-block";
import { Openmoji } from "@/components/custom/openmoji";
import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import { Marquee } from "@/components/magic-ui/marquee";
import { VelocityScroll } from "@/components/magic-ui/scroll-based-velocity";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <header className="mb-44 flex flex-col relative" aria-hidden>
                <section className="absolute top-6 right-6 z-20 flex gap-2">
                    <Badge variant="secondary" className="pointer-events-none">
                        2024
                    </Badge>
                </section>
                <section className="bg-red-500 flex items-end justify-center z-10">
                    <Openmoji
                        hexcode="1F9EA"
                        size={420}
                        className="translate-y-32"
                    />
                </section>
                <section className="text-9xl leading-[9.25rem] w-screen font-extrabold font-heading absolute left-0 -bottom-32">
                    <VelocityScroll text="Testing" default_velocity={2} />
                </section>
            </header>
            <Section className="text-center max-w-4xl mx-auto">
                <Text
                    as="h1"
                    size="sm"
                    variant="body"
                    className="italic text-muted-foreground font-light"
                >
                    Testing,
                </Text>
                <Text
                    size="lg"
                    variant="subheading"
                    className="text-center mb-8"
                >
                    And become a better engineer
                </Text>
                <Badge variant="outline">22 minute read</Badge>
            </Section>
            <Section>
                <Text>
                    Although there are{" "}
                    <Link
                        href="https://medium.com/codex/types-of-testing-de4cdd98df77"
                        target="_blank"
                    >
                        many forms of testing
                    </Link>
                    , in this article I will focus on unit testing — in
                    TypeScript.
                </Text>
                <Text>
                    I believe they are the easiest to setup, easy to
                    write/maintain and when done properly{" "}
                    <Link
                        href="https://www.youtube.com/watch?v=QFCHSEHgqFE"
                        target="_blank"
                    >
                        end-to-end testing may become obsolete
                    </Link>
                    .
                </Text>
            </Section>
            <Marquee pauseOnHover className="[--duration:500s]">
                {Array.from({ length: 100 }).map((_, i) => (
                    <Text key={i} className="px-2">
                        💡
                    </Text>
                ))}
            </Marquee>
            <Text className="block text-center px-8 text-blue-500" as="strong">
                The examples in this article are for testing in JavaScript
                (TypeScript). However, the principles can be applied to you
                favorite tools.
            </Text>
            <Marquee pauseOnHover reverse className="[--duration:500s]">
                {Array.from({ length: 100 }).map((_, i) => (
                    <Text key={i} className="px-2">
                        💡
                    </Text>
                ))}
            </Marquee>
            <Section>
                <figure className="space-y-4 my-16 prose md:prose-xl lg:prose-2xl">
                    <blockquote
                        cite="https://chat.openai.com/share/97ddf631-1171-4c18-9f70-40e2b6f30e8b"
                        className="text-white not-italic"
                    >
                        Engineers conduct tests and experiments to evaluate the
                        performance, safety, and reliability of products or
                        systems. This may involve using specialized equipment,
                        conducting simulations, or performing real-world trials.
                    </blockquote>
                    <figcaption className="text-muted-foreground">
                        - ChatGPT
                    </figcaption>
                </figure>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    The software engineer
                </Text>
                <Text>
                    In the physical world, you rely on engineers to be due
                    diligent in their work. You would not like to have a bridge
                    collapse because it was not tested properly, right?
                </Text>
                <Text>
                    So how is it that I come across many{" "}
                    <em>software engineers</em> who not test their code?
                </Text>
                <Text>
                    It is our job that the code we write works as intended, and
                    —preferably— keeps on working as intended after changes have
                    been made.
                </Text>
                <Text>
                    This is, to me, part of the <em>engineering</em> mindset.
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Some 🚩🚩🚩🚩
                </Text>
                <Text>
                    Every project (-team) is different, but there are some
                    common pitfalls that I have seen over and over again which
                    should raise some red flags for you.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    🚩 No test runner has been setup
                </Text>
                <Text>
                    This one is kind of obvious, but when a project has no test
                    runner setup it does not motivate (new) team members to
                    write tests.
                </Text>
                <Text>
                    Why would you bother writing tests as this project clearly
                    does not find them important?
                </Text>
                <Text>
                    This is true for a local setup which enables developers to
                    validate their code locally.
                </Text>
                <Text>
                    It is equally important to have a test runner in your CI/CD
                    pipeline.
                </Text>
                <CodeBlock
                    code={`
\`\`\`yml
# Simple GitHub-actions example
name: Node.js CI

on:
  pull_request:
    branches: [main] # Can extend to other branches

jobs:
  is-code-okay:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 18
        uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm ci
      - run: npm run test
\`\`\`
                    `}
                />
                <Text>
                    This way you can ensure no old code is broken
                    unintentionally. Even when you or a team member forgot about
                    running the tests locally.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    🚩 Tests are treated as second-class citizens
                </Text>
                <Text>
                    When tests are stored away in a separate folder it makes
                    them harder to find and easier to forget about.
                </Text>
                <Text>There is no constant nudge to write tests.</Text>
                <CodeBlock
                    code={`
\`\`\`
project-root/
│
├── src/
│   ├── app.ts
│   └── utils.ts
│
└── test/
    ├── app.test.ts
    └── utils.test.ts
\`\`\`
                    `}
                />
                <Text>
                    Try placing the tests as part of the source code, next to
                    the code they are testing.
                </Text>
                <Text>
                    This way the project itself tells you{" "}
                    <em>&ldquo;we care about tests&rdquo;</em> just by working
                    on it.
                </Text>
                <CodeBlock
                    code={`
\`\`\`
project-root/
│
└── src/
    ├── app.ts
    ├── app.test.ts
    ├── utils.ts
    └── utils.test.ts
\`\`\`
                    `}
                />
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    🚩 Test code is not <em>clean</em>
                </Text>
                <Text>
                    Why do you go to great lengths to write clean, maintainable
                    code, but throw all of this out of the window when writing
                    tests?
                </Text>
                <Text>
                    Before we start this section I would like to define what I
                    consider as <code>source code</code>.{" "}
                    <code>Source code</code> is all the code which is part of
                    the project. This can be broken down into{" "}
                    <code>test code</code> and <code>production code</code>.
                </Text>
                <Text>
                    <code>Test code</code> should adhere to the same standards
                    of quality as the <code>production code</code> it is
                    testing.
                </Text>
                <figure className="space-y-4 my-16 prose md:prose-xl lg:prose-2xl">
                    <blockquote
                        cite="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
                        className="text-white not-italic"
                    >
                        Indeed, the ratio of time spent reading versus writing
                        is well over 10 to 1. We are constantly reading old code
                        as part of the effort to write new code. Therefore,
                        making it easy to read makes it easier to write.
                    </blockquote>
                    <figcaption className="text-muted-foreground">
                        Clean Code: A Handbook of Agile Software Craftsmanship
                    </figcaption>
                </figure>
                <figure className="space-y-4 my-16 prose md:prose-xl lg:prose-2xl">
                    <blockquote
                        cite="https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599"
                        className="text-white not-italic"
                    >
                        Any fool can write code that a computer can understand.
                        Good programmers write code that humans can understand.
                    </blockquote>
                    <figcaption className="text-muted-foreground">
                        Refactoring: Improving the Design of Existing Code
                    </figcaption>
                </figure>
            </Section>
            <Section>
                <Text>
                    Some indicators I have found that you throw out clean code
                    principles when writing tests:
                </Text>
                <Text className="mt-28">
                    <ol>
                        <li>Ignoring test files in your linting</li>
                    </ol>
                </Text>
                <Text>
                    Sure, this makes your life easier in the short term. But
                    over the lifespan of a project you will end up with a lot of
                    unmaintainable tests (read technical debt) that you have
                    created yourself unnecessarily.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
{
    "ignorePatterns": ["**/*.test.ts"], // Don't do this
}
\`\`\`
                    `}
                />
                <Text>
                    <ol start={2}>
                        <li>Making the test (file) a puzzle by itself</li>
                    </ol>
                </Text>
                <Text>
                    Tests can be considered documentation itself when written
                    properly.
                </Text>
                <Text>
                    Why make it harder for the next person, which is most likely
                    going to be you, to understand what is going on?
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
it("should do the thing", () => {
  const a = [1, 10];
  const b = [2, 50];

  // @ts-ignore
  const d = calculateDistance(a, b);
  const c = plotCurve(d, {} as unknown as MyOptions);

  expect(c).toBe([
    [1, 20],
    [7, 18],
    [3, 49],
  ]);
});
\`\`\`
                    `}
                />
                <Text>
                    Act like you are writing <em>&ldquo;normal&rdquo;</em> code.
                </Text>
                <Text>
                    This makes it easier to skim over the tests to see what is
                    being tested and what the expected outcome is.
                </Text>
                <Text>
                    The{" "}
                    <em>
                        <Link
                            href="https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/"
                            target="_blank"
                        >
                            Arrange, Act, Assert
                        </Link>
                    </em>{" "}
                    pattern can help you structure your tests.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
it("should plot a curve between two data points", () => {
  // Arrange
  const pointA = [1, 10];
  const pointB = [2, 50];
  const expectedCurve = [
    [1, 20],
    [7, 18],
    [3, 49],
  ];

  // Act
  const distance = calculateDistance(pointA, pointB, true);
  const result = plotCurve(distance, { step: 3 });

  // Assert
  expect(result).toEqual(expectedCurve);
});
\`\`\`
                    `}
                />
                <Text>
                    <ol start={3}>
                        <li>
                            Not using <code>constant</code>, <code>enums</code>,{" "}
                            <code>types</code> or <code>interfaces</code>
                            defined in your production code
                        </li>
                    </ol>
                </Text>
                <Text>
                    In our <em>production code</em> we tend use those to try and
                    make the code more self-explanatory.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// sendCommand.ts
enum CommandType {
  FOO = "foo",
  BAR = "bar",
}

interface Command {
  command: Record<string, unknown>;
  type: CommandType;
}

async function sendCommand(command: Command) {
  await mySender.send(command.type, command.command);
}
\`\`\`
                    `}
                />
                <Text>Why do we forget about this when writing tests?</Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// sendCommand.test.ts
it("should log the constant", async () => {
  const spy = jest.spyOn(mySender, "send");
  await sendCommand({ command: {}, type: "foo" }); // This will break when constant changes

  expect(spy).toHaveBeenCalledWith("foo", expect.any(Object));
});
\`\`\`
                    `}
                />
                <Text>
                    We can easily use them in our tests as well. This makes the
                    tests more robust and less likely to break when the
                    production code changes.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// sendCommand.test.ts
it("should log the constant", async () => {
  const spy = jest.spyOn(mySender, "send");
  await sendCommand({ command: {}, type: CommandType.FOO });

  expect(spy).toHaveBeenCalledWith(CommandType.FOO, expect.any(Object));
});
\`\`\`
                    `}
                />
                <Text>
                    <ol start={4}>
                        <li>The test has too many responsibilities</li>
                    </ol>
                </Text>
                <Text>
                    When a test is <em>doing</em> too many things at once it
                    becomes harder to pinpoint what is going wrong when the
                    tests start failing.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
it("should test everything", () => {
  // should set global \`someGlobalValue\` to \`true\`
  const result = doSomething("foo", process.env.BAR); // Relies on local DB

  expect(result).toBe(false);
  expect(myMethod).toHaveBeenCalledWith({ foo: "foo", bar: "bar" });
  expect(myOtherMethod).not.toHaveBeenCalled();
});

it("should test some other thing", () => {
  // Only works when the previous test has been run
  const result = doSomeOtherThing(someGlobalValue, 5);

  expect(result).toBe("foo");
});
\`\`\`
                    `}
                />
                <Text>
                    <div className="mb-4">Tests should be:</div>
                    <ul>
                        <li>
                            <strong>independent</strong> —{" "}
                            <code>
                                it(&ldquo;should not rely on the outcome of
                                another test&rdquo;)
                            </code>
                        </li>
                        <li>
                            <strong>repeatable</strong> —{" "}
                            <code>
                                it(&ldquo;should be runnable in any
                                environment&rdquo;)
                            </code>
                        </li>
                        <li>
                            <strong>self-validating</strong> —{" "}
                            <code>
                                it(&ldquo;should return a clear pass or fail
                                result&rdquo;)
                            </code>
                        </li>
                    </ul>
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// Make sure the tests can run anywhere,
// even without a local DB
jest.mock("myLocalDbAdapter");

describe(doSomething.name, () => {
  it.each\`
    input1   | input2   | expected
    \${"foo"} | \${"bar"} | \${false}
    \${"bar"} | \${"foo"} | \${true}
  \`(
    "should return $expected for $input1 and $input2",
    ({ input1, input2, expected }) => {
      const result = doSomething(input1, input2);

      expect(result).toBe(expected);
    }
  );

  it(\`should call \${myMethod.name}\`, () => {
    doSomething("foo", "bar");

    expect(myMethod).toHaveBeenCalledWith({ foo: "foo", bar: "bar" });
  });

  it(\`should not call \${myOtherMethod.name} when passing "foo" and "bar"\`, () => {
    doSomething("foo", "bar");

    expect(myOtherMethod).not.toHaveBeenCalled();
  });

  it(\`should call \${myOtherMethod.name} when passing "bar" and "foo"\`, () => {
    doSomething("bar", "foo");

    expect(myOtherMethod).toHaveBeenCalledTimes(1);
  });
});

describe(doSomeOtherThing.name, () => {
  it.each\`
    someGlobalValue | expected
    \${true}         | \${"foo"}
    \${false}        | \${"bar"}
  \`(
    "should return $expected when \`someGlobalValue\` is $someGlobalValue",
    ({ expected, $someGlobalValue }) => {
      // No more coupling on the outcome of the previous test
      jest.spyOn(global, "someGlobalValue").mockReturnValue(someGlobalValue);

      const result = doSomeOtherThing(someGlobalValue, 5);

      expect(result).toBe(expected);
    }
  );
});
\`\`\`
                    `}
                />
                <Text>
                    Yes, the test file is significantly longer than the original
                    example but it is easier to follow the intent of each test.
                    And as a bonus, when a test fails you can pin-point the
                    issue much faster.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    🚩 Coverage !== Confidence
                </Text>
                <Text>
                    Hitting a certain percentage of coverage does not mean your
                    software is properly tested.
                </Text>
                <Text>
                    The following code has <strong>80% coverage</strong>, as
                    this seems to be the general (mandatory) coverage goal.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// src/test-me.ts
import { deleteImportantData } from "./utils";

class TestMe {
  private shouldDeleteData: boolean = false;

  constructor(
    public readonly foo: number,
    public readonly bar: string,
    public readonly baz: boolean
  ) {
    if (foo > 10) {
      this.shouldDeleteData = true;
    }
  }

  public importantMethodToTest(): void {
    if (this.shouldDeleteData) {
      deleteImportantData();
    }
  }
}

// src/test-me.test.ts
import { TestMe } from "./test-me";

describe(TestMe.name, () => {
  it("initializes properly", () => {
    const testMe = new TestMe(11, "bar", true);

    expect(testMe.foo).toBe(11);
    expect(testMe.bar).toBe("bar");
    expect(testMe.baz).toBe(true);
  });
});
\`\`\`
                    `}
                />
                <Text>
                    But what are you testing here? Does the JavaScript
                    constructor still work?
                </Text>
            </Section>
            <Section>
                <Text>Have a look at the next example:</Text>
                <CodeBlock
                    code={`
\`\`\`typescript
// src/add.ts
function add(array: number[]) => {
  return array[0] + array[1];
}

// src/add.test.ts
describe(add.name, () => {
  it("should add two numbers", () => {
    const result = add([1, 2]);

    expect(result).toBe(3);
  });
});
\`\`\`
                    `}
                />
                <Text>
                    And boom, you have <strong>100% coverage</strong>! But you
                    are missing out on testing the edge cases. What if the array
                    is empty? What if the array only has one element?
                </Text>
                <Text>
                    Setting a (mandatory) coverage percentage is a ~stupid~ bad
                    idea. More often than not this will lead to poorer tests
                    just for the sake of increasing the coverage.
                </Text>
                <Text>
                    I would not go as far as to{" "}
                    <Link
                        href="https://www.youtube.com/watch?v=ZGKGb109-I4"
                        target="_blank"
                    >
                        not write any unit tests
                    </Link>
                    , just be{" "}
                    <Link
                        href="https://www.youtube.com/watch?v=IInciWyU74U"
                        target="_blank"
                    >
                        thoughtful about what you are testing
                    </Link>
                    .
                </Text>
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Using specialized equipment
                </Text>
                <Text>
                    Being new in testing, or development for that matter, can be
                    overwhelming. And although you can{" "}
                    <Link
                        href="https://www.jetbrains.com/help/idea/generate-tests.html"
                        target="_blank"
                    >
                        generate your tests with AI
                    </Link>
                    , I think there are other tools out there which enable you
                    to write better tests yourself.
                </Text>
                <Text>
                    The list below is not exhaustive, but it will give you a
                    good starting point.
                </Text>
            </Section>
        </>
    );
}
