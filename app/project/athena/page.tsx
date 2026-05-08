import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';
import { Hero } from '@/components/custom/hero';
import { Technologies } from '@/components/custom/technologies';
import Link from 'next/link';
import { Safari } from '@/components/magic-ui/safari';
import { Links } from '@/components/custom/links';
import { TLDR } from '@/components/custom/tldr';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type PortfolioProjectSeo,
  portfolioProjectJsonLdFromSeo,
  portfolioProjectMetadata,
} from '@/lib/schema';

const SEO: PortfolioProjectSeo = {
  title: 'Athena — anonymous peer feedback for student teams',
  description:
    'Athena lets student teams give weekly anonymous ratings and comments so teachers see collaboration issues early—honest signals without public blame, built for classroom dynamics.',
  path: '/project/athena',
  openGraphTitle: 'Athena — peer feedback for students',
  openGraphDescription:
    'Product case study: structured team feedback in education settings.',
};

export const metadata = portfolioProjectMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={portfolioProjectJsonLdFromSeo(SEO)} />
      <Hero
        title='Athena'
        publishDate='Mar 21 2017'
        emoji='1F984'
        className='bg-amber-300 dark:bg-amber-900'
        subtitle='An honest feedback tool for students'
        readTime={4}
      />
      <Technologies
        technologies={[
          'Angular',
          'Django',
          'Gulp',
          'HvA LDAP',
          'Material design',
          'Trello API',
        ]}
      />
      <TLDR
        lines={[
          'Students in group projects often feel frustrated but never say it — until the grade comes back and the damage is done.',
          'Athena is an anonymous feedback platform where teammates rate each other weekly, giving students and teachers a clear picture of team dynamics before things go wrong.',
        ]}
      />
      <Section>
        <Text size='sm' variant='note'>
          Solo project. I designed and built Athena end-to-end — the Angular
          client, the Django server, the HvA LDAP integration, and the Trello
          sync. It started as my graduation project at HvA.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          What the slack!
        </Text>
        <Text>
          Propaedeutic students from{' '}
          <Link
            target='_blank'
            href='https://www.hva.nl/opleidingen/communication-and-multimedia-design'
          >
            Communication and Multimedia Design (CMD)
          </Link>{' '}
          are struggling to find good team dynamics and teachers do not always
          have proper insight into these dynamics.
        </Text>
        <Text>
          <em>Slacking</em> students are hard to identify in order to support
          them better in their foundation year.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Challenge
        </Text>
        <Text>
          How can an online platform positively stimulate cooperation and
          participation among propaedeutic students by making individual
          performance within the project group clear and discussable?
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Outcome
        </Text>
        <Text>
          Create an open platform where students and teachers can get clear but
          anonymous insights into team dynamics and performance over the track
          of their foundation year.
        </Text>
      </Section>
      <Section>
        <Text variant='note'>Gain quick insights into your performance</Text>
        <Safari
          src='/athena/dashboard.png'
          className='mx-auto'
          alt='A screenshot of the Athena platform showcasing the insights of a student performance'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Feedback
        </Text>
        <Text>
          Giving or asking for feedback can be a tough task for propaedeutic
          students, <strong>especially</strong> in a new team.
        </Text>
        <Text>
          Even though teachers are having weekly meetings with student teams
          frustrations mostly come at the end of the projects.
        </Text>
        <Text>
          Sometimes the feedback comes as late as after receiving the
          (disappointing) grade of the project.
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Teachers insights into feedback
        </Text>
        <Safari
          src='/athena/feedback.png'
          className='mx-auto'
          alt='A screenshot of the Athena platform showing the teachers view on team feedback'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          A contract
        </Text>
        <Text>
          With Athena, students of a project team are creating a contract at the
          start of the project with each other. This contract contains all the
          indicators on which the students will give each other feedback upon.
        </Text>
        <Text>The indicators are divided into 4 competences;</Text>
        <Text as='ol' className='mb-28'>
          <li>Attitude</li>
          <li>Accountability</li>
          <li>Knowledge development</li>
          <li>Functioning within the group</li>
        </Text>
        <Text>
          Project coordinators have the ability to define initial indicators
          that students can choose for their contract. Additionally, Athena
          enables each team to make their own indicators that they believe the
          entire team should held accountable for.
        </Text>
        <Text>
          All students within a project team give weekly feedback to each other
          on the agreed upon indicators.
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Insights into trello activities
        </Text>
        <Safari
          src='/athena/workload.png'
          className='mx-auto'
          alt='A screenshot of the Athena platform showing the trello activities of the student team'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Anonymous
        </Text>
        <Text>
          As the purpose of Athena is to give more insight into team dynamics
          Athena is built to make sure students are giving honest feedback.
        </Text>
        <Text>
          Therefore, all feedback given within Athena is anonymized for both
          students and teachers. Athena only shows the outcome of the feedback
          per student but will never show who gave what feedback.
        </Text>
      </Section>
      <Section as='figure'>
        <Safari
          src='/athena/workload_2.png'
          className='mx-auto'
          alt='A screenshot of the Athena platform showing the trello activities of the student team'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Performance
        </Text>
        <Text>
          Besides feedback as an indicator in team dynamics, performance and
          division of tasks are sometimes hard to see for project groups and
          teachers alike.
        </Text>
        <Text>
          Some teachers of CMD are using a scrum-like approach with their
          project teams in order to follow the progress of a project. Athena has
          the option to connect any project group to a trello board if a teacher
          would like to.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          From graduation project to something students could actually use
        </Text>
        <Text>
          Athena started as a graduation project, which would have ended at the
          prototype. Making it real meant it had to fit into a flow students
          already had. That was the constraint that pulled in LDAP: HvA
          students log in with their school credentials anywhere else they go,
          so Athena had to do the same. Asking them to register a new account
          for a feedback tool would have killed adoption before the first
          weekly cycle.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          What we ran into
        </Text>
        <Text>
          The honest part: students could not care less. Once Athena went into
          a real cohort, weekly feedback became a chore on top of project work,
          not a tool that helped. Engagement was low and uneven; in most teams
          it became a burden teachers had to push, not something students
          reached for.
        </Text>
        <Text>
          In retrospect, the design assumed students wanted clearer team
          dynamics. They mostly wanted the project to be over. A version that
          surfaced the same signals from data they were already producing —
          Trello activity, commits, attendance — without asking them to write
          weekly feedback, would have stood a much better chance.
        </Text>
      </Section>
      <aside>
        <Links
          title='References'
          links={[
            [
              'https://github.com/xiduzo/afstudeerproject_backend',
              'Code (server)',
            ],
            ['https://github.com/xiduzo/afstudeerproject', 'Code (app)'],
          ]}
        />
      </aside>
    </>
  );
}
