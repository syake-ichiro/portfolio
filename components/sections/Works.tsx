"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { works } from "@/lib/works";

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

export default function Works() {
  return (
    <section id="works" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-12 text-center">
            Works
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <FadeIn key={work.id} delay={0.1 * (i + 1)}>
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
                {/* 画像プレースホルダー */}
                <div className="h-44 bg-[#f0f4ff] flex items-center justify-center border-b border-[#e5e5e5] relative">
                  {work.status === "wip" && (
                    <span className="absolute top-3 right-3 text-xs font-inter bg-[#f8f8f8] border border-[#e5e5e5] text-[#666666] px-2 py-0.5 rounded-full">
                      制作予定
                    </span>
                  )}
                  <span className="text-4xl">
                    {work.id === "saas-manager"
                      ? "📊"
                      : work.id === "info-recommend"
                      ? "🤖"
                      : "💰"}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#111111] mb-2">{work.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-4 flex-1">
                    {work.description}
                  </p>

                  {/* 技術バッジ */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {work.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#f0f4ff] text-[#2563eb] border border-blue-100 px-2 py-0.5 rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* リンクボタン */}
                  <div className="flex gap-2">
                    {work.demoUrl ? (
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-inter bg-[#2563eb] text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        デモを見る
                      </a>
                    ) : (
                      <span className="flex-1 text-center text-sm font-inter bg-[#f8f8f8] text-[#999] px-3 py-2 rounded-md border border-[#e5e5e5] cursor-not-allowed">
                        準備中
                      </span>
                    )}
                    {work.githubUrl ? (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-inter border border-[#e5e5e5] text-[#111111] px-3 py-2 rounded-md hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="flex-1 text-center text-sm font-inter bg-[#f8f8f8] text-[#999] px-3 py-2 rounded-md border border-[#e5e5e5] cursor-not-allowed">
                        準備中
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
