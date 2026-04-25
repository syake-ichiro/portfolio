"use client";
import { useEffect, useState } from "react";

type Token = { text: string; color: string };
type CodeLine = { tokens: Token[] };

const codeLines: CodeLine[] = [
  {
    tokens: [
      { text: "// syake-ichiro / fullstack-engineer", color: "text-zinc-500" },
    ],
  },
  {
    tokens: [
      { text: "type ", color: "text-purple-400" },
      { text: "Problem", color: "text-blue-300" },
      { text: " = ", color: "text-zinc-300" },
      { text: '"業務の非効率"', color: "text-amber-300" },
      { text: " | ", color: "text-zinc-400" },
      { text: '"手作業の繰り返し"', color: "text-amber-300" },
      { text: ";", color: "text-zinc-400" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "async ", color: "text-purple-400" },
      { text: "function ", color: "text-purple-400" },
      { text: "solve", color: "text-yellow-300" },
      { text: "(", color: "text-zinc-300" },
      { text: "problem", color: "text-orange-300" },
      { text: ": ", color: "text-zinc-400" },
      { text: "Problem", color: "text-blue-300" },
      { text: ") {", color: "text-zinc-300" },
    ],
  },
  {
    tokens: [
      { text: "  const ", color: "text-purple-400" },
      { text: "stack", color: "text-zinc-100" },
      { text: " = [", color: "text-zinc-300" },
      { text: '"Next.js"', color: "text-amber-300" },
      { text: ", ", color: "text-zinc-400" },
      { text: '"Django"', color: "text-amber-300" },
      { text: ", ", color: "text-zinc-400" },
      { text: '"Supabase"', color: "text-amber-300" },
      { text: "];", color: "text-zinc-400" },
    ],
  },
  {
    tokens: [
      { text: "  const ", color: "text-purple-400" },
      { text: "tools", color: "text-zinc-100" },
      { text: " = [", color: "text-zinc-300" },
      { text: '"Claude Code"', color: "text-amber-300" },
      { text: ", ", color: "text-zinc-400" },
      { text: '"GitHub Copilot"', color: "text-amber-300" },
      { text: "];", color: "text-zinc-400" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "  return ", color: "text-purple-400" },
      { text: "await ", color: "text-purple-400" },
      { text: "deliver", color: "text-yellow-300" },
      { text: "({", color: "text-zinc-300" },
    ],
  },
  { tokens: [{ text: "    stack,", color: "text-zinc-100" }] },
  { tokens: [{ text: "    tools,", color: "text-zinc-100" }] },
  {
    tokens: [
      { text: "    timeReduction", color: "text-zinc-100" },
      { text: ": ", color: "text-zinc-400" },
      { text: '"90%"', color: "text-amber-300" },
      { text: ",", color: "text-zinc-400" },
    ],
  },
  { tokens: [{ text: "  });", color: "text-zinc-400" }] },
  { tokens: [{ text: "}", color: "text-zinc-400" }] },
  { tokens: [] },
  {
    tokens: [
      {
        text: "// → 業務の課題を、コードで解決します。",
        color: "text-zinc-500",
      },
    ],
  },
];

export function CodeCard() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = codeLines.map((_, i) =>
      setTimeout(
        () => setVisibleCount((n) => Math.max(n, i + 1)),
        i * 120 + 300
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-zinc-800">
      {/* macOS title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-zinc-500 font-mono">solve.ts</span>
      </div>

      {/* Code body */}
      <div className="p-5 font-mono text-sm leading-6 overflow-x-auto">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="flex min-h-[1.5rem] transition-opacity duration-300"
            style={{ opacity: i < visibleCount ? 1 : 0 }}
          >
            <span className="w-7 shrink-0 text-right text-zinc-600 mr-4 select-none text-xs leading-6">
              {i + 1}
            </span>
            <span>
              {line.tokens.length === 0 ? (
                " "
              ) : (
                <>
                  {line.tokens.map((token, j) => (
                    <span key={j} className={token.color}>
                      {token.text}
                    </span>
                  ))}
                </>
              )}
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex min-h-[1.5rem]">
          <span className="w-7 shrink-0 mr-4 select-none" />
          <span
            className="text-accent cursor-blink"
            aria-hidden
          >
            ▋
          </span>
        </div>
      </div>
    </div>
  );
}
