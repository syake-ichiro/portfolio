"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "フロントエンド",
    skills: ["Angular", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "バックエンド",
    skills: ["Django", "Python", "uWSGI", "REST API設計"],
  },
  {
    label: "インフラ・その他",
    skills: ["Nginx", "Linux", "Git", "GitHub", "Vercel", "Supabase"],
  },
  {
    label: "開発スタイル",
    skills: [
      "AI駆動開発（Claude Code / GitHub Copilot）",
      "ワークフロー設計",
      "バッチ処理",
      "システム間連携",
    ],
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4 text-center">
            Skills
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="text-center text-[#666666] mb-12 leading-relaxed">
            GitHub CopilotやClaude Codeを活用したAI駆動開発で、
            <br className="hidden sm:block" />
            スピーディーな開発・納品を実現します。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.label} delay={0.1 * (i + 1)}>
              <div className="bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-[#2563eb] font-inter uppercase tracking-wider mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block text-sm bg-white border border-[#e5e5e5] text-[#111111] px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
