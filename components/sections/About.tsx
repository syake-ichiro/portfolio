"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "🏢",
    title: "本業4年",
    description: "大企業での実務経験",
  },
  {
    icon: "⚡",
    title: "作業時間90%削減",
    description: "業務自動化の実績",
  },
  {
    icon: "🔐",
    title: "認証・セキュリティ",
    description: "SSO・WebAPI設計経験",
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-12 text-center">
            About
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* プロフィールカード */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-[#e5e5e5] rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#2563eb] flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold font-inter">
                  S
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">
                syake-ichiro
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                フルスタックエンジニア
              </p>
              <a
                href="https://github.com/syake-ichiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-inter text-[#666666] hover:text-[#2563eb] transition-colors border border-[#e5e5e5] rounded-md px-4 py-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>
          </FadeIn>

          {/* 自己紹介テキスト */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center">
              <p className="text-[#111111] leading-relaxed mb-4">
                某通信会社でフルスタックエンジニアとして4年間勤務。
                ワークフローシステムの設計・開発・改善を担当し、
                リリース作業の自動化により作業時間を90%削減した実績があります。
              </p>
              <p className="text-[#111111] leading-relaxed mb-4">
                認証システムの移行・WebAPI設計・複数システムとのリアルタイム連携など、
                ミッションクリティカルな環境での開発経験が強みです。
              </p>
              <p className="text-[#111111] leading-relaxed">
                現在は副業として、個人・スタートアップ向けの
                Webアプリ開発・業務効率化ツールの案件を受け付けています。
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ハイライトカード */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 * (i + 1)}>
              <div className="bg-white border border-[#e5e5e5] rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#111111] mb-1">{item.title}</h4>
                <p className="text-sm text-[#666666]">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
