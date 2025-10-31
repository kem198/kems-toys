"use client";

import { Logo } from "@/components/atoms/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TOYS } from "@/constants/toys";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2">
          <Link href="/">
            <SidebarHeader
              className={`flex-row gap-2 rounded-md ${
                pathname === "/" ? "bg-zinc-700 text-white" : ""
              }`}
            >
              <Logo />
            </SidebarHeader>
          </Link>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOYS.map((toy) => (
                <SidebarMenuItem key={toy.title}>
                  <SidebarMenuButton
                    isActive={pathname?.startsWith(toy.link)}
                    className={
                      pathname?.startsWith(toy.link)
                        ? "hover:!bg-zinc-600 hover:!text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white"
                        : ""
                    }
                    asChild
                  >
                    <Link
                      href={toy.link}
                      aria-current={
                        pathname?.startsWith(toy.link) ? "page" : undefined
                      }
                    >
                      <toy.icon />
                      <span>{toy.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
