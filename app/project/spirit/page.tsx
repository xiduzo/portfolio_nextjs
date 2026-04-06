import { Hero } from '@/components/custom/hero';
import { Quote } from '@/components/custom/quote';
import { Section } from '@/components/custom/section';
import { Face } from '@/components/custom/spirit/face';
import { Technologies } from '@/components/custom/technologies';
import { Text } from '@/components/custom/text';
import { Iphone15Pro } from '@/components/magic-ui/iphone-15-pro';
import { Image } from '@/components/custom/image';
import NextImage from 'next/image';
import Link from 'next/link';
import { Links } from '@/components/custom/links';
import { TLDR } from '@/components/custom/tldr';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type PortfolioProjectSeo,
  portfolioProjectJsonLdFromSeo,
  portfolioProjectMetadata,
} from '@/lib/schema';

const SEO: PortfolioProjectSeo = {
  title: 'Spirit — OCD therapy companion & mood tracking',
  description:
    'Spirit is a gamified therapy companion for people with OCD: mood logging, exposure-style exercises, and gentle structure around compulsion cycles—presented at Games for Health Europe.',
  path: '/project/spirit',
  openGraphTitle: 'Spirit — OCD therapy companion app',
  openGraphDescription:
    'Design and build notes for a mobile app that supports patients between clinical sessions.',
};

export const metadata = portfolioProjectMetadata(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={portfolioProjectJsonLdFromSeo(SEO)} />
      <Hero
        title='Spirit'
        subtitle='Empower patients who suffer from Obsessive-Compulsive Disorder (OCD)'
        readTime={8}
        publishDate='Aug 08 2019'
        emoji='1FA9C'
        className='bg-orange-300 dark:bg-orange-900'
      />
      <Technologies
        technologies={[
          'AWS Amplify',
          'Angular',
          'Highcharts',
          'Heroku',
          'Ionic',
        ]}
      />
      <TLDR
        lines={[
          'OCD patients often drop out of therapy because doing exercises alone — without guidance or visible progress — is hard to stay motivated for.',
          'Spirit makes those exercises feel less isolating: monster metaphors for obsessions, playful mood tracking, and a progress diary that stays on your device.',
          'Presented at Games for Health Europe.',
        ]}
      />
      <Quote cite='Anonymous patient'>
        <strong>A monster in my mind</strong>
        <br />
        OCD has had a profound impact on my life, muffling my school grades,
        discontinuing my social life and even forcing me to drop out of
        university.
      </Quote>
      <Section>
        <Text as='h2' variant='subheading'>
          Problem
        </Text>
        <Text>
          Obsessive-Compulsive Disorder (OCD) can be a debilitating condition
          that is characterized by unreasonable thoughts and unwarranted fears,
          often referred to as obsessions, that can cause significant distress
          and anxiety in affected patients.
        </Text>
        <Text>
          Fortunately, Cognitive Behavioral Therapy (CBT) involving Exposure
          Response Prevention (ERP) has been proven to be an effective treatment
          for OCD.
        </Text>
        <Text>
          However, a significant number of patients drop out of therapy early,
          and many do not perform the exposure exercises between sessions
          because they lack the necessary guidance to monitor their progress and
          stay motivated.
        </Text>
      </Section>
      <Section
        className='grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12'
        as='figure'
      >
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/onboarding_1.png'
            className='w-full'
            alt='Oboarding screen explaining how obsessions can feel like little monsters living in your mind'
          />
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/onboarding_2.png'
            className='w-full'
            alt='Onboarding screen explaining how the monster will grow if you will allow them to occupy space in your mind'
          />
        </div>
        <div className='col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/onboarding_3.png'
            className='w-full'
            alt='Onboarding screen explaining how the monster will shrink by doing exercises to allow them to occupy less space in your mind'
          />
        </div>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Challenge
        </Text>
        <Text>
          How can we engage patients following the Cognitive Behavioral Therapy
          (CBT) in a more meaningful way so that they keep being engaged with
          their exercises in between sessions.
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Image
          src='/spirit/sketch.png'
          alt='A photograph of various sketches of the Spirit app while in the concepting phase of the project'
          className='w-full'
          width={1920}
          height={1080}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Outcome
        </Text>
        <Text>
          Empowering patients to do their exposure exercises on a regular basis
          by making mood tracking more accessible and engaging through
          gamification and playful design, creating a safe and comfortable
          environment for patients to do their exercises.
        </Text>
        <Text>
          Spirit is suitable to be applied for self-treatment or, preferably,
          under the auspices of an expert therapist.
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' className='mt-32' as='figcaption'>
          The promise of Spirit
        </Text>
        <div className='flex'>
          <Face
            initialPhase={5}
            text='Worry less'
            className='grow rounded-none'
          />
          <Face
            initialPhase={1}
            text='Live more'
            className='grow rounded-none'
          />
        </div>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Gamification for behavior change
        </Text>
        <Text>
          By implementing gamification techniques we try to empower patients to
          improve their life by helping them to understand the benefits of
          following the Exposure Response Prevention (ERP) therapy in a playful
          way.
        </Text>
      </Section>
      <Section className='flex items-center flex-col mb-32'>
        <Text variant='note'>What is your mood?</Text>
        <Face initialPhase={1} />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Narrative
        </Text>
        <Text>
          Spirit emphasizes patients’ compulsions as the monsters they sometimes
          feel in their minds. By completing exposure exercises the monsters
          will shrink into unharmful babies which can be controlled by the
          patient.
        </Text>
        <Text>
          For the basis of the narrative within Spirit, we make use of the{' '}
          <Link
            href='https://www.psychologytools.com/resource/avoidance-hierarchy'
            target='_blank'
          >
            Avoidance hierarchy
          </Link>
          .
        </Text>
        <Text>
          The avoidance hierarchy, often visualized as a ladder, is a Cognitive
          Behavioral Therapy (CBT) worksheet that represents a fear or avoidance
          hierarchy that helps patients to plan exposure tasks.
        </Text>
        <Text>
          Each level in this ladder will be externalized by a different monster
          in Spirit to represent their problematic obsessive thoughts and
          compulsive behaviors.
        </Text>
        <Text variant='note' className='mt-32'>
          Monsters representing the Cognitive Behavioral Therapy (CBT) worksheet
          ladder
        </Text>
        <Image
          src='/spirit/monsters.svg'
          alt='All the monsters that represent the Cognitive Behavioral Therapy (CBT) worksheet ladder'
          className='w-full'
          width={1920}
          height={1080}
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Playful
        </Text>
        <Text>
          Spirit is making use of playful design to make mood tracking more
          accessible and engaging.
        </Text>
        <Text>
          Before and after each exposure exercise patients will be prompted to
          rate their anxiety as well as the urge for obsessive thoughts or
          compulsive behavior.
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Image
          src='/spirit/user_flow.png'
          alt='A photograph making the user flow of the Spirit app using printed out screens of the application'
          className='w-full'
          width={1920}
          height={1080}
        />
      </Section>
      <Section
        // images are nice but not necessary for the content
        className='grid-cols-12 gap-4 lg:gap-6 xl:gap-12 hidden'
        aria-hidden='true'
      >
        <div className='lg:mt-32 col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/phase_1.png'
            className='w-full'
            alt='In app screen showing the users mood to be rated 1/5'
          />
        </div>
        <div className='lg:-mt-32 col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/phase_3.png'
            className='w-full'
            alt='In app screen showing the users mood to be rated 3/5'
          />
        </div>
        <div className='col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/phase_5.png'
            className='w-full'
            alt='In app screen showing the users mood to be rated 5/5'
          />
        </div>
        <div className='lg:col-start-2 lg:col-span-4 col-span-12 md:col-span-6'>
          <Iphone15Pro
            src='/spirit/phase_4.png'
            className='w-full'
            alt='In app screen showing the users mood to be rated 4/5'
          />
        </div>
        <div className='lg:-mt-32 lg:col-start-7 lg:col-span-4 col-span-12 md:col-span-6'>
          <Iphone15Pro
            src='/spirit/phase_2.png'
            className='w-full'
            alt='In app screen showing the users mood to be rated 2/5'
          />
        </div>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Quantified self
        </Text>
        <Text>
          By giving insights into performed exercises patients will be guided
          into performing their exercises on a regular basis. The patients will
          be able to see the effect of their Exposure Response Prevention (ERP)
          treatment progress outside of the sessions with their therapist.
        </Text>
        <Text>
          All exercises will be kept in a <strong>local</strong> diary for the
          patient to reflect upon and gain insight into their progress over
          time.
        </Text>
        <Text>
          Entries can be shared with the therapist{' '}
          <em>only if the patient desires so</em>.
        </Text>
      </Section>
      <Section
        className='grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12'
        as='figure'
      >
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/logbook.png'
            className='w-full'
            alt='A screen in the Spirit app showing the logbook of exercises that the user has done'
          />
        </div>
        <div className='lg:-mt-32 col-span-12 md:col-span-6 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/personal_goal.png'
            className='w-full'
            alt="A screen in the Spirit app showing the personal goal of the patient and configurable 'fear ladder'"
          />
        </div>
        <div className='lg:mt-32 col-span-12 md:col-span-6 md:col-start-4 lg:col-start-9 lg:col-span-4'>
          <Iphone15Pro
            src='/spirit/badge.png'
            className='w-full'
            alt='A screen in the Spirit all showing the badges that the user has earned by doing exercises'
          />
        </div>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Goals & nudges
        </Text>
        <Text>
          Setting a long term goal will remind the patient of their intrinsic
          motivation for doing their exercises.
        </Text>
        <Text>
          Besides this Spirit provides short term goals in the form of badges
          which can be earned by doing your exercises on a regular basis,
          nudging you to achieve your long term personal goal.
        </Text>
      </Section>
      <Section
        className='grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12'
        as='figure'
      >
        <Text variant='note' className='col-span-12' as='figcaption'>
          Some badge designs
        </Text>
        <div className='col-span-3'>
          <NextImage
            src='/spirit/icon_gratification.svg'
            alt='A badge for gratification'
            className='w-full'
            width={1920}
            height={1080}
          />
        </div>
        <div className='col-span-3'>
          <NextImage
            src='/spirit/icon_trophy.svg'
            alt='A badge for overcoming a'
            className='w-full'
            width={1920}
            height={1080}
          />
        </div>
        <div className='col-span-3'>
          <NextImage
            src='/spirit/icon_goal.svg'
            alt='A badge for reaching your goal'
            className='w-full'
            width={1920}
            height={1080}
          />
        </div>
        <div className='col-span-3'>
          <NextImage
            src='/spirit/icon_narrative.svg'
            alt="A badge for 'beating' a monster"
            className='w-full'
            width={1920}
            height={1080}
          />
        </div>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          Presenting Spirit at the Games for Health conference
        </Text>
        <Image
          src='/spirit/games_for_health.png'
          alt='A photograph making the user flow of the Spirit app using printed out screens of the application'
          className='w-full'
          width={1920}
          height={1080}
        />
      </Section>
      <aside>
        <Links
          title='Invited to'
          links={[
            [
              'https://web.archive.org/web/20220526214733/https://www.gamesforhealtheurope.org/speaker/sander-boer',
              'Games for health Europe',
            ],
          ]}
        />
        <Links
          title='In collaboration with'
          links={[
            ['https://carmenscherbaum.myportfolio.com', 'Carmen Scherbaum'],
            [
              'https://clinical-neuropsychology.de/steffen-moritz',
              'Prof. Dr. Steffen Moritz',
            ],
          ]}
        />
        <Links
          title='References'
          links={[
            ['https://github.com/xiduzo/ocdTreatmentApp', 'Prototype (code)'],
          ]}
        />
      </aside>
    </>
  );
}
