"use client";

import * as React from "react";
import { File, Folder, FolderOpen } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { usePathname } from "next/navigation";

type Item = {
    name: string;
    link?: string;
    children?: Item[];
};

const data = {
    standalones: [
        {
            file: "README.md",
            link: "/about",
            state: "",
        },
        {
            file: "contact.md",
            link: "/contact",
            state: "",
        },
        {
            file: "accessibility.md",
            link: "/accessibility",
            state: "",
        },
    ],
    tree: [
        {
            name: "cases",
            children: [
                {
                    name: "archive",
                    children: [
                        {
                            name: "Athena.md",
                            link: "/project/athena",
                        },
                        { name: "LiveStock.md", link: "/project/livestock" },
                        { name: "Spirit.md", link: "/project/spirit" },
                        { name: "VeileNext.md", link: "/project/veilenext" },
                    ],
                },
                {
                    name: "highlighted",
                    children: [
                        {
                            name: "Fissa.md",
                            link: "/project/fissa",
                        },
                        { name: "Microflow.md", link: "/project/microflow" },
                    ],
                },
                { name: "all.md", link: "/project" },
            ],
        },
        {
            name: "posts",
            children: [
                {
                    name: "2023",
                    children: [
                        { name: "<Suspense>.md", link: "/post/suspense" },
                    ],
                },
                {
                    name: "2024",
                    children: [
                        {
                            name: "talking-to-water.md",
                            link: "/post/talking-to-water",
                        },
                        { name: "testing.md", link: "/post/testing" },
                        { name: "zod.md", link: "/post/zod" },
                    ],
                },
                { name: "all.md", link: "/post" },
            ],
        },
    ] satisfies Item[],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

    return (
        <Sidebar {...props}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Get to know me</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.standalones.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            className={`${pathname.endsWith(item.link) ? "bg-muted/70" : ""}`}
                                        >
                                            <File />
                                            {item.file}
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>
                                            {item.state}
                                        </SidebarMenuBadge>
                                    </SidebarMenuItem>
                                </Link>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Things I do</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.tree.map((item, index) => (
                                <Tree key={index} item={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

function Tree({ item }: { item: Item }) {
    const pathname = usePathname();

    const [openItems, setOpenItems] = useLocalStorage<string[]>("open-items", [
        "cases",
        "highlighted",
        "2024",
    ]);

    const { name, link, children } = item;

    if (!children?.length) {
        return (
            <Link href={link ?? "/404"}>
                <SidebarMenuButton
                    isActive={name === "button.tsx"}
                    className={`${pathname.endsWith(link ?? "") ? "bg-muted/70" : ""}`}
                >
                    <File />
                    {name}
                </SidebarMenuButton>
            </Link>
        );
    }

    return (
        <SidebarMenuItem>
            <Collapsible
                className="group/collapsible [&[data-state=open]>button>svg:first-child]:hidden [&[data-state=open]>button>svg:last-child]:block"
                defaultOpen={openItems.includes(name)}
            >
                <CollapsibleTrigger
                    asChild
                    onClick={() => {
                        if (openItems.includes(name)) {
                            setOpenItems(
                                openItems.filter((item) => item !== name),
                            );
                        } else {
                            setOpenItems([...openItems, name]);
                        }
                    }}
                >
                    <SidebarMenuButton>
                        <Folder />
                        <FolderOpen className="hidden" />
                        {name}
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub className="mr-0">
                        {children.map((subItem, index) => (
                            <Tree key={index} item={subItem} />
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}
