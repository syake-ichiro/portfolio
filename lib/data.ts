// ============================================================
// このファイルのデータを編集することで、ポートフォリオの内容を更新できます。
// ============================================================

export type Skill = {
  name: string;
  level?: string;
};

export type SkillCategory = {
  icon: string;
  title: string;
  skills: Skill[];
};

export type FeaturedProject = {
  year: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  gradient: string;
};

export type ArchiveProject = {
  year: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Social = {
  label: string;
  href: string;
  icon: "x" | "github" | "linkedin" | "note";
};

// ---- Profile ----
export const profile = {
  meta: "Web Engineer · Tokyo",
  name: "syake-ichiro",
  bio: `通信会社でエンジニアとして4年間勤務。業務システムの開発・保守を担当し、Django・Angular・Java を中心にバックエンドからフロントエンドまで幅広く携わってきました。現在は Next.js などモダンな技術スタックを学びながら、副業エンジニアとして自分のプロダクトを育てています。丁寧に、一つずつ。`,
  facts: [
    { num: "4+", label: "Years of experience" },
    { num: "10+", label: "Projects shipped" },
    { num: "∞", label: "Cups of coffee" },
  ],
};

// ---- Skills ----
export const skills: SkillCategory[] = [
  {
    icon: "◧",
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: "4y" },
      { name: "JavaScript", level: "4y" },
      { name: "TypeScript", level: "1y" },
      { name: "Angular", level: "3y" },
      { name: "Next.js", level: "0.5y" },
    ],
  },
  {
    icon: "◉",
    title: "Backend",
    skills: [
      { name: "Python / Django", level: "4y" },
      { name: "Java", level: "3y" },
      { name: "Node.js", level: "1y" },
    ],
  },
  {
    icon: "▤",
    title: "Database & Infra",
    skills: [
      { name: "Oracle DB", level: "4y" },
      { name: "PostgreSQL", level: "1y" },
      { name: "Docker", level: "1y" },
      { name: "Linux", level: "4y" },
    ],
  },
  {
    icon: "✦",
    title: "Tools",
    skills: [
      { name: "Git / GitHub" },
      { name: "Figma" },
      { name: "Slack" },
      { name: "Notion" },
      { name: "Postman" },
    ],
  },
];

// ---- Featured Projects (代表作 2件) ----
export const featuredProjects: FeaturedProject[] = [
  {
    year: "2025",
    category: "Personal",
    title: "Portfolio site",
    description:
      "自分用のポートフォリオサイト。Next.js + Tailwind でデザインから実装まで一人で担当。",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    gradient: "linear-gradient(135deg, #B8C8DC, #B0CDB8)",
  },
  {
    year: "2024",
    category: "Work",
    title: "業務自動化ツール",
    description:
      "社内の定型作業を Django で自動化したツール。処理時間を 80% 削減。",
    stack: ["Python", "Django", "Oracle DB"],
    link: "#",
    gradient: "linear-gradient(135deg, #E8B4A0, #EBD9A8)",
  },
];

// ---- Archive Projects (全件リスト) ----
export const archiveProjects: ArchiveProject[] = [
  {
    year: "2024",
    name: "SaaS 管理アプリ",
    description: "契約中のSaaSを一覧管理し、月額費用・利用状況を可視化するツール。",
    tech: ["Next.js", "Supabase", "Recharts"],
    link: "#",
  },
  {
    year: "2024",
    name: "情報レコメンドアプリ",
    description: "興味・学習進捗に応じて必要な情報を自動収集・要約するAIツール。",
    tech: ["Next.js", "Claude API", "Supabase"],
    link: "#",
  },
  {
    year: "2023",
    name: "Angular ダッシュボード",
    description: "社内向けデータ可視化ダッシュボード。BI的な機能を社内で内製化。",
    tech: ["Angular", "TypeScript", "Django"],
    link: "#",
  },
  {
    year: "2023",
    name: "資産管理アプリ",
    description: "銀行・証券のCSVを取り込み、資産・収支をグラフで可視化するツール。",
    tech: ["Next.js", "Supabase", "Recharts"],
    link: "#",
  },
  {
    year: "2022",
    name: "Slack 通知ボット",
    description: "定期的にチームへ進捗を投げる軽量ボット。",
    tech: ["Node.js", "Slack API"],
    link: "#",
  },
  {
    year: "2022",
    name: "CSS animation studies",
    description: "CodePen で公開した小さなアニメーション集。",
    tech: ["HTML", "CSS"],
    link: "#",
  },
];

// ---- Social Links ----
export const socials: Social[] = [
  { label: "X / Twitter", href: "#", icon: "x" },
  { label: "GitHub", href: "https://github.com/syake-ichiro", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Note", href: "#", icon: "note" },
];

export const contactEmail = "syake.ichiro@gmail.com";
