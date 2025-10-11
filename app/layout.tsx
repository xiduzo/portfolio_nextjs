import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/custom/app-sidebar";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadCrumbs } from "@/components/custom/breadcrumbs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
    body,
    headings,
    note,
    subHeadings,
    Text,
} from "@/components/custom/text";
import ObserverProvider from "@/providers/ObserverProvider";
import { CallToAction } from "@/components/custom/call-to-action";
import { Theme } from "@/components/custom/theme";

import { cookies } from "next/headers";
import { THEME_STORAGE_KEY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MailIcon, SmileIcon } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

export const metadata: Metadata = {
    title: "Portfolio Sander Boer",
    description:
        "Hello world! My name is Sander and I am a passionate developer with a creative mind. I love to create things that enhance the performance of professionals and empower individuals.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = (await cookies()).get(THEME_STORAGE_KEY)?.value;

    return (
        <html lang="en" className={theme}>
            <body
                className={`${headings.variable} ${subHeadings.variable} ${body.variable} ${note.variable} antialiased`}
            >
                <a
                    tabIndex={0}
                    className="bg-muted absolute left-0 z-50 m-3 -translate-y-16 p-3 transition focus:translate-y-0 focus:opacity-100 motion-reduce:-z-10 motion-reduce:translate-y-0 motion-reduce:opacity-0 motion-reduce:focus:z-50"
                    href="#main-content"
                >
                    Jump to content
                </a>
                <Theme />
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4 z-30">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <BreadCrumbs />
                            <section hidden className="grow flex"></section>
                            <Link
                                href="/about"
                                className="hover:cursor-help gap-4 flex items-center"
                            >
                                <span className="hidden md:block">
                                    Sander Boer
                                </span>
                                <Avatar>
                                    <AvatarImage
                                        src="/me.jpeg"
                                        alt="Sander Boer"
                                    />
                                    <AvatarFallback>
                                        <SmileIcon className="text-muted-foreground" />
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        </header>
                        <article id="main-content" tabIndex={-1}>
                            <ObserverProvider>{children}</ObserverProvider>
                        </article>
                        <footer className="pt-64 pb-24 mt-64 bg-muted text-muted-foreground px-3 md:px-6 text-center">
                            <Text
                                variant="heading"
                                className="mb-4 break-words text-wrap"
                            >
                                Enough scrolling,
                            </Text>
                            <Text
                                className="font-extralight mb-10"
                                aria-label="Want to make magic together?"
                                as="div"
                            >
                                Want to make{" "}
                                <SparklesText className="font-extralight inline-block text-3xl">
                                    🪄
                                </SparklesText>{" "}
                                together?
                            </Text>
                            <Text
                                as="div"
                                className="flex justify-center mt-20"
                            >
                                <Link
                                    href="mailto:mail@sanderboer.nl"
                                    aria-label="Send me an email"
                                >
                                    <CallToAction icon={<MailIcon />}>
                                        Grab a 🍺 with me
                                    </CallToAction>
                                </Link>
                            </Text>
                            <Link
                                href="https://www.linkedin.com/in/xiduzo/"
                                target="_blank"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="hover:cursor-alias mt-52"
                                >
                                    <Text size="sm">
                                        Or stalk me on LinkedIn
                                    </Text>
                                </Button>
                            </Link>
                        </footer>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
