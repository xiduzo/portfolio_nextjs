'use client';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';

export function BreadCrumbs() {
  const pathname = usePathname();

  const breadcrumbs = pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {!!breadcrumbs.length && (
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          )}
          {!breadcrumbs.length && <BreadcrumbPage>Home</BreadcrumbPage>}
        </BreadcrumbItem>
        {!!breadcrumbs.length && (
          <BreadcrumbSeparator className='hidden md:block' />
        )}
        {breadcrumbs.map((breadcrumb, index, path) => {
          return (
            <React.Fragment key={breadcrumb}>
              <BreadcrumbItem className='hidden md:block'>
                {index === breadcrumbs.length - 1 && (
                  <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
                )}
                {index !== breadcrumbs.length - 1 && (
                  <BreadcrumbLink
                    href={`/${path.slice(0, index + 1).join('/')}`}
                  >
                    {breadcrumb}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator
                  className='hidden md:block'
                  aria-hidden='true'
                />
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
