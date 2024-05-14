import { TwoColumnLayout } from '@/components/Templates/TwoColumnLayout';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "KeM's Toys",
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="ja">
    <body className={notoSansJP.className}>
      <TwoColumnLayout>{children}</TwoColumnLayout>
    </body>
  </html>
);

export default RootLayout;
