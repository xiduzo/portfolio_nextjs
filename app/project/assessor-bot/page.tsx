import Alert from '@/components/custom/alert';
import { Hero } from '@/components/custom/hero';
import { Section } from '@/components/custom/section';
import { Technologies } from '@/components/custom/technologies';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import assessorBot from '/videos/assessor-bot.mov';
import assessorBotOllama from '/videos/install-ollama.mov';
import Video from 'next-video';
import { Image } from '@/components/custom/image';
import { CodeBlock } from '@/components/custom/code-block';
import { CallToAction } from '@/components/custom/call-to-action';
import { GithubIcon } from 'lucide-react';
import { TLDR } from '@/components/custom/tldr';

export default function Page() {
  return (
    <>
      <Hero
        title='Assessor bot'
        publishDate='Feb 12 2025'
        emoji='1F99C'
        className='bg-green-300 dark:bg-green-900'
        subtitle='A Large Language Model experiment for providing students with feedback'
        readTime={12}
      />
      <Technologies
        technologies={['Electron', 'LangChain', 'Ollama', 'shadcn/ui']}
      />
      <TLDR
        lines={[
          'Built an Electron app that uses Ollama and LangChain to provide AI-powered feedback on student portfolios.',
          'The tool processes uploaded documents locally, uses RAG to find relevant competency information, and generates structured feedback through custom prompts.',
          'Key learnings: avoid over-engineering RAG when context windows are large enough, and prioritize data privacy by keeping everything local.',
        ]}
      />
      <Section>
        <Text as='h2' variant='subheading'>
          Large Language Models (LLMs) in education
        </Text>
        <Text>
          Ever since the release of{' '}
          <Link href='https://openai.com/chatgpt/overview/' target='_blank'>
            OpenAI&apos;s ChatGPT
          </Link>{' '}
          there has been a lot of controversy surrounding the use of Large
          Language Models (LLMs) in education.
        </Text>
        <Text>
          At the{' '}
          <Link href='https://www.masterdigitaldesign.com/' target='_blank'>
            Master Digital Design
          </Link>{' '}
          we ask students to reflect on their work based on a set of{' '}
          <em>competencies</em> and <em>indicators</em>. Since the introduction
          of these LLMs (ChatGPT in particular) we have seen an increase in
          amount of usage of these models in the documents that are submitted by
          students.
        </Text>
        <Text>
          From a assessors&apos; perspective, we could see the generic (and
          mostly mediocre) generated text which was submitted and held an
          intervention to have an open conversation on the use of these models.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Guidance instead of banning
        </Text>
        <Text size='sm'>
          As we do see the value of generative technologies in the creative
          field and are sure they are here to stay. We prefer to guide students
          in the use of these technologies, and allow for them to develop a
          critical view, instead of banning it all together<sup>1</sup>.
        </Text>
        <Text size='sm'>
          By hosting a full week dedicated to experimenting with the use of AI
          in the creative field, with the question to the students to{' '}
          <strong>
            create a prompt-based product that uses LLM prompting techniques,
            the product must do only one thing but do it well
          </strong>
          , we explored and reflected opon the field of generative technologies
          together.
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>
              We do now require the students to proved us with a decleration of
              transparency in the use of AI in submitted documents
            </li>
          </ol>
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Portfolio checker
        </Text>
        <Text>
          One of the projects which came out of this week was the{' '}
          <em>Portfolio checker</em> by{' '}
          <Link href='https://www.studio-joop.nl' target='_blank'>
            Jaap Hulst
          </Link>
          ,{' '}
          <Link
            href='https://www.linkedin.com/in/niloofarzabardast'
            target='_blank'
          >
            Niloo Zabardast
          </Link>{' '}
          and{' '}
          <Link href='https://www.linkedin.com/in/elena-mihai/' target='_blank'>
            Elena Mihai
          </Link>
          .
        </Text>
        <Text>Their project, using a prompt, tried to solve:</Text>
        <Text as='ul'>
          <li>
            Getting designers to <strong>reflect</strong>, get insight in their
            competencies, give direction
          </li>
          <li>
            <strong>Take off pressure</strong> for reviewing design work
          </li>
          <li>
            Make the <strong>feedback</strong> loop easier and faster
          </li>
        </Text>
        <Text className='mt-24 text-center' size='sm'>
          <Link href='/mdd-assessor-bot/portfolio_checker.pdf' target='_blank'>
            See the whole pitch
          </Link>
        </Text>
      </Section>
      <Section>
        <Alert intent='info' icon='Lightbulb'>
          <Text>
            The concept and design of this project were made by{' '}
            <Link href='https://www.studio-joop.nl' target='_blank'>
              Jaap Hulst
            </Link>
            ,{' '}
            <Link
              href='https://www.linkedin.com/in/niloofarzabardast'
              target='_blank'
            >
              Niloo Zabardast
            </Link>{' '}
            and{' '}
            <Link
              href='https://www.linkedin.com/in/elena-mihai/'
              target='_blank'
            >
              Elena Mihai
            </Link>
            .
          </Text>
          <Text>
            This article will go into the technical details of implementing such
            designs to a working product.
          </Text>
          <Text>
            For the non-technical aspects, I would like to refer you to the
            students themselves.
          </Text>
        </Alert>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          From document to feedback
        </Text>
        <Video
          src={assessorBot}
          aria-label='a video showing the process of uploading your document and receiving feedback from a LLM'
        />
        <Text variant='note' size='sm' className='mt-4'>
          Feedback takes about a minute to be generated
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          The game plan
        </Text>
        <Text>
          As this was my first time incorporating a Large Language Model (LLM)
          into a product I only had a rhough idea on how to approach this.
        </Text>
        <Text>
          By making the students upload their documents, use Retrieval-augmented
          generation (RAG) to find relevant infromation, and combine the
          relevant data through a custom prompt to generate the feedback.
        </Text>
        <Text>
          After some research I found{' '}
          <Link
            href='https://js.langchain.com/docs/tutorials/rag'
            target='_blank'
          >
            this post
          </Link>{' '}
          by <code>LangChain</code> which made me confident enough that I could
          build something similar and give a go at the{' '}
          <em>portfolio checker</em>.
        </Text>
        <Image
          src='/mdd-assessor-bot/langchain-rag.png'
          className='mt-16'
          alt='A diagram from the LangChain post show-casing how a system like this could work'
        />
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          I should be less confident
        </Text>
        <Text size='sm'>
          While most of the application was build rather quickly,
          &ldquo;surprisingly&rdquo; enough I struggled getting the RAG properly
          set-up and running to provide valuable feedback.
        </Text>
        <Text size='sm'>
          As I do not really have a clue on how to make a proper RAG
          implementation I followed the documentation and came up with something
          like:
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
export const competencySplitter = new MarkdownTextSplitter({
  chunkSize: 500,
  chunkOverlap: 20,
});

export const documentSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 300,
  chunkOverlap: 20,
});

export async function createVectorStore(
  model: ModelResponse,
  initialDocuments: Document[] = [],
) {
  const splitDocs = await competencySplitter.createDocuments(
    INDICATOR_DOCUMENTS.map((competency) => competency.text),
    INDICATOR_DOCUMENTS.map(
      (competency): DocumentMetaData => ({
        name: \`\${competency.competency} - \${competency.indicator}\`,
        competency: competency.competency,
        indicator: competency.indicator,
        lastModified: Date.now(),
        type: "grading reference",
      }),
    ),
  );

  return MemoryVectorStore.fromDocuments(
    [...splitDocs, ...initialDocuments],
    new OllamaEmbeddings({ model: model.name }),
  );
}
\`\`\`
                `}
        />
        <Text size='sm'>
          This vectorstore would then be populated with documents uploaded by
          the student.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const addStudentDocuments = async (files: AddDocumentInput[]) => {
    const texts = files.map(({ text }) => text);
    const meta = files.map(
      (file): DocumentMetaData => ({
        name: file.name,
        lastModified: file.lastModified,
        type: "student document",
      }),
    );
    const documents = await documentSplitter.createDocuments(texts, meta);
    await vectorStore.addDocuments(documents);
  }
);
\`\`\`
                `}
        />
        <Text size='sm'>
          When the student would ask for feedback, it would create a{' '}
          <code>Runnable</code> for each of the indicators using a{' '}
          <code>FEEDBACK_TEMPLATE</code> and the following prompt:{' '}
        </Text>
        <Text as='code' size='sm'>
          {
            "what grade ('novice', 'competent', 'proficient', or 'visionary') and feedback would you give the student for given the competency ${competency} and indicator ${indicator.name}?"
          }
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
export async function createRunner(
  llm: LanguageModelLike,
  vectorStore: MemoryVectorStore,
) {
  const retriever = vectorStore.asRetriever();

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", FEEDBACK_TEMPLATE],
    // new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
  ]);

  const questionAnswerChain = await createStuffDocumentsChain({
    llm,
    prompt,
  });

  return createRetrievalChain({
    retriever,
    combineDocsChain: questionAnswerChain,
  });
}
\`\`\`
                `}
        />
        <Text variant='note'>The secret sauce of the product, the prompt</Text>
        <CodeBlock
          className='mt-2'
          code={`
\`\`\`typescript
export const FEEDBACK_TEMPLATE = \`
# IDENTITY and PURPOSE
You are acting as a very critical assessor for a master's program in digital design.
You will be giving constructive feedback on the student's work for them to improve upon.
Your feedback will always be directed at the work presented and will refer to examples and evidence from the text.
The provided grade and feedback MUST always reflect the expectations of the indicator you are grading.
When not enough evidence is provided for an indicator, the student should receive a "novice" grade and this should be reflected in the feedback.

# OUTPUT
A JSON feedback that matches the following schema:
\\\`\\\`\\\`json
{{
  "grade": "novice" | "competent" | "proficient" | "visionary",
  "feedback": "string",
}}
\\\`\\\`\\\`

# FEEDBACK
To give proper feedback, try to refer to the student's text and provide constructive criticism. Always refer to the student's text and provide examples or evidence to support your feedback. The feedback should be clear, concise, and focused on the student's work.

## TONE OF VOICE
Never use text from the examples provided below directly in your feedback, use it only as a tone-of-voice reference. Always refer to the student's text. If you use any text directly from the examples, the feedback will be considered invalid.

- Overall, we see a lot of growth and learning in you. We enjoyed seeing a lot of making explorations in this project and using creative methods to explore ideas in a very open brief – nice!
- We believe that you have learned a lor during this year. Your explorations and visits to Musea outside of the master are commendable. However, your reflection on teamwork is superficial. The answers that you gave during interview were convincing.  Overall, we think you have a grip on where you would like to go next.
- Your critical reflection on your design in comparison to other work in the same space is lacking and that’s something we expect a master-level student to be able to do with ease.
- Given the lack of a framing or debrief of the project presented it is hard to conduct appropriate research. The direction that the team took for this project seems to have taken you to an area where neither of you had any relevant knowledge and you were unable to bring the project back to an area where you could design again. Being able to do this is crucial for a designer at any level, bring the project to an area where you can design.
- Overall, we can see you we see you are ready to start adventuring in UX and considering possible ways forward in product design. We encourage you to look at differences across different design domains (e.g. “product design” and “experience design”) and explore how you can build on your prior knowledge and practice in architecture and take advantage of the other domains you have started to explore.
- Good that you have referenced some scientific articles in your research. Would like to have seen reference to other food-waste projects as part of research.
- You did not provide concrete examples of how you addressed potential unintended consequences and ensured user autonomy. When you compare your work to other work, more explicit identification of strong and weak points and how you plan to address them would provide clearer directions for future iterations.
- While the activities undertaken and their rationales are clearly listed, how they affected their work is not adequately articulated.

# INDICATOR GRADING
Use the following grading guide to help you give a grade and provide feedback:
{indicator_text}
\`;
\`\`\`
                `}
        />
        <Text size='sm'>
          This all generated quite some reasonable sounding feedback 🥳!
        </Text>
      </Section>
      <Section>
        <Text size='sm'>
          However, when digging deeper this system would either:
        </Text>
        <Text as='ul' size='sm'>
          <li>
            not get the correct information from the competencies and
            indicators, due to the RAG not working as expected. It would
            therefor give completely wrong/nonsense feedback.
          </li>
          <li>
            Hallucinate so bad that it would make up content that was not
            provided by the student and then give feedback on that.
          </li>
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Use the large context-windows
        </Text>
        <Text size='sm'>
          I tried to over-engineer the system where it was not needed.
        </Text>
        <Text size='sm'>
          As we ask students to reflect upon their work within a{' '}
          <strong>set word limit</strong> and with the current models context
          windows of 1024 tokens, there was no need to split all documents into
          smaller chunks.
        </Text>
        <Text size='sm'>
          By removing the splitting of the documents and using the full document
          as context, <em>most</em> of the hallucinations were surpressed and{' '}
          <em>nearly</em> no content was being made up anymore!
        </Text>
        <Text size='sm'>
          Most (modern) Large Language Models are capable of handling all the
          documents content in their context window.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const chat = [
  new SystemMessage(
    FEEDBACK_TEMPLATE.replace("{indicator_text}", indicatorText.text),
  ),
  new HumanMessage(
    "I will now provide you with the documents to grade, each document will have a title and the content of the document:",
  ),
  ...request.documents.map(
    ({ name, text }) => new HumanMessage(\`\\n# \${name}\\n\\n\${text}\`),
  ),
  new HumanMessage(
    \`what grade ("novice", "competent", "proficient", or "visionary") and feedback would you give the student for given the competency \${indicatorText.competency} and indicator \${request.indicator.name}?\`,
  ),
];
\`\`\`
                `}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          It is your data
        </Text>
        <Text>
          Two thing which was important to me was that 1) the data of the
          students was not stored on any server, but only on the device of the
          student and 2) I do no want to force the student into a{' '}
          <Link
            target='_blank'
            href='https://techcrunch.com/2024/12/05/openai-may-be-planning-a-chatgpt-pro-plan-for-200-per-month'
          >
            200$ per month plan
          </Link>{' '}
          to get feedback on their work.
        </Text>
        <Text>
          The assessor bot is utulising{' '}
          <Link target='_blank' href='https://ollama.com/'>
            Ollama
          </Link>{' '}
          as it&apos;s core to interact with the Large Language Model. Even
          though it is not be as <em>plug and play</em> and requires the student
          to have a local installation of Ollama, it does give me a more peace
          of mind.
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          Guiding the student towards Ollama
        </Text>
        <Video
          src={assessorBotOllama}
          aria-label='a video showing the process of uploading your document and receiving feedback from a LLM'
        />
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Structured output
        </Text>
        <Text size='sm'>
          While most models are capable of generating structured output and{' '}
          <Link
            target='_blank'
            href='https://python.langchain.com/docs/how_to/structured_output/'
          >
            according to the documentation
          </Link>{' '}
          of <code>LangChain</code> it should be possible to generate structured
          output using <code>Ollama</code>. In{' '}
          <code>@langchain/ollama 0.1.0</code>, the version available when
          building this tool, this interface was not availalbe.
        </Text>
        <Text size='sm'>
          I could hovever make the models give me back a <code>JSON</code>{' '}
          response
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
const llm = new Ollama({
  model: request.model.name,
  format: "json",
  temperature: 0.9,
  // ...other config
});
\`\`\`
                `}
        />
        <Text size='sm'>
          And do some rudimentary post-processing to get the feedback in the
          format required for the student.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
function postProcessResponse(input: Record<string, unknown>) {
  return Object.keys(input).reduce(
    (acc, key) => {
      const value = input[key];
      const lowerKey = key.toLowerCase();

      if (
        [
          "grade",
          "grading",
          "score",
          "rating",
          "overall",
          "result",
          "value",
        ].includes(lowerKey)
      ) {
        switch (typeof value) {
          case "object":
            if (value === null) break;
            if ("level" in value)
              acc.grade = (value as Record<string, unknown>).level;
            if ("value" in value)
              acc.grade = (value as Record<string, unknown>).value;
            if ("grade" in value)
              acc.grade = (value as Record<string, unknown>).grade;
            break;
          case "number":
          case "string":
          default:
            acc.grade = value;
            break;
        }

        return acc;
      }

      acc[lowerKey] = value;
      return acc;
    },
    {} as Record<string, unknown>,
  );
}
\`\`\`
                `}
        />
        <Text size='sm'>
          This would give me the required output in about 80% of the cases,
          which is more than plenty for an experimental tool.
        </Text>
      </Section>
      <Section className='flex justify-center flex-wrap'>
        <Link target='_blank' href='https://github.com/xiduzo/mdd-assessor-bot'>
          <CallToAction icon={<GithubIcon />}>Check out the code</CallToAction>
        </Link>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Over-rule the design(ers)
        </Text>
        <Text>
          As a small nudge to{' '}
          <Link
            target='_blank'
            href='https://dl.acm.org/doi/pdf/10.1145/3442188.3445922'
          >
            this research paper
          </Link>{' '}
          &ldquo;On the Dangers of Stochastic Parrots&rdquo;, I designed the{' '}
          <em>entity</em> you get feedback from to a parrot.{' '}
          <Link href='https://www.studio-joop.nl' target='_blank'>
            Jaap Hulst
          </Link>{' '}
          made another itteration to get the style more in line with the{' '}
          <code>Ollama</code> llama.
        </Text>
      </Section>
      <Section
        className='grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12'
        as='figure'
      >
        <div className='col-span-12 md:col-span-6'>
          <Image
            src='/mdd-assessor-bot/parrot-head.svg'
            className='w-full'
            alt='A parrot head as the entity you get feedback from'
          />
        </div>
        <div className='col-span-12 md:col-span-6'>
          <Image
            src='/mdd-assessor-bot/parrot-head-2.svg'
            className='w-full'
            alt='An update on the parrot head design by Jaap to be in line with Ollama style'
          />
        </div>
      </Section>
    </>
  );
}
