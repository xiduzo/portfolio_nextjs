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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  body,
  headings,
  note,
  subHeadings,
  Text,
} from '@/components/custom/text';
import ObserverProvider from '@/providers/ObserverProvider';
import { CallToAction } from '@/components/custom/call-to-action';
import { Theme } from '@/components/custom/theme';
import { LazyPresence } from '@/components/custom/lazy-presence';

import { cookies } from 'next/headers';
import { THEME_STORAGE_KEY } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { MailIcon, SmileIcon } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';

import { Analytics } from '@vercel/analytics/next';
import { TableOfContents } from '@/components/custom/table-of-contents';

export const metadata: Metadata = {
  title: {
    default: 'Sander Boer — Developer & Designer',
    template: '%s | Sander Boer',
  },
  description:
    'Developer who turns complex problems into tools people actually enjoy using. Bridging the gap between good engineering and great experience.',
  metadataBase: new URL('https://sanderboer.nl'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanderboer.nl',
    siteName: 'Sander Boer',
    title: 'Sander Boer — Developer & Designer',
    description:
      'Developer who turns complex problems into tools people actually enjoy using.',
    images: [{ url: '/me.jpeg', width: 512, height: 512, alt: 'Sander Boer' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sander Boer — Developer & Designer',
    description:
      'Developer who turns complex problems into tools people actually enjoy using.',
    images: ['/me.jpeg'],
  },
  alternates: {
    canonical: 'https://sanderboer.nl',
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
          rel='preload'
          href='/me.jpeg'
          as='image'
          type='image/jpeg'
        />
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
        className={`${headings.variable} ${subHeadings.variable} ${body.variable} ${note.variable} antialiased`}
      >
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
                  <Avatar>
                    <AvatarImage src='/me.jpeg' alt='Sander Boer' />
                    <AvatarFallback>
                      <SmileIcon className='text-muted-foreground' />
                    </AvatarFallback>
                  </Avatar>
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
