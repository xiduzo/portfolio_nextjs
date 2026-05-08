import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import { Image } from '@/components/custom/image';
import { CallToAction } from '@/components/custom/call-to-action';
import { Technologies } from '@/components/custom/technologies';
import { Hero } from '@/components/custom/hero';
import { TLDR } from '@/components/custom/tldr';
import { CodeBlock } from '@/components/custom/code-block';
import { Safari } from '@/components/magic-ui/safari';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type PortfolioProjectSeo,
  portfolioProjectJsonLdFromSeo,
  portfolioProjectMetadata,
} from '@/lib/schema';

const SEO: PortfolioProjectSeo = {
  title: 'Glosario — collaborative glossary & terminology workflows',
  description:
    'Glosario is a multi-tenant glossary product: propose terms, run approvals, map synonyms and related concepts, and keep org-wide language from drifting—React 19, Hono, Drizzle, PostgreSQL.',
  path: '/project/glosario',
  openGraphTitle: 'Glosario — collaborative glossary platform',
  openGraphDescription:
    'Case study: shared definitions, review queues, and relationship voting for growing teams.',
  demoUrl: 'https://glosar.io/',
};

export const metadata = portfolioProjectMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={portfolioProjectJsonLdFromSeo(SEO)} />
      <Hero
        title='Glosario'
        subtitle='A collaborative glossary for everyone'
        readTime={8}
        publishDate='Mar 08 2026'
        emoji='1F4D6'
        className='bg-amber-300 dark:bg-amber-900'
        link='https://glosar.io/'
      />
      <Technologies
        technologies={[
          'Better Auth',
          'Drizzle ORM',
          'Hono',
          'PostgreSQL',
          'React 19',
          'shadcn/ui',
          'TanStack Router',
          'tRPC',
          'Turborepo',
          'Polar',
        ]}
      />
      <TLDR
        lines={[
          'Built a multi-tenant collaborative glossary platform where an organization can define, review, and manage shared terminology.',
          'Terms go through a draft → pending → approved workflow, with version-controlled definitions and crowd-sourced suggestions.',
          'Term relationships are crowd-voted, and users can flag unclear definitions with structured reasons.',
        ]}
      />
      <Section>
        <Text size='sm' variant='note'>
          Solo project. Concept, design, and the full stack — React 19 +
          TanStack Router on the front, Hono + tRPC + Drizzle + Postgres on
          the back — are all mine.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          ASS 🍑
        </Text>
        <Text>
          Since day one of my career I have been drowning in and fighting against acronyms and abbreviations.
        </Text>
        <Text>
          I rarely agree with Elon Musk, but <Link href='https://medium.com/@rafaelcgstz/acronyms-seriously-suck-elon-musk-6e8c66340739' target='_blank'>he got this one right</Link>: <Link href='https://acronyms-suck.com/' target='_blank'>Acronyms Seriously Suck</Link> (ASS).
        </Text>
        <Text>
          Every company and team has its own alphabet soup of
          internal jargon that everyone pretends to understand and nobody
          bothers to define.
        </Text>
        <Text size='sm'>
          The pattern is the same: the vocabulary exists, the people
          exist, but the shared understanding does not.
        </Text>
        <Text size='sm'>
          Glosario is my attempt to close that gap — one term at a time.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          One size fits none
        </Text>
        <Text>
          Create a glossary for your organization, team or project — split by department, knowledge base, or whatever makes sense for you. Glosario uses <em>domains</em> to group terms, giving structure and ownership over the language your team uses.
        </Text>
        <Text>
          But the real value is not in how you organize terms, it is in how they come alive. An approval workflow keeps noise out. Suggestions turn definitions into living documents. Flagging unclear terms surfaces the misunderstandings nobody talks about. And linking terms to each other helps people discover context they did not know they were missing.
        </Text>
      </Section>

      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
        Not just a glossary, but a living document to explore.
        </Text>
        <Safari
          src='/glosario/glossary-relations.png'
          alt='Glosario showing a graph of related terms in the platform'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Terms that earn their place
        </Text>
        <Text>
          A term does not just appear in the glossary. It has to earn
          it.
        </Text>
        <Image
          src='/glosario/term-lifecycle.png'
          alt='State diagram of a Glosario term: draft -> pending (approve or reject), approved -> flagged unclear -> resolved, approved -> suggestion -> new revision (which append-only loops back into approved). Annotation: append-only, never overwrite.'
          width={1280}
          height={1280}
          className='w-full max-w-2xl mx-auto mt-8'
        />
      </Section>
        <Text>
          Every term starts as a <code>draft</code>. A scratchpad for whoever
          first noticed the word was causing confusion. When it is ready,
          it can be marked as <code>pending</code>, waiting for a domain curator to
          review and <code>approve</code> or <code>reject</code> it.
        </Text>
        <Text size='sm'>
          Only approved terms are visible to the rest of the organization.
          Everything else stays in the domain&apos;s own workspace, quietly
          brewing. But approval is not the end of the story.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Definitions as a living document
        </Text>
        <Text size='sm'>
          Once a term is approved, the definition is not set in stone. Any team
          member can submit a <em>suggestion</em> as a proposed rewrite which
          a domain curator can accept or reject.
        </Text>
        <Text size='sm'>
          Accepted suggestions become a new immutable <em>revision</em>. Every
          revision is stored, so you can always trace how a definition evolved
          and who changed it.
        </Text>
        <Text size='sm'>
          Immutable, not editable. Letting curators overwrite a definition
          would have been simpler, but you would lose every prior reading and
          the team&apos;s history of how a term got sharper would disappear
          with it. Append-only beats merge logic when the audit trail is the
          product.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
// A term has many revisions; the highest version is current one
export const definitionRevision = pgTable("definition_revision", {
  id: text("id").primaryKey(),
  termId: text("term_id").references(() => term.id, { onDelete: "cascade" }),
  contentJson: jsonb("content_json").notNull(), // rich-text AST
  plainText: text("plain_text").notNull(),   // search index + fallback
  version: integer("version").notNull(),
  createdById: text("created_by_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
\`\`\`
          `}
        />
      </Section>

      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
          Building a shared understanding by suggesting improvements
        </Text>
        <Safari
          src='/glosario/term-suggestion.png'
          alt='A glosario term detail page showing the definition and its revision history'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Unclear? Say so!
        </Text>
        <Text>
          The biggest enemy of a glossary is false confidence, people nodding
          along to a definition they do not actually understand.
        </Text>
        <Text>
          Any term can be flagged as <em>unclear</em>, surfacing the unspoken misunderstandings hiding in your team.
        </Text>
        <Text size='sm'>
          Clarifications are attached to a specific definition version, so
          domain curators know exactly which revision triggered the confusion.
          When the definition is improved, the clarification is resolved. Clean.
        </Text>
      </Section>

      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
          Unclear terms can be flagged and improved
        </Text>
        <Safari
          src='/glosario/term-unclear.png'
          alt='Glosario showing a term detail page with an unclear flag'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Terms talk to each other
        </Text>
        <Text>
          Terms do not exist in isolation. A glossary that treats them as
          isolated entries misses half the picture.
        </Text>
        <Text>
          Two terms can be linked together by anyone. Connections are
          crowd-validated and other users can vote to reinforce a relationship they
          agree with.
        </Text>
        <Text size='sm'>
          The vote count makes it easy to see which relationships
          the team actually considers meaningful versus someone&apos;s
          half-baked idea at 4pm on a Friday.
        </Text>
        <Text size='sm'>
          Crowd-voted, not curator-only. A single curator gating every
          relationship would have collapsed under a glossary of any real size,
          and would also have hidden the disagreements that are themselves
          information — when half the team links A to B and the other half
          doesn&apos;t, that&apos;s the team telling you something.
        </Text>
      </Section>

      {/* IMAGE HINT: Screenshot showing the term links / related terms section
          on a term detail page — ideally with a few linked terms and their
          vote counts visible. Save as:
          public/glosario/term-links.png */}
      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
          Term relationships, voted on by the team
        </Text>
        <Image
          src='/glosario/term-links.png'
          alt='Related terms panel showing crowd-voted term relationships in glosario'
          width={1280}
          height={800}
          className='w-full'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          What is still open
        </Text>
        <Text>
          The hardest unsolved problem is the cold start: who fills the first
          hundred terms. Glossaries die from emptiness more often than from
          drift. Approval workflows, immutable revisions, and crowd-voted
          relations are all worth something only once a glossary has enough
          terms to feel like a place — and getting there from zero is its own
          design problem that I have not finished thinking about.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Does your team speak the same language?
        </Text>
        <Text>
          If you have ever sat in a meeting where half the room meant one
          thing and the other half meant something else, and nobody said a
          word... Glosario was built for you.
        </Text>
      </Section>
      <Section className='flex justify-center'>
        <Link href='https://glosar.io/' target='_blank'>
          <CallToAction>Try Glosario</CallToAction>
        </Link>
      </Section>
    </>
  );
}
