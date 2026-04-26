import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:            "var(--bg)",
        surface:       "var(--surface)",
        "surface-2":   "var(--surface-2)",
        border:        "var(--border)",
        text:          "var(--text)",
        "text-mute":   "var(--text-mute)",
        "text-soft":   "var(--text-soft)",
        "accent-coral":  "var(--accent-coral)",
        "accent-sage":   "var(--accent-sage)",
        "accent-sky":    "var(--accent-sky)",
        "accent-butter": "var(--accent-butter)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans-jp)",
          "var(--font-sans-en)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Hiragino Kaku Gothic ProN",
          "ヒラギノ角ゴ ProN W3",
          "Yu Gothic Medium",
          "游ゴシック Medium",
          "YuGothic",
          "Meiryo",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
