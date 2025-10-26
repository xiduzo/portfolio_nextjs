import { Hero } from '@/components/custom/hero';
import { Section } from '@/components/custom/section';
import { Image } from '@/components/custom/image';
import { Text } from '@/components/custom/text';
import Link from 'next/link';
import Alert from '@/components/custom/alert';
import { Safari } from '@/components/magic-ui/safari';
import { Links } from '@/components/custom/links';
import { Technologies } from '@/components/custom/technologies';
import { TLDR } from '@/components/custom/tldr';

export default function Page() {
  return (
    <>
      <Hero
        title='VeileNext'
        subtitle='Modernize the biggest flower auction in the world'
        publishDate='Jul 15 2021'
        emoji='1F490'
        readTime={8}
        className='bg-indigo-300 dark:bg-indigo-900'
      />
      <Technologies
        technologies={[
          'AWS',
          'Websockets',
          'React',
          'Cypress',
          'Github actions',
          'SonarCube',
          'Storybook',
        ]}
      />
      <TLDR
        lines={[
          "Led the modernization of Royal Flora Holland's flower auction system from monolithic .NET applications to cloud-native microservices.",
          'Replaced UDP messaging with WebSockets, implemented CI/CD pipelines, and created a web-based React interface.',
          'Successfully completed pilot phase and rolled out to all auction locations.',
        ]}
      />
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          The auction back in 1940
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/aalsmeer_1940.jpg'
          alt='The flower auction in Aalsmeer in 1940'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          A distinguished auction
        </Text>
        <Text>
          For over 100 years,{' '}
          <Link href='https://www.royalfloraholland.com/en' target='_blank'>
            Royal Flora Holland
          </Link>{' '}
          (RFH) has been a leading player in global flower trading and hosts the
          worlds&apos; largest flower auction.
        </Text>
        <Text>
          As a cooperative of growers, RFH has centralized the supply of flowers
          and plants by combining multiple auction locations.
        </Text>
        <Text>
          While RFH has automated many auction processes and{' '}
          <Link
            href='https://www.conclusion.nl/application-innovation/cases/de-applicatie-transformatie-naar-de-aws-public-cloud-voor-royal-floraholland'
            target='_blank'
          >
            transitioned to the public cloud
          </Link>{' '}
          the underlying .NET, Windows-based, applications{' '}
          <Link
            href='https://aws.amazon.com/products/storage/lift-and-shift'
            target='_blank'
          >
            remained unchanged
          </Link>
          .
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          Flowers being sold &ldquo;Underneath the clock&rdquo;
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/beneath_the_clock.jpg'
          alt='Flowers being physically moved underneath the clock on rail tracks build at the auction location'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Breaking the status quo
        </Text>
        <Text>
          Royal Flora Hollands&apos; old physical processes are built into many
          tools, making automation a key aspect of their digital transformation.
        </Text>
        <Text>
          This is evident in the digital interfaces and processes that still
          reflect the traditional auctioning <em>underneath the clock</em>.
        </Text>
        <Text>
          The challenge, now, is to modernize the real-time auction using the
          public cloud, while navigating a complex environment where{' '}
          <Link
            href='https://amstelveenblog.nl/2021/02/20/protest-tegen-bloemenveiling'
            target='_blank'
          >
            users resist change
          </Link>
          .
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Status quo architecture of the processes and tools that mimic the
          physical auction
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/physical_processes.jpg'
          alt='A schematic overview of the processes and tools which have been build to model the physical flower auction'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Our approach
        </Text>
        <Text>
          Modernizing the technology stack by migrating from monolithic
          applications to microservices and replacing old desktop applications
          with web-based technologies. All the while emphasizing user needs in
          the development process of an almost greenfield system.
        </Text>
        <Text variant='note' className='mt-14'>
          Proposed new architecture
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/proposed_architecture.png'
          alt='A schematic overview of the proposed new architecture'
        />
      </Section>
      <Section>
        <Alert icon='Brain' intent='success'>
          <Text>
            All details have been left-out of the architecture schematics for
            competitive reasons.
          </Text>
          <Text>
            <Link href='mailto:mail@sanderboer.nl' className='underline'>
              Let&apos;s grab a beer
            </Link>{' '}
            and poke my brain about software-architecture.
          </Text>
        </Alert>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          History
        </Text>
        <Text>
          A{' '}
          <Link
            href='https://www.youtube.com/watch?v=uAdmzyKagvE'
            target='_blank'
          >
            Dutch Auction
          </Link>{' '}
          has been the traditional way of selling flowers in the Netherlands,
          and therefore at Royal Flora Holland.
        </Text>
        <Text>
          This auction process involves transporting flowers, from all over the
          world, to the auction site where auctioneers use a mechanical clock to
          set a suitable price.
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Auctioning with a mechanical clock
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/physical_clock.png'
          alt='An auctioneer auctioning flowers underneath a mechanical clock'
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Automation
        </Text>
        <Text>
          During the automation of the flower auction, several tools and
          processes were developed to support all the physical processes. These
          include digital buying locations such as the <em>Tribune Werkplek</em>{' '}
          and the remote buying application, <em>Kopen Op Afstand</em>, which
          enable buyers to purchase from anywhere in the world<sup>1</sup>.
        </Text>
        <Text>
          Tools like{' '}
          <Link
            href='https://www.hortipoint.nl/vakbladvoordebloemisterij/floraholland-voert-beeldveilen-in-op-alle-klokken-rijnsburg'
            target='_blank'
          >
            Beeldveilen
          </Link>{' '}
          allowed buyers to inspect flowers and plants without being physically
          present at the auction.
        </Text>
        <Text>
          While{' '}
          <Link href='https://www.floriday.io' target='_blank'>
            Floriday
          </Link>{' '}
          has modernized the supply chain of Royal Flora Holland, the real-time
          auction, where auctioneers sell flowers and plants to buyers
          worldwide, still relies on outdated systems.
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>
              While buyers still prefer to see and touch the flowers they are
              about to buy and were sceptical about online tools, this adoption
              has been accelerated by the COVID-19 pandemic
            </li>
          </ol>
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Auctioning with current systems
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/current_auctioning.jpg'
          alt="Auctioning with current systems as the 'Tribune werkplek', 'Kopen op afstand' and 'beeldveilen'"
        />
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Modernize
        </Text>
        <Text>
          While a lot of efford has been put into automize the auction, to
          update the flower auction to modern standards, we identified four
          areas that required improvement:
        </Text>
        <Text as='ol'>
          <li>
            The systems were constructed as monolithic entities that are heavily
            inter-connected and hard to change.
          </li>
          <li>
            <code>UDP</code> is used to send instantaneous messages to clients.
            Twice, just to ensure all clients receive the correct data.
          </li>
          <li>
            Releases are planned and scheduled with multiple release-freezes per
            year.
          </li>
          <li>Clients exclusive to Windows are used.</li>
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          1. Micro-services
        </Text>
        <Text size='sm'>
          Untangling the highly intertwined current systems of Royal Flora
          Holland by transforming the monolithic applications into{' '}
          <em>micro-services</em>.
        </Text>
        <Text size='sm'>
          To ensure clear separation of concerns, each micro-service is{' '}
          <strong>responsible for a single task</strong>, while still allowing
          interdependence among services.
        </Text>
        <Text size='sm'>
          The micro-services are running on cloud native building blocks and
          utilize standard cloud patterns developed by{' '}
          <Link
            href='https://www.conclusion.nl/application-innovation'
            target='_blank'
          >
            Conclusion Application Innovation
          </Link>
          . This architecture allows each service to be individually scalable
          based on the required load for any given (date-)time.
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          2. Websockets
        </Text>
        <Text size='sm'>
          The current systems use <code>UDP</code>/<code>multi-cast</code> to
          broadcast messages to all active buyers. Although this is a proven
          technology, there are some issues that require the system to send
          messages multiple times to ensure that all clients receive the correct
          data.
        </Text>
        <Text size='sm'>
          To replace <code>UDP</code> messaging, any new technology must meet
          two requirements:
        </Text>
        <Text as='ul' size='sm'>
          <li>Ensure that all clients receive any message send</li>
          <li>
            Provide an average <strong>maximum latency of 90ms</strong> from
            anywhere in the world
          </li>
        </Text>
        <Text size='sm'>
          After extensively researching various technologies
          <sup>1</sup>, and their implementations, we determined that the{' '}
          <Link
            href='https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0'
            target='_blank'
          >
            .NET implementation
          </Link>{' '}
          was the most appropriate solution for <em>our</em> needs.
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>
              We investivated Native Websockets, socket.io, SignalR, gRPC, and
              WebRTC
            </li>
          </ol>
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          3. Continuous Integration / Continuous Delivery (CI/CD)
        </Text>
        <Text size='sm'>
          The new auction system is developed using complete CI/CD tooling,
          eliminating planned releases and freeze periods. To ensure quick and
          reliable releases, all new code is thoroughly tested and monitored.
        </Text>
        <Text size='sm'>
          The frontend uses{' '}
          <Link href='https://storybook.js.org' target='_blank'>
            Storybook
          </Link>{' '}
          to develop and test components in isolation, while also bringing
          business requirements, development, and design together.
        </Text>
      </Section>
      <Section as='figure'>
        <Safari
          className='w-full my-28'
          src='/veilenext/storybook_scaled.png'
          alt='Showcasing how we use Storybook to develop and test components in isolation'
        />
      </Section>
      <Section>
        <Text size='sm'>
          End-to-end tests are performed using{' '}
          <Link
            href='https://docs.cypress.io/guides/overview/why-cypress'
            target='_blank'
          >
            Cypress
          </Link>{' '}
          to ensure seamless integration of components and expected behavior of
          the application in real-world scenarios.
        </Text>
        <Text size='sm'>
          Quality gates are integrated into the automated release pipeline to
          prevent untested code from reaching production. The releases are
          continuously monitored with tools such as{' '}
          <Link href='https://www.cypress.io/dashboard' target='_blank'>
            Cypress dashboard
          </Link>{' '}
          and{' '}
          <Link href='https://www.sonarqube.org' target='_blank'>
            SonarCube
          </Link>
          .
        </Text>
      </Section>
      <Section>
        <Text as='h3' variant='subheading' size='sm'>
          4. A web interface
        </Text>
        <Text size='sm'>
          Buying flowers and plants at the auction can be inconvenient for new
          buyers as they have to install software that runs exclusively on
          Windows.
        </Text>
        <Text size='sm'>
          In addition, this software requires manual updates to access new
          features or bug fixes. Users must also install and operate a VPN
          client to connect to the Royal Flora Holland network in order to
          receive the <code>UDP</code> messages.
        </Text>
        <Text size='sm'>
          To improve accessibility, we have developed a new system that utilizes
          a browser-based React application. This application can be accessed
          through any device with an internet connection, including desktops,
          tablets, and even phones.
        </Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          Current auction interface
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/veilenext/status_quo.png'
          alt='Status quo of the auctioneers interface'
        />
      </Section>
      <Section as='figure' className='flex flex-col items-center'>
        <Text variant='note' as='figcaption'>
          Exploratory design to spark conversations
        </Text>
        <Safari
          src='/veilenext/exploration_scaled.png'
          alt='Exploratory design of the auctioneer interface to spark conversations'
        />
      </Section>
      <Section>
        <Text>
          The project is still under active development and is currently in the{' '}
          <Link
            href='https://www.royalfloraholland.com/en/campaign/on-site-auctioning-eelde'
            target='_blank'
          >
            pilot phase
          </Link>{' '}
          with a small group of growers and buyers<sup>1, 2</sup>.
        </Text>
        <Text as='aside' className='mt-8 text-base'>
          <ol className='text-sm text-muted-foreground'>
            <li>as of writing, July 15th 2021</li>
            <li>
              Edit (January 30th 2025): After extensive{' '}
              <Link
                href='https://www.royalfloraholland.com/en/news-2024/week-51/auction-developments-in-2024-2025'
                target='_blank'
              >
                testing and experimenting
              </Link>
              , the pilot phase has been successfully completed and the system
              is{' '}
              <Link
                href='https://www.royalfloraholland.com/nieuws-2024/week-49/veilen-via-floriday-in-eelde-live'
                target='_blank'
              >
                now being rolled
              </Link>{' '}
              out to all auction locations.
            </li>
          </ol>
        </Text>
      </Section>
      <aside>
        <Links
          title='Mentioned at'
          links={[
            [
              'https://www.conclusion.nl/werken-bij/nieuws/met-verschillende-ontwikkelaars-werken-aan-een-doel',
              'Conclusion Application Innovation',
            ],
            [
              'https://www.meetup.com/nl-NL/cypress-meetup-group-netherlands/events/277899235',
              'Meetup: how we test websockets in VeileNext using Cypress',
            ],
          ]}
        />
      </aside>
    </>
  );
}
