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
import clsx from "clsx";

type Item = {
    name: string;
    link?: string;
    state?: string;
    children?: Item[];
};

const items: Item[] = [
    {
        name: "Get to know me",
        children: [
            {
                name: "README.md",
                link: "/about",
            },
            {
                name: "accessibility.md",
                link: "/accessibility",
                state: "♥️",
            },
        ],
    },
    {
        name: "Things I made",
        children: [
            {
                name: "archive",
                children: [
                    {
                        name: "Athena.md",
                        link: "/project/athena",
                    },
                    {
                        name: "LiveStock.md",
                        link: "/project/livestock",
                    },
                    {
                        name: "Spirit.md",
                        link: "/project/spirit",
                    },
                    {
                        name: "VeileNext.md",
                        link: "/project/veilenext",
                    },
                ],
            },
            {
                name: "highlighted",
                children: [
                    {
                        name: "Fissa.md",
                        link: "/project/fissa",
                    },
                    {
                        name: "Microflow.md",
                        link: "/project/microflow",
                        state: "new",
                    },
                ],
            },
            { name: "all.md", link: "/project" },
        ],
    },
    {
        name: "Things I wrote",
        children: [
            {
                name: "2023",
                children: [
                    {
                        name: "<Suspense/>.md",
                        link: "/post/2023/suspense",
                    },
                ],
            },
            {
                name: "2024",
                children: [
                    {
                        name: "talking-to-water.md",
                        link: "/post/2024/talking-to-water",
                    },
                    {
                        name: "testing.md",
                        link: "/post/2024/testing",
                    },
                    { name: "zod.md", link: "/post/2024/zod" },
                ],
            },
            { name: "all.md", link: "/post" },
        ],
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarContent>
                {items.map((item) => (
                    <SidebarGroup key={item.name}>
                        <SidebarGroupLabel>{item.name}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.children?.map((item, index) => (
                                    <Tree key={index} item={item} />
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

function Tree(props: { item: Item }) {
    const pathname = usePathname();

    const [openItems, setOpenItems] = useLocalStorage<string[]>("open-items", [
        "highlighted",
        "2024",
    ]);

    const { name, link, children } = props.item;
    console.log(props.item);

    if (!children?.length) {
        return (
            <Link href={link ?? "/404"}>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        isActive={name === "button.tsx"}
                        className={clsx(
                            "",
                            `${pathname.endsWith(link ?? "") ? "bg-muted/70" : ""}`,
                        )}
                    >
                        <File />
                        {name}
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="text-muted-foreground">
                        {props.item.state}
                    </SidebarMenuBadge>
                </SidebarMenuItem>
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
            <SidebarMenuBadge>{props.item.state}</SidebarMenuBadge>
        </SidebarMenuItem>
    );
}
