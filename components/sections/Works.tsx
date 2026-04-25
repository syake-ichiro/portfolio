"use client";

import { works } from "@/lib/works";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function StatusBadge({ status }: { status: "live" | "wip" }) {
  if (status === "live") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Live
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
      )}
    >
      Coming Soon
    </span>
  );
}

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">
        <Reveal>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-fg-muted font-medium">
              Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-fg">
              制作物
            </h2>
            <p className="text-base text-fg-muted">
              個人開発プロダクト。順次公開予定です。
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <Reveal key={work.id} delay={i * 0.08}>
              <article
                className={cn(
                  "group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden",
                  "hover:-translate-y-1 hover:shadow-xl hover:border-border/80",
                  "transition-all duration-300"
                )}
              >
                {/* Visual */}
                <div
                  className={cn(
                    "relative aspect-[4/3] flex items-center justify-center",
                    `bg-gradient-to-br ${work.gradient}`,
                    "group-hover:scale-[1.02] transition-transform duration-500"
                  )}
                >
                  <span className="text-5xl" role="img" aria-label={work.title}>
                    {work.emoji}
                  </span>
                  <div className="absolute top-3 right-3">
                    <StatusBadge status={work.status} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-lg font-semibold text-fg leading-tight">
                    {work.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-surface-2 border border-border text-fg-muted px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
