'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/theme/theme-toggle'
import AuthButton from '@/components/auth/AuthButton'
import { useAppStore } from '@/lib/store'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Header() {
 const trail = useAppStore((s) => s.breadcrumb)
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear">
      <SidebarTrigger className="-ml-1" />

      {/* ---------- dynamic breadcrumb ---------- */}
      <Breadcrumb>
        <BreadcrumbList>
          {trail.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <BreadcrumbItem className="hidden md:block">
                {idx === trail.length - 1 || !crumb.href ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {idx < trail.length - 1 && (
                <BreadcrumbSeparator className="hidden md:block">
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
      </div>
     
    </header>
  )
}