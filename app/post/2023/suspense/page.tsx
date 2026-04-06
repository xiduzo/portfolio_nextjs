import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import { CodeBlock } from '@/components/custom/code-block';
import { Image } from '@/components/custom/image';
import { Hero } from '@/components/custom/hero';
import { Quote } from '@/components/custom/quote';
import { Links } from '@/components/custom/links';
import { TLDR } from '@/components/custom/tldr';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type BlogPostSeo,
  blogPostJsonLdFromSeo,
  blogPostMetadata,
} from '@/lib/schema';

const SEO: BlogPostSeo = {
  title: 'React Suspense explained — beyond the magic',
  description:
    'Everyone calls Suspense “magic.” It is not. A React-focused deep dive into how Suspense really works—concurrency, boundaries, and why it is better thought of as structured promise handling than mysticism.',
  path: '/post/2023/suspense',
  publishedTime: '2023-11-21',
  openGraphDescription:
    'How React Suspense works under the hood: mental models, pitfalls, and why “magic” is a lazy explanation.',
};

export const metadata = blogPostMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostJsonLdFromSeo(SEO)} />
      <Hero
        title='<Suspense />'
        publishDate='Nov 21 2023'
        emoji='1FA84'
        className='bg-sky-300 dark:bg-sky-900'
        subtitle='Unravelling the magic from React'
        readTime={12}
      />
      <TLDR
        lines={[
          'Everyone calls Suspense "magic." It is not. It is a fancy try/catch block for React components.',
          'When a component throws a Promise, Suspense catches it and shows your fallback until that promise resolves.',
          'Powerful for async data fetching and lazy loading — but it adds complexity, so use it where it earns its place.',
        ]}
      />
      <Section>
        <Text>
          While trying to answer{' '}
          <Link
            target='_blank'
            href='https://stackoverflow.com/q/77479989/4655177'
          >
            this question on StackOverflow
          </Link>
          , I realized that I did not know enough about the workings of{' '}
          <code>Suspense</code> myself to give a good answer. So I decided to do
          some research and write this article.
        </Text>
      </Section>
      <Quote
        cite='React documentation'
        link='https://react.dev/reference/react/Suspense'
      >
        <strong>Suspense</strong>,
        <br />
        lets you display a fallback until its children have finished loading
      </Quote>
      <Section>
        <CodeBlock
          code={`
\`\`\`tsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
\`\`\`
                    `}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          But how does it work?
        </Text>
        <Text>
          Neat, but <em>how</em> does it actually work? <em>How</em> does{' '}
          <code>Suspense</code> know when to show the fallback and when to show
          the child component?
        </Text>
        <Text>
          When I asked around I just got the answer that <em>“it is magic”</em>.
        </Text>
        <Text>
          But I do not like magic code, so let&apos;s find out how it works.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          TL;DR
        </Text>
        <Text>
          <code>Suspense</code> acts as a fancy <code>try/catch</code> block.
        </Text>
        <Text>
          <code>Suspense</code> will <em>try</em> to render your component and
          whenever a <code>Promise</code> is being thrown it will <em>catch</em>{' '}
          it and render the fallback component until the promise resolves.
        </Text>
        <CodeBlock
          code={`
\`\`\`tsx
<Suspense fallback={{ /* Catch */ }}>
  {/* Try */}
</Suspense>
\`\`\`
                    `}
        />
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          How people perceive the Suspense component
        </Text>
        <Image
          src='/suspense/magic.gif'
          alt="A meme showing a man waving his hand an saying 'magic'"
          width={400}
          height={400}
          className='mx-auto'
        />
      </Section>
      <Section>
        <Text>Hey, you made it this far!</Text>
        <Text>
          That means you want to know how things actually work instead of just
          accepting the magic. Good.
        </Text>
      </Section>
      <Section>
        <Text>
          As seen in the TL;DR - whenever <em>something</em> throws a promise
          from within the <code>Suspense</code> component, it will render the
          fallback component until the promise resolves.
        </Text>
        <CodeBlock
          code={`
\`\`\`tsx
function ComponentWhichThrows() {
  throw new Promise(() => {}); // This will trigger the fallback state // [!code highlight]

  return "hi there";
}

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading....</div>}>
        <ComponentWhichThrows />
      </Suspense>
    </div>
  );
}
\`\`\`
                    `}
        />
      </Section>
      <Section>
        <Text>
          Simple as that, A fancy <code>try/catch</code> for React.
        </Text>
        <Text>
          Let’s see if we can make it a bit more interesting and make an async
          call using suspense.
        </Text>
        <Text>
          First you’ll need to create something you’ll need to wait for. In this
          example you can create some fake data fetching function as this is a
          common use case. In reality, <code>Suspense</code> can work with any
          asynchronous operation.
        </Text>
        <CodeBlock
          code={`
\`\`\`javascript
export function fakeApi(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello " + name);
    }, 2000);
  });
}
\`\`\`
`}
        />
        <Text>
          To work with <code>Suspense</code>, you need a way to wrap a promise
          so it can be thrown. Here is a minimal implementation of{' '}
          <Link target='_blank' href='https://react.dev/reference/react/use'>
            React&apos;s use hook
          </Link>
          <sup>1</sup>:
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>
              As of writing this article, Reacts `use` hook is still
              experimental and not available in the stable release.
            </li>
          </ol>
        </Text>
        <CodeBlock
          code={`
\`\`\`javascript
// This is a poor-mans implementation of Reacts use hook
// please don't use this in production
export function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
\`\`\`
`}
        />
        <Text>Then use it inside your component:</Text>
        <CodeBlock
          code={`
\`\`\`jsx
function YourComponent() {
  const data = use(fakeApi("xiduzo")); // [!code highlight]

  return <div>{data}</div>;
}

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading user</div>}>
        <YourComponent />
      </Suspense>
    </div>
  );
}
\`\`\`
`}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Why would you use &lt;Suspense/&gt;
        </Text>
        <Text>
          <code>Suspense</code> is a great way to handle asynchronous data
          fetching. It is a great alternative to{' '}
          <Link
            target='_blank'
            href='https://react.dev/reference/react/useEffect#fetching-data-with-effects'
          >
            the traditional way
          </Link>{' '}
          of handling data fetching in React.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          More than lazy loading
        </Text>
        <Text>
          <code>Suspense</code> was initially added to React to support{' '}
          <Link
            target='_blank'
            href='https://legacy.reactjs.org/docs/code-splitting.html#reactlazy'
          >
            lazy loading of components
          </Link>
          . But currently can also be used to await data fetching and adding of{' '}
          <Link
            target='_blank'
            href='https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary'
          >
            error boundaries
          </Link>
          .
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          User Experience (UX)
        </Text>
        <Text>
          Show the user something while waiting for data to load. It is also possible
          to{' '}
          <Link
            target='_blank'
            href='https://codesandbox.io/s/66nw34?file=/ArtistPage.js'
          >
            nest Suspense components
          </Link>{' '}
          for a more fine-grained experience.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          Be a step ahead
        </Text>
        <Text>
          Even though <code>Suspense</code> is still experimental, libraries
          like{' '}
          <Link
            target='_blank'
            href='https://relay.dev/docs/migration-and-compatibility/suspense-compatibility/'
          >
            Relay
          </Link>
          ,{' '}
          <Link target='_blank' href='https://swr.vercel.app/docs/suspense'>
            SWR
          </Link>{' '}
          or{' '}
          <Link
            target='_blank'
            href='https://tanstack.com/query/latest/docs/react/guides/suspense'
          >
            @tanstack/react-query
          </Link>{' '}
          have added support for it.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Why wouldn’t you use &lt;Suspense/&gt;
        </Text>
        <Text>
          <code>Suspense</code> adds another layer of abstraction to your code.
          This can make it harder to understand what is going on.
        </Text>
        <Text>
          If your team is already comfortable with existing patterns for data
          fetching, the introduction of <code>Suspense</code> might require
          additional training and adjustment.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          More than lazy loading
        </Text>
        <Text>
          For simple applications with straightforward data fetching
          requirements, using <code>Suspense</code> might introduce unnecessary
          complexity. In such cases, simpler solutions like data fetching
          libraries might be more suitable.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          User Experience (UX)
        </Text>
        <Text>
          In scenarios where finer control over loading states or error handling
          is crucial, a more manual approach using traditional patterns like{' '}
          <code>useEffect</code> and <code>useState</code> might be preferred
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          Be a step ahead
        </Text>
        <Text>
          The whole concept of <code>Suspense</code> might also get overshadowed
          by{' '}
          <Link
            target='_blank'
            href='https://react.dev/reference/react/use-server'
          >
            server components
          </Link>{' '}
          in the future. Where{' '}
          <Link
            target='_blank'
            href='https://react.dev/reference/react/use#caveats'
          >
            the documentation
          </Link>{' '}
          mentions:{' '}
          <em>
            When fetching data in a Server Component, prefer async and await
            over use
          </em>
          .
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Conclusion
        </Text>
        <Text>
          <code>Suspense</code> can be a powerful tool in your toolbox,
          especially if you truly understand how it functions.
        </Text>
        <Text>
          Do <strong>not</strong> treat it as your new shiny hammer and start
          hitting everything with it. Use it wisely and it will be a great
          addition to your work.
        </Text>
      </Section>
      <aside>
        <Links
          title='Unmentioned resources'
          links={[
            ['https://codesandbox.io/s/ymcj43', 'Reacts codesandbox example'],
            [
              'https://17.reactjs.org/docs/concurrent-mode-suspense.html',
              'React 17 documentation on suspense',
            ],
            [
              'https://stackoverflow.com/q/74196656/4655177',
              'Another stackoverflow question',
            ],
            [
              'https://stackoverflow.com/a/73356890/4655177',
              'And another stackoverflow question',
            ],
            [
              'https://blog.logrocket.com/data-fetching-react-suspense/',
              'Logrocket blog post',
            ],
          ]}
        />
      </aside>
    </>
  );
}
