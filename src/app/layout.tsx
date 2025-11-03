import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "KeM's Toys",
  description: "KeM198's tiny apps.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <SidebarProvider>
          <div className="flex grow flex-col">
            <AppHeader className="flex justify-center md:hidden">
              <SidebarTrigger className="absolute left-2" />
              <Link href="/">
                <Image
                  src="/icons/icon-192x192.png"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </Link>
            </AppHeader>
            <div className="flex">
              <AppSidebar />
              <main className="p-6">{children}</main>
              <Toaster />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

export default RootLayout;
