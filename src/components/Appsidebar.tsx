"use client";

import {
  CalendarPlus2,
  CirclePlus,
  Command,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import React, { useContext, useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserProvider } from "@/app/context/UserContext";
import type { User } from "@prisma/client";
import { Button } from "./ui/button";

// Navigation menu items
const navItems = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: CalendarPlus2 },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar({ user }: { user: User }) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const FirstName = React.useMemo(() => {
    const username = user?.username ?? "";
    if (username.includes(" ")) {
      const [firstname] = username.split(" ");
      return firstname!;
    } else {
      return username;
    }
  }, [user.username]);
  return (
    <Sidebar className="py-2">
      {/* Header section with logo */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-3">
            <Avatar className="h-7 w-7">
              <AvatarImage src={user.profileImage!} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-[13px] font-semibold">{FirstName}</p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main content of sidebar */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="text-gray-700">
              {navItems.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild>
                    <a href={url} className="flex items-center space-x-2">
                      <Icon className="size-4" />
                      <span>{title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Calendar group */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Calendar</SidebarGroupLabel>
          <SidebarGroupContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-auto rounded-lg border"
            />
          </SidebarGroupContent>
        </SidebarGroup>*/}
      </SidebarContent>
    </Sidebar>
  );
}
