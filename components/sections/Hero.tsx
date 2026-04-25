"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-inter text-[#2563eb] font-medium tracking-widest uppercase mb-6"
        >
          フルスタックエンジニア
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-tight mb-6"
        >
          業務の課題を、
          <br />
          コードで解決します。
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          通信大手で4年間、ミッションクリティカルなシステム開発に従事。
          <br className="hidden sm:block" />
          業務自動化・効率化を得意とするフルスタックエンジニアです。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#works"
            onClick={handleScroll}
            className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-3.5 rounded-md font-medium font-inter hover:bg-blue-700 transition-colors duration-200"
          >
            制作物を見る
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-0.5"
            >
              <path
                d="M8 3L13 8L8 13M3 8H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
