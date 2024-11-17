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
    subHeadings,
    Text,
} from "@/components/custom/typography";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Portfolio Sander Boer",
    description:
        "Hello world! My name is Sander and I am a passionate developer with a creative mind™. I love to create tools that enhance the performance of professionals or/and empower individuals.",
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
                className={`${headings.variable} ${subHeadings.variable} ${body.variable} antialiased`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-50">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <BreadCrumbs />
                            <section hidden className="grow flex"></section>
                            <Link
                                href="/about"
                                className="hover:cursor-help flex items-center space-x-4 hover:bg-muted-foreground/10 transition duration-200 p-1 px-2 rounded-md"
                            >
                                <Text as="span" className="text-sm">
                                    Sander Boer
                                </Text>
                                <Avatar>
                                    <AvatarImage
                                        src="/me.jpeg"
                                        alt="Sander Boer"
                                    />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>
                            </Link>
                        </header>
                        <article className="min-h-screen overflow-x-hidden">
                            {children}
                        </article>
                        <footer className="py-64 mt-64 bg-muted px-6 text-center">
                            <Text variant="heading" className="mb-4">
                                Enough scrolling,
                            </Text>
                            <Text className="text-muted-foreground font-extralight mb-10">
                                Want to make something together?
                            </Text>
                            <Link
                                href="mailto:mail@sanderboer.nl"
                                className="p-6"
                            >
                                <Button variant="link" className="text-3xl">
                                    Let&apos;s have a 🍺
                                </Button>
                            </Link>
                        </footer>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
