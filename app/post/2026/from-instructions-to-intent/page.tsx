import Alert from '@/components/custom/alert';
import { Hero } from '@/components/custom/hero';
import { Links } from '@/components/custom/links';
import { QuadrantDiagram } from '@/components/custom/quadrant-diagram';
import { Quote } from '@/components/custom/quote';
import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { TLDR } from '@/components/custom/tldr';
import { WidthDepthVisualizer } from '@/components/custom/width-depth-visualizer';
import { WorkflowProgression } from '@/components/custom/workflow-progression';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Hero
        title='From instructions to intent'
        publishDate='Mar 13 2026'
        emoji='2728'
        className='bg-violet-300 dark:bg-violet-900'
        subtitle='Working agentically with AI'
        readTime={12}
      />
      <TLDR
        lines={[
          'There is no single "correct" way to work with AI — there is a spectrum of workflows, each with different strengths and failure modes.',
          'Two dimensions define any workflow: width and depth.',
          'You should "shift up" from doing to designing — framing problems, setting constraints, reviewing outcomes.',
        ]}
      />
      <Section>
        <Text>
          AI is not going to replace thinking. But it <del>is changing</del><ins>has changed</ins> what
          kind of thinking your work actually needs from you.
        </Text>
        <Text>
          If you are a developer, designer, or knowledge worker trying to use AI for real work, not just demos, you have probably felt this: there is no single &ldquo;right&rdquo; way to work with AI, only a messy spectrum of workflows.
        </Text>
        <Text>
          Over the past years I have been figuring out how to integrate AI into how I build things. The further I got, the more I realized the key question is rarely{' '}
          <em>&ldquo;which AI tool should I use?&rdquo;</em> but rather{' '}
          <em>&ldquo;which workflow fits this task?&rdquo;</em>
        </Text>
        <Text size='sm'>
          This post lays out my current map of those workflows. Where they shine, where they break, and how to move from giving instructions to designing intent. No hype, no doom. Just a practical guide you can apply tomorrow.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Context matters
        </Text>
        <Text size="sm" className='italic'>
          pun intended
        </Text>
        <Text>
          No matter which workflow you use, you are always working inside a limited <code>context window</code>, the chunk of conversation and documents your model can &ldquo;see&rdquo; at once (<Link href="https://www.morphllm.com/llm-token-limit" target='_blank'>measured in tokens</Link>). Managing what goes in (signal) and what stays out (noise) quietly shapes what AI can do for you.
        </Text>
        <Text as='h3' size="sm" variant='subheading' className='mt-24'>A shared glossary</Text>
        <Text size='sm' className='italic text-muted-foreground'>
          After all, I built <Link href='https://glosar.io/' target='_blank'>a whole product</Link> around making this kind of shared vocabulary easier.
        </Text>
        <Text size='sm'>
          The rest of this post assumes basic familiarity with terms like <em>LLM</em>, <em>agents</em>, and <em>prompts</em>. If those are fuzzy, skim the table below.
        </Text>
        <Text size='sm'>
          Or jump straight to the workflows and come back later.
        </Text>
        <Table className="max-w-3xl mx-auto mt-12">
          <TableHeader>
            <TableRow>
              <TableHead>Term</TableHead>
              <TableHead>Definition</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Artificial intelligence (AI)</TableCell>
              <TableCell>
                AI is the ability of computer systems to perform tasks that normally require human intelligence, such as learning, reasoning, and decision-making.<br /><br />
                <Link href='https://www.ibm.com/think/topics/artificial-intelligence' target='_blank'>Learn more</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Models</TableCell>
              <TableCell>
                An AI model is a trained program that recognizes patterns in data to make predictions or generate outputs.<br /><br />
                <Link href='https://www.ibm.com/think/topics/ai-model' target='_blank'>Learn more</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Large Language Model (LLM)</TableCell>
              <TableCell>
                LLMs are AI systems trained on large amounts of text to understand and generate <em>human-like</em> language.<br /><br />
                <Link href='https://www.ibm.com/think/topics/large-language-models' target='_blank'>Learn more</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Agents</TableCell>
              <TableCell>
                AI agents are autonomous systems that use AI models to perform tasks and make decisions with little or no human supervision.<br /><br />
                <Link href='https://www.ibm.com/think/topics/ai-agents' target='_blank'>Learn more</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prompt</TableCell>
              <TableCell>
                A prompt is an instruction or input given to an AI to elicit a specific response or action.<br /><br />
                <Link href='https://www.ibm.com/think/topics/prompt-engineering' target='_blank'>Learn more</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          From copy-🍝 to agentic AI
        </Text>
        <Text>
          <u>There is no <strong>one</strong> correct way to work with AI</u> &lt;&lt;period&gt;&gt;
        </Text>
        <Text>
          Instead, there is a range of workflows, each with different strengths, risks and &ldquo;ideal&rdquo; use cases. Understanding them helps you pick the right approach for the task at hand.
        </Text>
        <Text>
          Over time I have come to see that working with LLMs boils down to two dimensions: <code>width</code> and <code>depth</code>. We will look at four workflows along that spectrum: prompt engineering, AI agents, spec-driven development, and agentic systems.
        </Text>
        <Text size='sm'>
          Each building on the previous one.
        </Text>
        <QuadrantDiagram />
        <Text as="h3" className='mt-12'>
          Width
        </Text>
        <Text size='sm'>
          How much ambiguity is allowed and how many valid paths exist at any moment.
        </Text>
        <Table className="max-w-3xl mx-auto mb-12 mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>A <code>wide</code> workflow</TableHead>
              <TableHead>A <code>narrow</code> workflow</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                Many acceptable interpretations
              </TableCell>
              <TableCell>
                Few valid interpretations
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Vague or flexible intent
              </TableCell>
              <TableCell>
                Intent is explicit and constrained
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                AI has room to <strong>&quot;fill in the blanks&quot;</strong>
              </TableCell>
              <TableCell>
                AI freedom is bounded
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Humans correct <em>after</em> the fact
              </TableCell>
              <TableCell>
                Humans correct <em>before</em> execution
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Text as="h3">Depth</Text>
        <Text size='sm'>
          How many steps can the AI take on its own before a <em>human</em> intervenes?
        </Text>
        <Table className="max-w-3xl mx-auto mb-12 mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>A <code>shallow</code> workflow</TableHead>
              <TableHead>A <code>deep</code> workflow</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                One-shot or near one-shot
              </TableCell>
              <TableCell>
                Multistep planning and execution
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Human involved at every step
              </TableCell>
              <TableCell>
                Human steps in later or only on escalation,<br /> intermediate reasoning may be hidden
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Errors are easy to spot quickly
              </TableCell>
              <TableCell>
                Errors can compound silently
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
      <hr />
      <Section>
        <Alert icon='RulerDimensionLineIcon' intent='info'>
          <Text>
            Depth is not a goal by itself.
          </Text>
          <Text>
            Depth should be earned <strong>through</strong> narrowness.
          </Text>
          <Text>
            The more freedom you give an AI over time, the clearer your intent and constraints must be <u>upfront</u>.
          </Text>
          <Text>
            <em>E.g., Spec-driven workflows often start narrow and shallow, and only become deep once intent, constraints, and validation are strong enough to support autonomy.</em>
          </Text>
        </Alert>
        <WidthDepthVisualizer showValidation={true} />
      </Section>
      <hr />
      <Section>
        <Text as="h2" variant="subheading">
          The four workflows
        </Text>
        <Text>
          Each workflow is an abstraction on top of the previous one, to better work with the latter it is good to (fully) understand the former.
        </Text>
        <WorkflowProgression />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Prompt engineering
        </Text>
        <Quote type="inline">
          AI as a smarter search engine or autocomplete
        </Quote>
        <Text>
          <em>Prompt engineering</em> refers to the methodology on how early interactions started to form with the release of LLMs such as ChatGPT back in <time dateTime="2022-11-01">November of 2022</time>.{" "}
          By <em>engineering</em> the <em>prompts</em>, you can better steer the output that is produced.
        </Text>
        <Text>
          Although this is the first workflow, many tasks should still live in this space.{" "}
          Here, you collaboratively work with <em>LLMs</em> to make something.{" "}
          You prompt, AI responds, you copy, paste and adapt the output. You are the one who <strong>validates the output</strong> and integrates everything manually.
        </Text>
        <Text>
          This workflow works well for exploring ideas, getting unstuck, <strong>drafting</strong> pieces of text or even learning unfamiliar domains.
          It is (usually) very fast, has a low cognitive overhead, is easy to adopt and helps to improve your individual productivity.{" "}
          On the other hand, the context is short-lived and the quality of output heavily depends on your prompting.
        </Text>
        <Text size='sm' className='mb-8'>
          This workflow breaks down when tasks grow larger, require shared understanding, or span multiple steps.
        </Text>
        <Alert icon='BookAIcon' intent='warning'>
          <Text as="strong" className='block'>
            Key risk
          </Text>
          <Text>
            Mistaking good wording for good thinking.
          </Text>
        </Alert>
        <WidthDepthVisualizer showValidation={true} initialStep={0} draggable={false} />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          AI agents
        </Text>
        <Quote type="inline">
          AI as an assistant that can take multiple steps
        </Quote>
        <Text>
          <em>Agents</em> are ways to give your LLMs a bit more autonomy. Here, AI starts doing more than answering a question.{" "}
          It can plan, act, and use tools. This is where your LLM starts to get integrated in/with the tooling you already use.
        </Text>
        <Text>
          You describe a task or outcome, AI determines intermediate steps.{" "}
          It may write code, query data, or iterate, and you review the final result.
        </Text>
        <Text>
          This workflow works well for research and synthesis,{" "}
          code scaffolding, refactoring or analysis, or tasks with a clear goal but a flexible path.{" "}
          It can handle multistep problems, reduces manual “busywork”, explore solution spaces quickly.{" "}
          This should feel more like delegating a task.
        </Text>
        <Text>
          On the downside, intermediate reasoning and decisions are not always visible, goals and success criteria are often inferred rather than explicit and mistakes can propagate and compound quietly across steps without being noticed.
        </Text>
        <Text size='sm' className='mb-8'>
          This workflow breaks down when there is no clear intent. Without clear <em>intent</em>, agents optimize for something — just not always the right thing.
        </Text>
        <Alert icon='GoalIcon' intent='warning'>
          <Text as="strong" className='block'>
            Key risk
          </Text>
          <Text>
            The AI sounds confident even when the goal was under-specified.
          </Text>
        </Alert>
        <WidthDepthVisualizer showValidation={true} initialStep={1} draggable={false} />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Spec-driven development
        </Text>
        <Quote type="inline">
          AI as an executor of clearly defined intent
        </Quote>
        <Text>
          This workflow is where AI stops being <em>&quot;just helpful&quot;</em> and starts becoming (a) reliable (team member).
        </Text>
        <Text>
          In this workflow, you are only in the driver&apos;s seat by thoroughly describing your intent, after this AI takes over.
        </Text>
        <Text>
          You write specifications (specs); goals, constraints, assumptions, success criteria. AI executes against this spec and the output is automatically reviewed against the same spec. Most thinking happens <strong>before</strong> execution.
        </Text>
        <Text>
          Specs are opinionated pieces of text, often presented in <code>Markdown</code>, and become shared artifacts. When done well, specs create a shared understanding across roles and disciplines. Ambiguity is no longer hidden inside prompts or intermediate steps, but surfaced early and made discussable. Both between humans, and between humans and AI.
        </Text>
        <Text>
          This works well where correctness matters more than speed and in cross-team/cross-discipline collaboration settings. Creating a shared understanding between humans and AI where ambiguity surfaces early. Outputs are more consistent, and are easier to review and iterate on.
        </Text>
        <Text size='sm' className='mb-8'>
          This workflow has a higher upfront <em>“cost”</em>, in time and tokens, requires more discipline, a better domain understanding and expertise of your field of work as well as <u>knowing what you do not want</u> as much as what you do. All of this typically feels heavier at first, but pays off rapidly as complexity grows, reducing misalignment and rework.
        </Text>
        <Alert icon='BrickWallFireIcon' intent='warning'>
          <Text as="strong" className='block'>
            Key risk
          </Text>
          <Text>
            Specs have a way of enhancing both mastery and misunderstanding.
          </Text>
          <Text>
            They encode what we believe to be true, including the blind spots we may not (yet) see.
          </Text>
        </Alert>
        <WidthDepthVisualizer showValidation={true} initialStep={2} draggable={false} />
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Agentic AI
        </Text>
        <Quote type="inline">
          AI as a collaborator inside a designed system
        </Quote>
        <Text>
          Agentic AI is not about giving an AI model full freedom.{" "}
          It is about designing systems in which AI can operate autonomously within clearly defined boundaries{" "}
          – sometimes referred to as <code>Harness Engineering</code>.
        </Text>
        <Text>
          This workflow shifts effort: less time spent on doing, more time spent on designing how work should happen.
        </Text>
        <Text>
          In this workflow, AI systems are capable of planning work, executing tasks, evaluating their outputs,{" "}
          and iterating, all while humans remain responsible for intent, constraints, and decision-making.{" "}
          Rather than prompting or even delegating individual tasks, you design a system in which AI can repeatedly perform work.
        </Text>
        <Text>
          This works well for repetitive but complex workflows, integrations across tools, data sources or services{" "}
          and situations where process consistency (e.g., continuous documentation maintenance) matters more than individual output.
        </Text>
        <Text size='sm' className='mb-8'>
          The problems with this workflow become evident when constraints are unclear or incomplete, human oversight{" "}
          is implicit instead of designed, or responsibility is shifted away instead of upward.
        </Text>
        <Alert icon='SignatureIcon' intent='warning'>
          <Text as="strong" className='block'>
            Key risk
          </Text>
          <Text>
            Confusing autonomy with accountability.
          </Text>
        </Alert>
        <WidthDepthVisualizer showValidation={true} initialStep={3} draggable={false} />
      </Section>
      <Section>
        <Text as="h2" variant="subheading">
          Shift from doing to designing
        </Text>
        <Alert icon='ShieldOffIcon' intent='danger' className='mb-8'>
          <Text className='!mb-0'>
            AI does not replace thinking nor remove responsibilities.
          </Text>
        </Alert>
        <Text>
          What matters more than picking &ldquo;the right tool&rdquo; or &ldquo;the best AI&rdquo; is how we stay in control and the processes we put in place to work collaboratively and safely with AI.
        </Text>
        <Text>
          We move from doing, formatting and translating towards framing problems, setting constraints, reviewing outcomes and making decisions. Your way of working should <em>&ldquo;shift up&rdquo;</em> to a higher abstraction level.
        </Text>
        <Text size='sm'>
          Tomorrow, when you open your AI tool, try three things: name which workflow you are in, narrow it one notch if you can, and decide how deep you are willing to let it go before you step back in. Over time, the habit of choosing width and depth on purpose is what turns &ldquo;using AI&rdquo; into working agentically with it.
        </Text>
      </Section>
      <Section>
        <Text as="h3" variant="subheading" size="sm">
          Why deep understanding still matters
        </Text>
        <Text size="sm">
          The 🐘 in the room.
        </Text>
        <Text size='sm'>
          While we can move a lot of work towards AI, having a deep and systematic understanding of your work should still, and will always, be the baseline<sup>*</sup>.
        </Text>
        <Text size='sm'>
          Over-delegation can lead to imbalance, (hallucinated) confidence can lead to brittle systems, and context loss can lead to losing (shared) understanding in teams.
        </Text>
        <Text as='aside' className='mt-8 text-muted-foreground'>
          <sub className='text-sm'>* What you need to know drifts over time, though.</sub>
        </Text>
      </Section>
      <aside>
        <Links
          title='Dive deeper down the 🐇 hole'
          links={[
            [
              'https://docs.openclaw.ai/concepts/memory',
              'Sessions and memory',
            ],
            [
              'https://platform.claude.com/docs/en/build-with-claude/context-windows',
              'Context windows',
            ],
            [
              'https://www.youtube.com/watch?v=-uW5-TaVXu4',
              'Most devs do not understand how context windows work',
            ],
            [
              'https://arxiv.org/abs/2406.06608',
              'The Prompt Report: A Systematic Survey of Prompt Engineering Techniques',
            ],
            [
              'https://github.com/danielmiessler/fabric',
              'fabric',
            ],
            [
              'https://claude.com/skills',
              'Claude Skills',
            ],
            [
              'https://code.claude.com/docs/en/mcp',
              'Connect Claude Code to tools via MCP',
            ],
            [
              'https://arxiv.org/abs/2602.11988',
              'Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?',
            ],
            [
              'https://www.youtube.com/watch?v=AtYtuVTZCQU',
              'Most devs do not understand what agents are',
            ],
            [
              'https://github.com/github/spec-kit',
              '🌱 Spec Kit',
            ],
            [
              'https://github.com/gsd-build/get-shit-done/',
              'GET SHIT DONE',
            ],
            [
              'https://kiro.dev/docs/cli/chat/planning-agent/',
              'Planning agent',
            ],
            [
              'https://code.visualstudio.com/docs/copilot/agents/planning',
              'Planning with agents in VS Code',
            ],
            [
              'https://n8n.io/',
              'AI workflows',
            ],
            [
              'https://ralph-wiggum.ai/',
              'Ralph Wiggum',
            ],
            [
              'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',
              'Effective harnesses for long-running agents',
            ],
            [
              'https://blog.langchain.com/improving-deep-agents-with-harness-engineering/',
              'Improving Deep Agents with harness engineering',
            ],
            [
              'https://github.com/rowboatlabs/rowboat',
              'AI coworker',
            ],
            [
              'https://openclaw.ai/',
              'OpenClaw',
            ],
            [
              'https://github.com/qwibitai/nanoclaw',
              'NanoClaw',
            ],
            [
              'https://github.com/snarktank/antfarm',
              'Antfarm',
            ],
            [
              'https://github.com/Significant-Gravitas/AutoGPT',
              'AutoGPT',
            ],
            [
              'https://www.youtube.com/watch?v=_IK18goX4X8&t=369s',
              'Ship working code while you sleep',
            ],
            ['https://chatgpt.com/', 'chatGPT'],
            ['https://copilot.microsoft.com/', 'Copilot'],
            ['https://claude.com/product/claude-code', 'Claude Code'],
            ['https://code.visualstudio.com/docs/copilot/overview', 'GitHub Copilot in VS Code'],
            ['https://github.com/modelcontextprotocol/servers', 'Model Context Protocol servers'],
          ]}
        />
      </aside>
    </>
  );
}
