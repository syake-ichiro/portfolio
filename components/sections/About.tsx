"use client";

import Image from "next/image";
import { Briefcase, Zap, Lock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Briefcase,
    title: "本業4年",
    description: "大企業でのミッションクリティカルなシステム開発経験",
  },
  {
    icon: Zap,
    title: "作業時間90%削減",
    description: "リリース作業の自動化により実現した業務効率化の実績",
  },
  {
    icon: Lock,
    title: "認証・セキュリティ",
    description: "SSO移行・WebAPI設計・複数システム間のリアルタイム連携",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://github.com/syake-ichiro",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://x.com/syake_ichiro",
    label: "X",
    Icon: XIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Avatar card */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="w-full max-w-sm aspect-square bg-surface border border-border rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="syake-ichiro"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="font-mono font-bold text-xl text-fg">
                  syake-ichiro
                </p>
                <p className="text-sm text-fg-muted mt-1">
                  フルスタックエンジニア
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm",
                      "border border-border text-fg-muted hover:text-fg hover:border-accent/50",
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    <link.Icon />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Text + highlights */}
          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-fg-muted font-medium">
                  About
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-fg">
                  課題解決を、コードで。
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-base leading-relaxed text-fg-muted">
                <p>
                  某通信会社でフルスタックエンジニアとして4年間勤務。
                  ワークフローシステムの設計・開発・改善を担当し、
                  リリース作業の自動化により作業時間を90%削減した実績があります。
                </p>
                <p>
                  認証システムの移行・WebAPI設計・複数システムとのリアルタイム連携など、
                  ミッションクリティカルな環境での開発経験が強みです。
                </p>
                <p>
                  現在は副業として、個人・スタートアップ向けの
                  Webアプリ開発・業務効率化ツールの案件を受け付けています。
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={0.2 + i * 0.08}>
                  <div
                    className={cn(
                      "flex items-start gap-4 p-5 rounded-2xl",
                      "bg-surface border border-border",
                      "hover:border-accent/50 transition-colors duration-200"
                    )}
                  >
                    <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon
                        className="w-4 h-4 text-accent"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-fg text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
