import Alert from '@/components/custom/alert';
import { Hero } from '@/components/custom/hero';
import { Quote } from '@/components/custom/quote';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { TLDR } from '@/components/custom/tldr';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Hero
        title='From instructions to intent'
        publishDate='Mar 13 2026'
        emoji='1F9E0'
        className='bg-violet-300 dark:bg-violet-900'
        subtitle='Working agentically with AI'
        readTime={12}
      />
      <TLDR
        lines={[
          'There is no single "correct" way to work with AI — there is a spectrum of workflows, each with different strengths and failure modes.',
          'Two dimensions define any workflow: width (how much freedom you give the AI to interpret) and depth (how many steps it takes on its own).',
          'Depth should be earned through narrowness. The more autonomy you give, the clearer your intent must be upfront.',
          'The higher up the stack you go, the more your job shifts from doing to designing — framing problems, setting constraints, reviewing outcomes.',
        ]}
      />
      <Section>
        <Text>
          AI is not going to replace thinking. But it <em>is</em> changing what
          kind of thinking you need to do.
        </Text>
        <Text>
          Over the past year I&rsquo;ve been spending a lot of time figuring out
          how to actually work well with AI — not just using it as a smarter
          autocomplete, but genuinely integrating it into how I build things. The
          further I got, the more I realized the question is never{' '}
          <em>&ldquo;which AI tool should I use?&rdquo;</em> but rather{' '}
          <em>&ldquo;which workflow fits this task?&rdquo;</em>
        </Text>
        <Text>
          This post is an attempt to lay that out clearly. No hype, no
          doom — just a practical map of where we are.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Two dimensions that explain everything
        </Text>
        <Text>
          Most of the confusion about AI workflows comes down to two independent
          properties:{' '}
          <strong>width</strong> and <strong>depth</strong>.
        </Text>
        <Text>
          <strong>Width</strong> is how much freedom you give the AI to
          interpret your intent. A wide workflow means many valid paths exist —
          you&rsquo;re vague, the AI fills in the blanks, and you correct after
          the fact. A narrow workflow means you&rsquo;ve bounded the problem so
          tightly there&rsquo;s only one reasonable interpretation.
        </Text>
        <Text>
          <strong>Depth</strong> is how many steps the AI takes on its own
          before you intervene. Shallow means one shot and you&rsquo;re back in
          control. Deep means it plans, executes, evaluates, and iterates — and
          you might not see the intermediate steps.
        </Text>
        <Text>
          Here&rsquo;s the key insight, and I think it&rsquo;s worth
          internalizing:{' '}
        </Text>
      </Section>
      <Quote cite='From instructions to intent'>
        Depth should be earned through narrowness.
      </Quote>
      <Section>
        <Text>
          The more autonomous steps you let the AI take, the higher the cost of
          a wrong interpretation compounds. If you give an agent a vague goal
          and let it run for 40 steps, you might not realize it went sideways
          until the end — and by then you&rsquo;ve paid for all those tokens and
          lost the time.
        </Text>
        <Text>
          This is not a knock on autonomous agents. It&rsquo;s just the physics
          of the thing.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          The four workflows
        </Text>
        <Text>
          Think of these as layers. Each one builds on the previous. To use the
          higher ones well, you need to understand the lower ones.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          1. Prompt engineering — wide &amp; shallow
        </Text>
        <Text>
          This is where most people started, and where a lot of daily work still
          lives. You prompt, AI responds, you copy-paste and adapt. You are the
          integration layer.
        </Text>
        <Text>
          It sounds basic, but that&rsquo;s the point. For exploring ideas,
          getting unstuck, drafting text, or learning a new domain — this is
          fast, low-overhead, and surprisingly powerful. The context is
          short-lived and that&rsquo;s fine.
        </Text>
        <Text>
          Where it breaks down is when your task grows larger than a single
          exchange, or when you need to share the output with a team.
        </Text>
        <Alert icon='AlertCircle' intent='warning'>
          <Text>
            Key risk: mistaking good wording for good thinking. A well-phrased
            prompt does not guarantee a correct result.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          2. AI agents — wide &amp; deep
        </Text>
        <Text>
          Agents are what happens when you give an LLM tools. It can now search,
          write code, read files, call APIs, and iterate across multiple steps.
          You describe a goal, the AI figures out the path.
        </Text>
        <Text>
          This is genuinely useful for research and synthesis, code scaffolding,
          refactoring, and any task where the goal is clear but the steps
          aren&rsquo;t. It reduces the busywork. It starts to feel like
          delegation.
        </Text>
        <Text>
          The catch is that intermediate reasoning is often invisible. The AI
          sounds confident even when the goal was under-specified. Mistakes can
          compound silently across steps before surfacing.
        </Text>
        <Alert icon='AlertCircle' intent='warning'>
          <Text>
            Key risk: without clear intent, agents optimize for{' '}
            <em>something</em> — just not always the right thing.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          3. Spec-driven development — narrow &amp; shallow-to-deep
        </Text>
        <Text>
          This is where things get interesting for teams. Instead of prompting,
          you write a <em>spec</em>: goals, constraints, assumptions, success
          criteria. The AI executes against the spec. The output is validated
          against the same spec. Most of the thinking happens{' '}
          <em>before</em> execution.
        </Text>
        <Text>
          Specs are opinionated Markdown documents that become shared artifacts.
          Done well, they create a shared understanding across roles — between
          humans, and between humans and AI. Ambiguity surfaces early, where
          it&rsquo;s cheap to fix, rather than late, where it&rsquo;s not.
        </Text>
        <Text>
          If you&rsquo;ve worked in an Agile environment, this should not sound
          foreign. It&rsquo;s essentially the same discipline applied to AI
          collaboration.
        </Text>
        <Text>
          The upfront cost is real. It takes more time, more domain expertise,
          and more willingness to think carefully about what you{' '}
          <em>don&rsquo;t</em> want. But it pays off rapidly as complexity
          grows.
        </Text>
        <Alert icon='AlertCircle' intent='warning'>
          <Text>
            Key risk: specs encode what you believe to be true — including your
            blind spots.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          4. Agentic AI — narrow &amp; deep
        </Text>
        <Text>
          At this level, you are not prompting or delegating tasks — you are{' '}
          <em>designing systems</em>. AI plans, executes, evaluates its outputs,
          and iterates. Humans define intent, constraints, and escalation paths.
          The AI does the rest.
        </Text>
        <Text>
          This is the right tool for repetitive but complex workflows,
          cross-tool integrations, and situations where process consistency
          matters more than individual output. Think automated documentation
          pipelines, recurring data processing, or multi-step deployment
          workflows.
        </Text>
        <Text>
          The problems become obvious when constraints are unclear, oversight is
          implicit rather than designed, or when you start treating autonomy as
          a way to offload accountability instead of amplifying it.
        </Text>
        <Alert icon='AlertCircle' intent='warning'>
          <Text>
            Key risk: confusing autonomy with accountability. The AI can take
            the action; you are still responsible for the outcome.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Picking the right workflow
        </Text>
        <Text>
          A quick heuristic based on what you&rsquo;re trying to do:
        </Text>
        <Text as='section'>
          <ul>
            <li>
              Exploring ideas or one-off tasks →{' '}
              <strong>prompt engineering</strong>
            </li>
            <li>
              Complex execution with a clear goal →{' '}
              <strong>agents</strong>
            </li>
            <li>
              Cross-team collaboration or correctness-critical work →{' '}
              <strong>spec-driven</strong>
            </li>
            <li>
              Repeated, complex workflows at scale →{' '}
              <strong>agentic AI</strong>
            </li>
          </ul>
        </Text>
        <Text>
          If a workflow feels frustrating, it&rsquo;s usually a sign you&rsquo;re
          using it beyond its natural limits. Not that you are{' '}
          &ldquo;doing AI wrong.&rdquo;
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          What this means for you as a developer
        </Text>
        <Text>
          The shift here is not technical — it&rsquo;s cognitive. The work
          moves from <em>doing</em> toward <em>framing</em>: defining the
          problem clearly, setting constraints, reviewing outcomes, making
          decisions about what good looks like.
        </Text>
        <Text>
          The skills that translate best are the ones you may already have in
          abundance: writing clear requirements, thinking in systems, managing
          context deliberately, and critically evaluating output rather than
          accepting it at face value.
        </Text>
        <Text>
          Context management in particular is underrated. Every model has a
          context window — a finite amount of information it can hold at once.
          Working well with AI means being intentional about what you put in and
          what you leave out. Signal vs. noise. The same way you would write a
          good PR description.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          The risks worth taking seriously
        </Text>
        <Text>
          I want to end on this, because I think it gets glossed over.
        </Text>
        <Text>
          <strong>Over-delegation</strong> is a real problem. If you stop
          reasoning through a problem because the AI will do it for you, you
          atrophy the skills that make you good at your job — and that make you
          good at <em>reviewing</em> AI output.
        </Text>
        <Text>
          <strong>Hallucinated confidence</strong> is a real problem. LLMs
          produce fluent, plausible text whether or not they are correct. The
          output looks right even when it isn&rsquo;t. This is especially
          dangerous in deep workflows where you review the end result, not the
          intermediate steps.
        </Text>
        <Text>
          <strong>Context loss</strong> is a real problem. In teams, specs and
          shared artifacts exist partly to prevent understanding from living only
          inside someone&rsquo;s head (or conversation history). If you
          over-rely on AI-generated context, you can lose the shared
          understanding that makes collaboration work.
        </Text>
        <Text>
          Deep and systematic understanding of your domain — whatever it
          is — remains the baseline. What you need to know drifts over time, but
          you cannot outsource the knowing.
        </Text>
      </Section>
      <Quote cite='From instructions to intent'>
        AI may gain autonomy, but responsibility and accountability always
        remain with humans.
      </Quote>
    </>
  );
}
