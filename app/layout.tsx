import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-en",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "syake-ichiro | Portfolio",
  description:
    "通信会社で4年間エンジニアとして勤務。Django・Angular・Next.js を中心に、バックエンドからフロントエンドまで幅広く。",
  openGraph: {
    title: "syake-ichiro | Portfolio",
    description:
      "通信会社で4年間エンジニアとして勤務。Django・Angular・Next.js を中心に、バックエンドからフロントエンドまで幅広く。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${noto.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
