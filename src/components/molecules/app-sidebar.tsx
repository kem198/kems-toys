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
import Image from "next/image";
import Link from "next/link";

export const AppSidebar = () => (
  <Sidebar>
    <SidebarContent>
      <SidebarGroup className="flex flex-col gap-2">
        <SidebarHeader className="rounded-md bg-zinc-700 text-white">
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/icon-192x192.png"
              alt="icon"
              width={24}
              height={24}
            />
            {`KeM's Toys`}
          </Link>
        </SidebarHeader>
        <SidebarGroupContent>
          <SidebarMenu>
            {TOYS.map((toy) => (
              <SidebarMenuItem key={toy.title}>
                <SidebarMenuButton asChild>
                  <a href={toy.link}>
                    <toy.icon />
                    <span>{toy.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
);
