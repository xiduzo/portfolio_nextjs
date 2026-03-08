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
import { Links } from '@/components/custom/links';

export default function Page() {
  return (
    <>
      <Hero
        title='Glosario'
        subtitle='A collaborative glossary for everyone'
        readTime={8}
        publishDate='Mar 08 2026'
        emoji='1F4D6'
        className='bg-violet-300 dark:bg-violet-900'
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
        ]}
      />
      <TLDR
        lines={[
          'Built a multi-tenant collaborative glossary platform where teams can define, review, and manage shared terminology.',
          'Terms go through a draft → pending → approved workflow, with version-controlled definitions and crowd-sourced suggestions.',
          'Term relationships are crowd-voted, and users can flag unclear definitions with structured reasons.',
        ]}
      />
      <Section>
        <Text as='h2' variant='subheading'>
          DLAs
        </Text>
        <Text>
          Since day one of my career I&apos;ve been drowning in TLAs — Three
          Letter Abbreviations. Every company has its own alphabet soup of
          internal jargon that everyone pretends to understand and nobody
          bothers to define.
        </Text>
        <Text>
          It&apos;s not just corporations either. At the{' '}
          <Link href='https://www.masterdigitaldesign.com/' target='_blank'>
            Master Digital Design
          </Link>{' '}
          where I help teach, students get buried under an avalanche of
          terminology from day one — and half the room is quietly Googling words
          mid-lecture rather than admitting they have no idea what&apos;s being
          said.
        </Text>
        <Text size='sm'>
          The pattern is always the same: the vocabulary exists, the people
          exist, but the shared understanding doesn&apos;t. No matter what kind
          of organization you are at, there&apos;s a gap between the words
          people use and what they actually mean by them.
        </Text>
        <Text size='sm'>
          Glosario is my attempt to close that gap — one term at a time.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Domains, not just one big pile
        </Text>
        <Text size='sm'>
          Organizations are split into <em>domains</em> — teams that each own
          their slice of the glossary. The engineering team defines what{' '}
          <em>deployment</em> means to them; the marketing team does the same.
          Tags from one domain can be referenced across the whole organization,
          making it easy to discover where terminology overlaps or, more often,
          quietly conflicts.
        </Text>
        <Text size='sm'>
          Each term lives in exactly one domain and goes through an explicit
          approval workflow before it&apos;s visible to anyone else.
        </Text>
      </Section>

      {/* IMAGE HINT: Screenshot of the glossary overview — showing a list of
          terms with their statuses (draft / pending / approved). Ideally a
          browser window screenshot at ~1280×800. Save as:
          public/glosario/glossary-overview.png */}
      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
          Glossary overview with term statuses
        </Text>
        <Safari
          src='/glosario/glossary-overview.png'
          alt='The glosario glossary overview showing terms and their approval status'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Terms that earn their place
        </Text>
        <Text>
          A term doesn&apos;t just appear in the glossary. It has to earn
          it.
        </Text>
        <Text>
          Every term starts as a <code>draft</code> — a scratchpad for whoever
          first noticed the word was causing confusion. When it&apos;s ready,
          it moves to <code>pending</code>, waiting for a domain curator to
          review and <code>approve</code> or <code>reject</code> it.
        </Text>
        <Text size='sm'>
          Only approved terms are visible to the rest of the organization.
          Everything else stays in the domain&apos;s own workspace, quietly
          brewing.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          Definitions as a living document
        </Text>
        <Text size='sm'>
          Once a term is approved, its definition is not set in stone. Any team
          member can submit a <em>suggestion</em> — a proposed rewrite — which
          a domain curator can accept or reject.
        </Text>
        <Text size='sm'>
          Accepted suggestions become a new immutable <em>revision</em>. Every
          revision is stored, so you can always trace how a definition evolved
          and who changed it. No more <em>&ldquo;wait, what did this used to
          say?&rdquo;</em>
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
// A term has many revisions; the highest version is current
export const definitionRevision = pgTable("definition_revision", {
  id: text("id").primaryKey(),
  termId: text("term_id").references(() => term.id, { onDelete: "cascade" }),
  contentJson: jsonb("content_json").notNull(), // rich-text AST
  plainText: text("plain_text").notNull(),
  version: integer("version").notNull(),
  createdById: text("created_by_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
\`\`\`
          `}
        />
      </Section>

      {/* IMAGE HINT: Screenshot of a single term detail page — showing the
          definition, the revision history timeline, and ideally a pending
          suggestion card below it. Save as:
          public/glosario/term-detail.png */}
      <Section className='items-center flex flex-col' as='figure'>
        <Text className='col-span-12' variant='note' as='figcaption'>
          Term detail with revision history and suggestions
        </Text>
        <Safari
          src='/glosario/term-detail.png'
          alt='A glosario term detail page showing the definition and its revision history'
        />
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Unclear? Say so.
        </Text>
        <Text>
          The biggest enemy of a glossary is false confidence — people nodding
          along to a definition they don&apos;t actually understand.
        </Text>
        <Text>
          Glosario lets any user flag a term as <em>unclear</em> with a
          structured reason: too vague, scope unclear, conflicts with another
          term, missing an example, outdated, or just plain hard to understand.
        </Text>
        <Text size='sm'>
          Clarifications are attached to a specific definition version, so
          domain curators know exactly which revision triggered the confusion.
          When the definition is improved, the clarification is resolved. Clean.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
export const clarificationReasonEnum = pgEnum("clarification_reason", [
  "too_vague",
  "scope_unclear",
  "conflicts",
  "missing_example",
  "outdated",
  "hard_to_understand",
  "other",
]);

// Only one active (unresolved) clarification per user per term
uniqueIndex("clarification_user_term_active_idx")
  .on(table.userId, table.termId)
  .where(sql\`resolved = false\`),
\`\`\`
          `}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Terms talk to each other
        </Text>
        <Text>
          Terms rarely exist in isolation. A glossary that treats them as
          isolated entries misses half the picture.
        </Text>
        <Text>
          In Glosario, any user can link two terms together. Links are
          crowd-validated — other users vote to reinforce a connection they
          agree with. The vote count makes it easy to see which relationships
          the team actually considers meaningful versus someone&apos;s
          half-baked idea at 4pm on a Friday.
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
          More than a CRUD app
        </Text>
        <Text>
          At some point the project stopped being a simple glossary tool and
          started becoming a proper SaaS product. I only have myself to blame.
        </Text>
        <Text>
          Glosario has a full permission model across two axes — your
          organization role (<em>owner</em>, <em>admin</em>, <em>member</em>)
          and your domain role (<em>curator</em>, <em>author</em>,{' '}
          <em>reader</em>). These combine to determine what you can see and do,
          down to individual actions on individual resources.
        </Text>
        <CodeBlock
          code={`
\`\`\`typescript
// The same function works on both frontend (hide the button)
// and backend (throw FORBIDDEN). No permission drift.
export const can = <R extends Resource>(
  ctx: PermissionContext,
  resource: R,
  action: Action<R>
): boolean => {
  // Org-level access first (owners and admins have broad reach)
  if (ctx.orgRole && isValidOrgRole(ctx.orgRole)) {
    const permissions = orgRolePermissions[ctx.orgRole][resource];
    if (permissions?.includes(action as string)) return true;
  }

  // Domain-level access for scoped resources
  if (ctx.domainRole && isValidDomainRole(ctx.domainRole)) {
    const permissions = domainRolePermissions[ctx.domainRole][resource];
    if (permissions?.includes(action as string)) return true;
  }

  return false;
};
\`\`\`
          `}
        />
        <Text size='sm'>
          A single pure function. No database calls, no side effects. On the
          server it enforces; on the client it decides whether a button even
          renders. The permission model can&apos;t drift because there is only
          one source of truth.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          And then I added plans
        </Text>
        <Text size='sm'>
          Free, Core, Scale, Enterprise. Audit logs, analytics, API access, and
          SSO all gated behind higher tiers. Billing runs through{' '}
          <Link href='https://polar.sh' target='_blank'>
            Polar
          </Link>
          .
        </Text>
        <Text size='sm'>
          Enterprise customers get outbound webhooks — HMAC-SHA256 signed
          payloads — so they can react to term approvals, definition changes, or
          anything else happening in their glossary. Every delivery attempt is
          tracked with retry state, so they can debug why their integration
          stopped working at 2am.
        </Text>
        <Text size='sm'>
          At this point it is very much a real product. A weird, niche, glossary
          product — but a real one.
        </Text>
      </Section>

      <Section>
        <Text as='h2' variant='subheading'>
          Does your team speak the same language?
        </Text>
        <Text>
          If you&apos;ve ever sat in a meeting where half the room meant one
          thing and the other half meant something else — and nobody said a
          word — Glosario was built for you.
        </Text>
        <Text>
          Give it a try. It&apos;s free to get started, and your first glossary
          takes about two minutes to set up.
        </Text>
      </Section>
      <Section className='flex justify-center'>
        <Link href='https://glosar.io/' target='_blank'>
          <CallToAction>Try Glosario</CallToAction>
        </Link>
      </Section>
      <aside>
        <Links
          title='Source code'
          links={[['https://github.com/xiduzo/glosario', 'Glosario on GitHub']]}
        />
      </aside>
    </>
  );
}
