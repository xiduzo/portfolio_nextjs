'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { File, Folder, FolderOpen } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { OnlineIndicator } from '@/components/custom/online-indicator';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  playMenuItemClosedSound,
  playMenuItemHoverSound,
  playMenuItemOpenedSound,
} from '@/lib/sound';
import { useIsMobile } from '@/hooks/use-mobile';

type Item = {
  name: string;
  link?: string;
  state?: string;
  children?: Item[];
};

const items: Item[] = [
  {
    name: 'Get to know me',
    children: [
      {
        name: 'README.md',
        link: '/about',
      },
      {
        name: 'accessibility.md',
        link: '/accessibility',
        state: '♥️',
      },
    ],
  },
  {
    name: 'Things I made',
    children: [
      {
        name: 'archive',
        children: [
          {
            name: 'assessor-bot.md',
            link: '/project/assessor-bot',
          },
          {
            name: 'athena.md',
            link: '/project/athena',
          },
          {
            name: 'live-stock.md',
            link: '/project/livestock',
          },
          {
            name: 'spirit.md',
            link: '/project/spirit',
          },
          {
            name: 'veile-next.md',
            link: '/project/veilenext',
          },
        ],
      },
      {
        name: 'highlighted',
        children: [
          {
            name: 'fissa.md',
            link: '/project/fissa',
          },
          {
            name: 'glosario.md',
            link: '/project/glosario',
            state: 'new',
          },
          {
            name: 'microflow.md',
            link: '/project/microflow',
          },
        ],
      },
      { name: 'all.md', link: '/project' },
    ],
  },
  {
    name: 'Things I wrote',
    children: [
      {
        name: '2023',
        children: [
          {
            name: 'suspense.md',
            link: '/post/2023/suspense',
          },
        ],
      },
      {
        name: '2024',
        children: [
          {
            name: 'talking-to-water.md',
            link: '/post/2024/talking-to-water',
          },
          {
            name: 'testing.md',
            link: '/post/2024/testing',
          },
          { name: 'zod.md', link: '/post/2024/zod' },
        ],
      },
      {
        name: '2026',
        children: [
          {
            name: 'designing-intent.md',
            link: '/post/2026/designing-intent',
          },
        ],
      },
      { name: 'all.md', link: '/post' },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {items.map(item => (
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
      <SidebarFooter className='pb-2'>
        <OnlineIndicator />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function Tree(props: { item: Item }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  const [openItems, setOpenItems] = useLocalStorage(
    'open-items',
    ['highlighted', '2026'],
    { initializeWithValue: false }
  );

  const { name, link, children } = props.item;

  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (!isMobile) return;
    if (prevPathnameRef.current === pathname) return;
    setOpenMobile(false);
    prevPathnameRef.current = pathname;
  }, [pathname, isMobile, setOpenMobile, prevPathnameRef]);

  if (!children?.length) {
    return (
      <SidebarMenuItem>
        <Link href={link ?? '/404'} onMouseEnter={playMenuItemHoverSound}>
          <SidebarMenuButton
            isActive={name === 'button.tsx'}
            className={clsx(
              `${pathname.endsWith(link ?? '') ? 'bg-muted/70' : ''}`
            )}
          >
            <File />
            {name}
          </SidebarMenuButton>
          <SidebarMenuBadge className='text-muted-foreground'>
            {props.item.state}
          </SidebarMenuBadge>
        </Link>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className='group/collapsible [&[data-state=open]>button>svg:first-child]:hidden [&[data-state=open]>button>svg:last-child]:block'
        defaultOpen={openItems?.includes(name) ?? false}
      >
        <CollapsibleTrigger
          asChild
          onMouseEnter={playMenuItemHoverSound}
          onClick={() => {
            const current = openItems ?? [];
            if (current.includes(name)) {
              playMenuItemClosedSound();
              setOpenItems(current.filter(item => item !== name));
            } else {
              playMenuItemOpenedSound();
              setOpenItems([...current, name]);
            }
          }}
        >
          <SidebarMenuButton>
            <Folder />
            <FolderOpen className='hidden' />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className='mr-0'>
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
