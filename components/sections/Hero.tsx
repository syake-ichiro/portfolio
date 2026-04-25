"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CodeCard } from "@/components/ui/CodeCard";

const stats = [
  { value: "4年", label: "大企業での実務経験" },
  { value: "90%", label: "作業時間削減実績" },
  { value: "AI駆動", label: "Claude Code活用" },
];

const ease = [0.16, 1, 0.3, 1] as const;

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background radial gradients */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sm font-medium text-accent tracking-widest"
          >
            フルスタックエンジニア
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-fg leading-[1.1]"
          >
            業務の課題を、
            <br />
            コードで解決します。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-base leading-relaxed text-fg-muted max-w-lg"
          >
            通信大手で4年間、ミッションクリティカルなシステム開発に従事。
            業務自動化・効率化を得意とするフルスタックエンジニアです。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#works");
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-fg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              制作物を見る
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center gap-2 border border-border text-fg px-6 py-3 rounded-lg font-medium hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              お仕事のご相談
            </a>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="flex flex-wrap gap-6 pt-2"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-0.5">
                <span className="font-mono text-2xl font-bold text-fg leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-fg-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Code card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="hidden lg:block"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}
