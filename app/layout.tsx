import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "syake-ichiro | フルスタックエンジニア",
  description:
    "業務効率化・Webアプリ開発を得意とするフルスタックエンジニアのポートフォリオ。個人・スタートアップ向けの副業案件を受け付けています。",
  openGraph: {
    title: "syake-ichiro | フルスタックエンジニア",
    description: "業務効率化・Webアプリ開発を得意とするフルスタックエンジニア",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
