"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, ToolCase, Settings, Tag, CreditCard } from "lucide-react"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <Image
        src={"/fox-wild-animal-fur-vixen-svgrepo-com.svg"}
        alt="Icone da raposa"
        width={20}
        height={20}
        />
      ),
      plan: "Empresa",
    },
    {
      name: "Acme Corp.",
      logo: (
        <AudioLinesIcon
        />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <TerminalIcon
        />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Eventos",
      url: "#",
      icon: (
        <CreditCard
        />
      ),
      isActive: true,
      items: [
        {
          title: "Meus eventos",
          url: "#",
        }
      ],
    },
    {
      title: "Tags",
      url: "#",
      icon: (
        <Tag
        />
      ),
      items: [
        {
          title: "Minhas tags",
          url: "#",
        }
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "Eventos",
          url: "#",
        },
        {
          title: "Tags",
          url: "#",
        },
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: (
        <Settings
        />
      ),
      items: [
        {
          title: "Logins",
          url: "#",
        },
        {
          title: "WebHook",
          url: "#",
        }
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
