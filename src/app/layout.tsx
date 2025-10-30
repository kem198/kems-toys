import { AppSidebar } from "@/components/molecules/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "KeM's Toys",
  description: "KeM198's tiny apps.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="ja">
    <body className={notoSansJP.className}>
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <main className="p-6">{children}</main>
        </div>
      </SidebarProvider>
    </body>
  </html>
);

export default RootLayout;
