import { AppHeader } from "@/components/molecules/app-header";
import { AppSidebar } from "@/components/molecules/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
          <div className="flex flex-col">
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
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

export default RootLayout;
