import type { Metadata } from 'next';
import './globals.css';
import { AppSidebar } from '@/components/custom/app-sidebar';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { BreadCrumbs } from '@/components/custom/breadcrumbs';
import { ProfileAvatar } from '@/components/custom/profile-avatar';
import Link from 'next/link';
import {
  headings,
  mono,
  note,
  Text,
} from '@/components/custom/text';
import ObserverProvider from '@/providers/ObserverProvider';
import { CallToAction } from '@/components/custom/call-to-action';
import { Theme } from '@/components/custom/theme';
import { LazyPresence } from '@/components/custom/lazy-presence';

import { cookies } from 'next/headers';
import { THEME_STORAGE_KEY } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { MailIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
const SparklesText = dynamic(() =>
  import('@/components/ui/sparkles-text').then(m => ({ default: m.SparklesText }))
);

import { Analytics } from '@vercel/analytics/next';
import { TableOfContents } from '@/components/custom/table-of-contents';
import { JsonLd } from '@/components/seo/json-ld';
import { rootJsonLdGraph } from '@/lib/schema';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: 'Sander Boer — Developer & Designer',
    template: '%s | Sander Boer',
  },
  description:
    'Developer and designer Sander Boer builds React and TypeScript products people enjoy. Portfolio, case studies, and articles on testing, Zod, Suspense, creative AI, and pragmatic workflows.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sander Boer',
    title: 'Sander Boer — Developer & Designer',
    description:
      'Developer and designer shipping thoughtful software—React, TypeScript, strong UX, and practical writing on testing and AI workflows.',
    images: [{ url: '/me.jpeg', width: 512, height: 512, alt: 'Sander Boer' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sander Boer — Developer & Designer',
    description:
      'Developer and designer shipping React/TypeScript products with great UX—portfolio, case studies, and technical writing.',
    images: ['/me.jpeg'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get(THEME_STORAGE_KEY)?.value;

  return (
    <html lang='en' className={theme}>
      <head>
        <link rel='icon' href='/icon/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icon/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='64x64'
          href='/icon/favicon-64x64.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='192x192'
          href='/icon/favicon-192x192.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='512x512'
          href='/icon/favicon-512x512.png'
        />
        <meta
          name='msapplication-TileImage'
          content='/icon/favicon-192x192.png'
        />
      </head>
      <body
        className={`${headings.variable} ${mono.variable} ${note.variable} antialiased`}
      >
        <JsonLd data={rootJsonLdGraph()} />
        <a
          tabIndex={0}
          className='bg-muted absolute left-0 z-50 m-3 -translate-y-16 p-3 transition focus:translate-y-0 focus:opacity-100 motion-reduce:-z-10 motion-reduce:translate-y-0 motion-reduce:opacity-0 motion-reduce:focus:z-50'
          href='#main-content'
        >
          Jump to content
        </a>
        <Theme />
        <LazyPresence>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className='sticky top-0 z-30'>
              <header className='flex items-center gap-2 border-b bg-background p-4'>
                <SidebarTrigger className='-ml-1' />
                <Separator orientation='vertical' className='mr-2 h-4' />
                <BreadCrumbs />
                <section hidden className='grow flex'></section>
                <Link
                  href='/about'
                  className='hover:cursor-help gap-4 flex items-center'
                >
                  <span className='hidden md:block'>Sander Boer</span>
                  <ProfileAvatar
                    alt='Sander Boer'
                    className='h-10 w-10'
                    sizes='40px'
                  />
                </Link>
              </header>
              <TableOfContents />
            </div>
            <article id='main-content' tabIndex={-1}>
              <ObserverProvider>{children}</ObserverProvider>
            </article>
            <footer className='pt-64 pb-24 mt-64 bg-muted text-muted-foreground px-3 md:px-6 text-center'>
              <Text variant='heading' className='mb-4 break-words text-wrap'>
                Enough scrolling,
              </Text>
              <Text
                className='font-extralight mb-10'
                aria-label='Want to make magic together?'
                as='div'
              >
                Want to make{' '}
                <SparklesText className='font-extralight inline-block text-3xl'>
                  🪄
                </SparklesText>{' '}
                together?
              </Text>
              <Text as='div' className='flex justify-center mt-20'>
                <Link
                  href='mailto:mail@sanderboer.nl'
                  aria-label='Send me an email'
                >
                  <CallToAction icon={<MailIcon />}>
                    Grab a 🍺 with me
                  </CallToAction>
                </Link>
              </Text>
              <Link
                href='https://www.linkedin.com/in/xiduzo/'
                target='_blank'
                aria-label='Visit my LinkedIn profile'
              >
                <Button
                  variant='ghost'
                  asChild
                  className='hover:cursor-alias mt-52'
                >
                  <Text size='sm'>Or connect with me on LinkedIn</Text>
                </Button>
              </Link>
            </footer>
          </SidebarInset>
        </SidebarProvider>
        </LazyPresence>
        <Analytics />
      </body>
    </html>
  );
}
