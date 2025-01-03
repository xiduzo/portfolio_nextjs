import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/custom/app-sidebar";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import Script from "next/script";
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
} from "@/components/custom/typography";
import ObserverProvider from "@/providers/ObserverProvider";
import { CallToAction } from "@/components/custom/call-to-action";

export const metadata: Metadata = {
    title: "Portfolio Sander Boer",
    description:
        "Hello world! My name is Sander and I am a passionate developer with a creative mind™. I love to create tools that enhance the performance of professionals and empower individuals.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <Script src="/theme.js" />
            </head>
            <body
                className={`${headings.variable} ${subHeadings.variable} ${body.variable} ${note.variable} antialiased`}
            >
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
                                    <AvatarFallback>XDZ</AvatarFallback>
                                </Avatar>
                            </Link>
                        </header>
                        <article>
                            <ObserverProvider>{children}</ObserverProvider>
                        </article>
                        <footer className="py-64 mt-64 bg-muted text-muted-foreground px-3 md:px-6 text-center">
                            <Text
                                variant="heading"
                                className="mb-4 break-words text-wrap"
                            >
                                Enough scrolling,
                            </Text>
                            <Text className="font-extralight mb-10">
                                Want to make something together?
                            </Text>
                            <Text
                                as="div"
                                className="flex justify-center mt-20"
                            >
                                <Link href="mailto:mail@sanderboer.nl">
                                    <CallToAction
                                        colorFrom="#e2e8f0"
                                        colorTo="#f59e0b"
                                    >
                                        Let&apos;s have a 🍺
                                    </CallToAction>
                                </Link>
                            </Text>
                        </footer>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
