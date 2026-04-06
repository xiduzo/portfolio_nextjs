import Alert from '@/components/custom/alert';
import { CodeBlock } from '@/components/custom/code-block';
import { Hero } from '@/components/custom/hero';
import { Quote } from '@/components/custom/quote';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { TLDR } from '@/components/custom/tldr';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing — The Discipline That Makes Everything Else Click',
  description:
    'Writing code is the easy part. Most testing problems come down to four habits. Good tools and one simple pattern will get you most of the way there.',
  alternates: { canonical: '/post/2024/testing' },
  openGraph: {
    type: 'article',
    publishedTime: '2024-04-04',
    authors: ['Sander Boer'],
  },
};

export default function Page() {
  return (
    <>
      <Hero
        title='Testing'
        publishDate='Apr 4 2024'
        emoji='1F9EA'
        className='bg-red-300 dark:bg-red-900'
        subtitle='The discipline that makes everything else click'
        readTime={22}
      />
      <TLDR
        lines={[
          'Writing code is the easy part. Making sure it still works three months later — that is the engineering part.',
          'Most testing problems come down to four habits: no test runner, tests buried in a separate folder, messy test code, and chasing coverage numbers that mean nothing.',
          'Good tools (Vitest, Zod, testing-library) and one simple pattern (Arrange-Act-Assert) will get you most of the way there.',
        ]}
      />
      <Section>
        <Text>
          Although there are{' '}
          <Link
            href='https://medium.com/codex/types-of-testing-de4cdd98df77'
            target='_blank'
          >
            many forms of testing
          </Link>
          , in this article I will focus on unit testing — in TypeScript.
        </Text>
        <Text>
          I believe they are the easiest to setup, easy to write/maintain and
          when done properly{' '}
          <Link
            href='https://www.youtube.com/watch?v=QFCHSEHgqFE'
            target='_blank'
          >
            end-to-end testing may become obsolete
          </Link>
          .
        </Text>
      </Section>
      <Section>
        <Alert icon='AlertCircle' intent='info'>
          <Text>
            The examples in this article are for testing in JavaScript
            (TypeScript). However, the principles apply to your favorite
            tools too.
          </Text>
        </Alert>
      </Section>
      <Quote
        cite='ChatGPT'
        link='https://chat.openai.com/share/97ddf631-1171-4c18-9f70-40e2b6f30e8b'
      >
        Engineers conduct tests and experiments to evaluate the performance,
        safety, and reliability of products or systems. This may involve using
        specialized equipment, conducting simulations, or performing real-world
        trials.
      </Quote>
      <Section>
        <Text as='h2' variant='subheading'>
          The software engineer
        </Text>
        <Text>
          In the physical world, you rely on engineers to be due diligent in
          their work. You would not like to have a bridge collapse because it
          was not tested properly, right?
        </Text>
        <Text>
          So why do I keep running into <em>software engineers</em> who do not
          test their code?
        </Text>
        <Text>
          It is our job that the code we write works as intended, and
          —preferably— keeps on working as intended after changes have been
          made.
        </Text>
        <Text>
          This is, to me, part of the <em>engineering</em> mindset.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Some 🚩🚩🚩🚩
        </Text>
        <Text>
          Every project is different, but these patterns keep showing up — and
          each one is a red flag.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          🚩 No test runner has been setup
        </Text>
        <Text>
          When a project has no test runner, the message to new team members is
          clear: tests are not important here. Why would they bother?
        </Text>
        <Text>
          You need a test runner locally so developers can validate their own
          work — and you need one in CI so nothing slips through when someone
          forgets to run tests before pushing. A minimal GitHub Actions setup
          looks like this:
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
          Now old code cannot break unintentionally — even when someone forgets
          to run tests locally.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          🚩 Tests are treated as second-class citizens
        </Text>
        <Text>
          When tests live in a separate folder, they are out of sight and out of
          mind. No one is nudged to write them.
        </Text>
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
          Place tests next to the code they test. The project should say{' '}
          <em>&ldquo;we care about tests&rdquo;</em> just by its file structure.
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
        <Text as='h3' variant='subheading' size='sm'>
          🚩 Test code is not &ldquo;clean&rdquo;
        </Text>
        <Text>
          Why do you go to great lengths to write clean, maintainable code, but
          throw all of this out of the window when writing tests?
        </Text>
        <Text>
          Before we start this section I would like to define what I consider as{' '}
          <strong>source code</strong>. Source code is all the code which is
          part of the project. This can be broken down into <em>test code</em>{' '}
          and <em>production code</em>.
        </Text>
        <Text>
          Test code should adhere to the same standards of quality as the
          production code it is testing.
        </Text>
        <Quote
          cite='Clean Code: A Handbook of Agile Software Craftsmanship'
          link='https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
        >
          Indeed, the ratio of time spent reading versus writing is well over 10
          to 1. We are constantly reading old code as part of the effort to
          write new code. Therefore, making it easy to read makes it easier to
          write.
        </Quote>
        <Quote
          cite=' Refactoring: Improving the Design of Existing Code'
          link='https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599'
        >
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </Quote>
      </Section>
      <Section>
        <Text>
          Some indicators I have found that you throw out clean code principles
          when writing tests:
        </Text>
        <Text className='mt-28' as='ol'>
          <li>Ignoring test files in your linting</li>
        </Text>
        <Text>
          Sure, this makes your life easier in the short term. But over the
          lifespan of a project you will end up with a lot of unmaintainable
          tests (read technical debt) that you have created yourself
          unnecessarily.
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
        <Text as='ol' start={2}>
          <li>Making the test (file) a puzzle by itself</li>
        </Text>
        <Text>
          Tests can be considered documentation itself when written properly.
        </Text>
        <Text>
          Why make it harder for the next person, which is most likely going to
          be you, to understand what is going on?
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
          Act like you are writing <em>normal</em> code.
        </Text>
        <Text>
          This makes it easier to skim over the tests to see what is being
          tested and what the expected outcome is.
        </Text>
        <Text>
          The{' '}
          <Link
            href='https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/'
            target='_blank'
          >
            Arrange, Act, Assert
          </Link>{' '}
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
  const distance = calculateDistance(pointA, pointB);
  const result = plotCurve(distance, { step: 3 });

  // Assert
  expect(result).toEqual(expectedCurve);
});
\`\`\`
                    `}
        />
        <Text as='ol' start={3}>
          <li>
            Not using <code>constant</code>, <code>enums</code>,{' '}
            <code>types</code> or <code>interfaces</code> defined in your
            production code
          </li>
        </Text>
        <Text>
          In our <em>production code</em> we tend use those to try and make the
          code more self-explanatory.
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
          We can easily use them in our tests as well. This makes the tests more
          robust and less likely to break when the production code changes.
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
        <Text as='ol' start={4}>
          <li>The test has too many responsibilities</li>
        </Text>
        <Text>
          When a test is <em>doing</em> too many things at once it becomes
          harder to pinpoint what is going wrong when the tests start failing.
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
        <Text as='section'>
          <div className='mb-4'>Tests should be:</div>
          <ul>
            <li>
              <strong>independent</strong> —{' '}
              <code>
                it(&ldquo;should not rely on the outcome of another test&rdquo;)
              </code>
            </li>
            <li>
              <strong>repeatable</strong> —{' '}
              <code>
                it(&ldquo;should be runnable in any environment&rdquo;)
              </code>
            </li>
            <li>
              <strong>self-validating</strong> —{' '}
              <code>
                it(&ldquo;should return a clear pass or fail result&rdquo;)
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
          Yes, the test file is significantly longer than the original example
          but it is easier to follow the intent of each test. And as a bonus,
          when a test fails you can pin-point the issue much faster.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          🚩 Coverage !== Confidence
        </Text>
        <Text>
          Hitting a certain percentage of coverage does not mean your software
          is properly tested.
        </Text>
        <Text>
          The following code has <strong>80% coverage</strong>, as this seems to
          be the general (mandatory) coverage goal.
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
          But what are you testing here? Does the JavaScript constructor still
          work?
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
          And boom, you have <strong>100% coverage</strong>! But you are missing
          out on testing the edge cases. What if the array is empty? What if the
          array only has one element?
        </Text>
        <Text>
          Setting a (mandatory) coverage percentage is a <del>stupid</del><ins>bad</ins>{" "}
          idea. More often than not this will lead to poorer tests just for the
          sake of increasing the coverage.
        </Text>
        <Text>
          I would not go as far as to{' '}
          <Link
            href='https://www.youtube.com/watch?v=ZGKGb109-I4'
            target='_blank'
          >
            not write any unit tests
          </Link>
          , just be{' '}
          <Link
            href='https://www.youtube.com/watch?v=IInciWyU74U'
            target='_blank'
          >
            thoughtful about what you are testing
          </Link>
          .
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Using specialized equipment
        </Text>
        <Text>
          Being new in testing, or development for that matter, can be
          overwhelming. And although you can{' '}
          <Link
            href='https://www.jetbrains.com/help/idea/generate-tests.html'
            target='_blank'
          >
            generate your tests with AI
          </Link>
          , I think there are other tools out there which enable you to write
          better tests yourself.
        </Text>
        <Text>
          The list below is not exhaustive, but it will give you a good starting
          point.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Build for speed
        </Text>
        <Text>
          Time moves on, and so do our tools. Most of us do not use{' '}
          <Link target='_blank' href='https://www.chaijs.com/'>
            chai
          </Link>{' '}
          or{' '}
          <Link target='_blank' href='https://mochajs.org/'>
            mocha
          </Link>{' '}
          anymore to write and run our tests. It is quite common to see{' '}
          <Link target='_blank' href='https://jestjs.io/'>
            jest
          </Link>{' '}
          being the work-horse nowadays.
        </Text>
        <Quote
          cite='Clean Code: A Handbook of Agile Software Craftsmanship'
          link='https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
        >
          Tests should be fast. They should run quickly. When tests run slow,
          you won’t want to run them frequently. If you don’t run them
          frequently, you won’t find problems early enough to fix them easily.
          You won’t feel as free to clean up the code. Eventually, the code will
          begin to rot.
        </Quote>
        <Text>
          To go even faster, use{' '}
          <Link target='_blank' href='https://vitest.dev/'>
            Vitest
          </Link>{' '}
          as a drop-in replacement for Jest. This is especially noticeable once
          your test suite grows.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Validation
        </Text>
        <Text>
          A common way your code can break is when the data you receive is not
          what you expect. You should treat all external data as untrusted.
        </Text>
        <Text>Take this common pattern:</Text>
        <CodeBlock
          code={`
\`\`\`typescript
fetch("https://api.example.com")
  .then((response) => response.json())
  .then((data) => {
    if (!data.property) {
      throw new Error("Property is missing");
    }

    if (typeof data.anotherThing !== "number") {
      throw new Error("Another thing is not a number");
    }

    // ... etc

    return data as MyType;
  })
  .catch((error) => {
    // Error handling
  });
\`\`\`
                    `}
        />
        <Text>
          You can write a lot of safeguards and unit tests to validate the data
          you receive is of <code>MyType</code> otherwise it should throw an
          error.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
describe("fetchData", () => {
  it("should throw an error when \`property\` is missing", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve({}),
    });

    expect(fetchData()).rejects.toThrow("Property is missing");
  });

  it("should throw an error when \`anotherThing\` is not a number", () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve({ property: "foo", anotherThing: "bar" }),
    });

    expect(fetchData()).rejects.toThrow("Another thing is not a number");
  });

  // ... etc
});
\`\`\`
                    `}
        />
        <Text>
          Or, I would advice that, you can use a schema validator like{' '}
          <Link target='_blank' href='https://zod.dev/'>
            zod
          </Link>{' '}
          or{' '}
          <Link target='_blank' href='https://github.com/jquense/yup'>
            yup
          </Link>{' '}
          to parse and validate the data you receive.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { z } from "zod";

const MyType = z.object({
  property: z.string(),
  anotherThing: z.number(),
});

fetch("https://api.example.com")
  .then((response) => response.json())
  .then((data) => MyType.parse(data))
  .catch((error) => {
    // Error handling
  });
\`\`\`
                    `}
        />
        <Text>
          This will save a lot of effort in validating the data itself and, in
          my opinion, does not require any unit tests besides the error handling
          anymore.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Passing objects
        </Text>
        <Text>
          Writing clean tests can become tedious when you have to pass a whole
          object while your tests only need one of the properties.
        </Text>
        <Text>What is seen happening a lot is the following:</Text>
        <CodeBlock
          code={`
\`\`\`typescript
describe("Annoying boilerplate", () => {
  it("can type-cast to make the test work", () => {
    const result = testMe({
      property: "foo",
    } as any as MyType);

    expect(result).toBe(true);
  });

  it("can @ts-ignore to make the test work", () => {
    // @ts-ignore
    const result = testMe({
      property: "foo",
    });

    expect(result).toBe(true);
  });

  it("Can put the whole object to make the test work", () => {
    const result = testMe({
      property: "foo", // Test only requires this property-
      nestedProperty: {
        anotherProperty: "bar",
      },
    });

    expect(result).toBe(true);
  });
});
\`\`\`
                    `}
        />
        <Text>
          This works fine — until you start changing{' '}
          <code>MyType</code>. A solution I used before was to make use of the{' '}
          <Link
            target='_blank'
            href='https://refactoring.guru/design-patterns/builder'
          >
            builder pattern
          </Link>{' '}
          to generate the objects for the tests.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
class Builder<T> {
  constructor(protected readonly obj: T) {}

  public build() {
    return this.obj;
  }
}

class MyTypeBuilder extends Builder<MyType> {
  constructor() {
    super({
      property: "foo",
      nestedProperty: {
        anotherProperty: "bar",
      },
    });
  }

  public withProperty(property: string) {
    this.obj.property = property;
    return this;
  }

  public withNestedProperty(nestedProperty: { anotherProperty: string }) {
    this.obj.nestedProperty = nestedProperty;
    return this;
  }

  public withExplicitCustomState() {
    this.obj.property = "baz";
    this.obj.nestedProperty = { anotherProperty: "boo" };
    return this;
  }
}
\`\`\`
                    `}
        />
        <Text>
          This allows you to create a <code>MyType</code> object with default
          values and override them when needed. This can be used in the
          following ways:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
describe("Building your tests", () => {
  it("can pass the default values", () => {
    const result = testMe(new MyTestBuilder().build());

    expect(result).toBe(true);
  });

  it("can set specific properties for your test", () => {
    const result = testMe(new MyTestBuilder().withProperty("bar").build());

    expect(result).toBe(false);
  });

  it("can set multiple properties", () => {
    const result = testMe(
      new MyTestBuilder()
        .withProperty("bar")
        .withNestedProperty({ anotherProperty: "foo" })
        .build()
    );

    expect(result).toBe(false);
  });

  it("can set a custom explicit state", () => {
    const result = testMe(
      new MyTestBuilder().withExplicitCustomState().build()
    );

    expect(result).toBe(false);
  });
});
\`\`\`
                    `}
        />
        <Text>
          But sometimes you just need to <em>force something into a space</em>.{' '}
          <Link
            target='_blank'
            href='https://www.npmjs.com/package/@total-typescript/shoehorn'
          >
            @total-typescript/shoehorn
          </Link>{' '}
          is the tool you are looking for. It will allow you to pass partial
          data in tests while keeping TypeScript happy.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
import { fromPartial } from "@total-typescript/shoehorn";

describe("No more boilerplate", () => {
  it("can pass partial data", () => {
    const result = new MyTest(fromPartial({ property: "foo" }));

    expect(result).toBe(true);
  });
});
\`\`\`
                    `}
        />
        <Text>
          This removes all the boilerplate code and allows you to focus on the
          actual test while still remaining completely type-safe.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          UI testing
        </Text>
        <Text>
          Working with TypeScript, there is a good chance you will need to test
          some frontend code as well.
        </Text>
        <Text>
          You might be familiar with tools such as{' '}
          <Link
            target='_blank'
            href='https://storybook.js.org/docs/writing-tests/test-runner'
          >
            storybook
          </Link>
          ,{' '}
          <Link target='_blank' href='https://www.cypress.io/'>
            cypress
          </Link>{' '}
          or{' '}
          <Link target='_blank' href='https://playwright.dev/'>
            playwright
          </Link>
          .
        </Text>
        <Text>
          These tools are powerful in their own right, but I think they are
          bloatware when writing unit tests.
        </Text>
        <Text>
          <Link target='_blank' href='https://playwright.dev/'>
            @testing-library
          </Link>{' '}
          are “simple and complete testing utilities that encourage good testing
          practices” which allow you to test the DOM.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Code coverage
        </Text>
        <Text>
          Although I am against setting coverage targets, it is valuable to know
          what parts of your code are tested and which are not.
        </Text>
        <Text>
          <Link target='_blank' href='https://about.codecov.io/'>
            Codecov
          </Link>{' '}
          or{' '}
          <Link
            target='_blank'
            href='https://www.sonarsource.com/products/sonarqube/'
          >
            Sonarqube
          </Link>{' '}
          can give you these insights. You can use it to make educated decisions
          on the state of your codebase and determine where to focus your
          testing efforts.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Conducting simulations
        </Text>
        <Text>
          The beauty of testing is that you can mock (simulate) almost
          everything. This allows you to put your system under stress and force
          it into states that are hard(er) to reproduce in real life.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const fetchData = async (triesLeft = 1) => {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    const parsed = MyType.parse(data);

    saveMyData(parsed);
  } catch (error) {
    if (triesLeft > 0) {
      return fetchData(triesLeft - 1);
    }
    // Error handling
  }
};

describe("simulate your software", () => {
  it("can throw errors", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));

    await fetchData(0);

    expect(saveMyData).not.toHaveBeenCalled();
  });

  it("can pass unexpected inputs", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve({ foo: "bar", bar: "baz" }),
    });

    await fetchData(0);

    expect(saveMyData).not.toHaveBeenCalled();
  });

  it("can validate retry mechanisms", async () => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce({
        json: () => throw new Error("Network error"),
      })
      .mockResolvedValue ({
        json: () => Promise.resolve({ foo: "bar", bar: 42 }),
      });

    await fetchData(1);

    expect(saveData).toHaveBeenCalledWith({ foo: "bar", bar: 42 });
  });
});
\`\`\`
                    `}
        />
        <Text>
          You can go even deeper by{' '}
          <Link
            target='_blank'
            href='https://www.npmjs.com/package/vitest-mock-extended'
          >
            mocking any interface or object
          </Link>{' '}
          to give you full control over the simulation.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Performing real-world trials
        </Text>
        <Text>
          Testing is great, but if you are conducting unit tests they are placed
          in a vacuum.
        </Text>
        <Text>
          Software does not exist in a vacuum, and{' '}
          <strong>things will break</strong> when placed in the real world. You
          should make sure to have some form of strategy for this.
        </Text>
      </Section>
      <Quote
        cite='Refactoring: Improving the Design of Existing Code'
        link='https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599'
      >
        When you get a bug report, start by writing a unit test that exposes the
        bug.
      </Quote>
    </>
  );
}
