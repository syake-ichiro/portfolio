"use client";

import { Bot, Layers, Server, Cloud, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Badge = { label: string };

function TechBadge({ label }: Badge) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md",
        "bg-surface-2 border border-border",
        "font-mono text-sm text-fg-muted"
      )}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">
        <Reveal>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-fg-muted font-medium">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-fg">
              得意領域の地図
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AI駆動開発 — large (col-span-2, row-span-2) */}
            <div
              className={cn(
                "md:col-span-2 md:row-span-2 relative overflow-hidden",
                "bg-surface border border-border rounded-2xl p-6",
                "hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg",
                "transition-all duration-200"
              )}
            >
              <div className="relative z-10 flex flex-col h-full gap-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fg">
                    AI-Driven Development
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    Claude Code・GitHub Copilotを中心としたAI駆動開発で、
                    設計からリリースまでのサイクルを大幅に短縮。
                    ツールを使いこなすことで、少人数でもエンタープライズ品質の開発を実現します。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Claude Code", "GitHub Copilot", "Cursor"].map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </div>
              {/* Decorative icon */}
              <Bot
                className="absolute -right-6 -bottom-6 w-40 h-40 text-accent/5"
                aria-hidden
              />
            </div>

            {/* フロントエンド — col-span-1 (placed at col3, row1) */}
            <div
              className={cn(
                "bg-surface border border-border rounded-2xl p-6",
                "hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-blue-500" aria-hidden />
                </div>
                <h3 className="font-semibold text-fg text-sm">フロントエンド</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"].map(
                  (t) => (
                    <TechBadge key={t} label={t} />
                  )
                )}
              </div>
            </div>

            {/* バックエンド — col-span-1 (placed at col3, row2) */}
            <div
              className={cn(
                "bg-surface border border-border rounded-2xl p-6",
                "hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Server className="w-4 h-4 text-green-500" aria-hidden />
                </div>
                <h3 className="font-semibold text-fg text-sm">バックエンド</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Django", "Python", "uWSGI", "REST API"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>

            {/* ワークフロー設計 — col-span-2 (placed at col1-2, row3) */}
            <div
              className={cn(
                "md:col-span-2 bg-surface border border-border rounded-2xl p-6",
                "hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Workflow className="w-4 h-4 text-purple-500" aria-hidden />
                </div>
                <h3 className="font-semibold text-fg text-sm">
                  ワークフロー設計
                </h3>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed">
                要件定義・設計から実装・テスト・納品までワンストップで対応。
                システム間連携・バッチ処理・自動化スクリプトの設計が得意です。
              </p>
            </div>

            {/* インフラ — col-span-1 (placed at col3, row3) */}
            <div
              className={cn(
                "bg-surface border border-border rounded-2xl p-6",
                "hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-orange-500" aria-hidden />
                </div>
                <h3 className="font-semibold text-fg text-sm">インフラ</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Nginx", "Linux", "Git", "Vercel", "Supabase"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
