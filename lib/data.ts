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
  icon: "x" | "github" | "zenn";
};

// ---- Profile ----
export const profile = {
  meta: "Web Engineer · Tokyo",
  name: "syake-ichiro",
  bio: `通信会社でエンジニアとして4年間勤務。業務システムの開発・保守を担当し、Django・Angular・Java を中心にバックエンドからフロントエンドまで幅広く携わってきました。現在は Next.js などモダンな技術スタックを学びながら、副業エンジニアとして自分のプロダクトを育てています。丁寧に、一つずつ。`,
  facts: [
    { num: "4+", label: "年の実務経験" },
    { num: "10+", label: "個のプロジェクト" },
    { num: "∞", label: "杯のコーヒー" },
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
    title: "SaaS 管理アプリ",
    description:
      "契約中のSaaSを一覧管理し、月額費用・利用状況を可視化するツール。コスト最適化を支援します。",
    stack: ["Next.js", "Supabase", "Recharts", "Tailwind"],
    link: "#",
    gradient: "linear-gradient(135deg, #B8C8DC, #B0CDB8)",
  },
  {
    year: "2025",
    category: "Personal",
    title: "ペット健康管理アプリ",
    description:
      "ペットの体重・食事・ワクチン接種記録を管理するアプリ。愛犬・愛猫の健康をサポートします。",
    stack: ["Next.js", "Supabase", "TypeScript"],
    link: "#",
    gradient: "linear-gradient(135deg, #E8B4A0, #EBD9A8)",
  },
];

// ---- Archive Projects (全件リスト) ----
export const archiveProjects: ArchiveProject[] = [
  {
    year: "2025",
    name: "資産管理アプリ",
    description: "銀行・証券のCSVを取り込み、資産・収支をグラフで可視化するツール。",
    tech: ["Next.js", "Supabase", "Recharts"],
    link: "#",
  },
  {
    year: "2025",
    name: "情報レコメンドアプリ",
    description: "興味・学習進捗に応じて必要な情報を自動収集・要約するAIツール。",
    tech: ["Next.js", "Claude API", "Supabase"],
    link: "#",
  },
  {
    year: "2024",
    name: "メール自動送信ツール",
    description: "定型メールを自動生成・送信するツール。業務の定期連絡を効率化。",
    tech: ["Python", "Gmail API"],
    link: "#",
  },
];

// ---- Social Links ----
export const socials: Social[] = [
  { label: "X / Twitter", href: "https://x.com/syake_ichiro", icon: "x" },
  { label: "GitHub", href: "https://github.com/syake-ichiro", icon: "github" },
  { label: "Zenn", href: "https://zenn.dev/syake_ichiro", icon: "zenn" },
];

export const contactEmail = "syake.ichiro@gmail.com";
