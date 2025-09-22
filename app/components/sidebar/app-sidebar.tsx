"use client"

import * as React from "react"


import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import {data} from "@/assets/sidebarData"
import Image from "next/image"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()

  const user = React.useMemo(
    () =>
      session?.user
        ? {
            name: session.user.name ?? "User",
            email: session.user.email ?? "",
            avatar: session.user.image ?? "",
          }
        : { name: "Guest", email: "", avatar: "" },
    [session]
  )
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center">
          <Image src={"/logo2.png"} alt="Logo" width={30} height={30} />
        
        </div>
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
            </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
