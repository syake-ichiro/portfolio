export type Work = {
  id: string;
  title: string;
  description: string;
  techs: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: "published" | "wip";
};

export const works: Work[] = [
  {
    id: "saas-manager",
    title: "SaaS管理アプリ",
    description:
      "契約中のSaaSを一覧管理し、月額費用・利用状況を可視化するツール。チームや個人の支出を把握しコスト最適化を支援します。",
    techs: ["Next.js", "Supabase", "Recharts", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/works/saas-manager.png",
    status: "published",
  },
  {
    id: "info-recommend",
    title: "情報レコメンドアプリ",
    description:
      "興味・学習進捗に応じて必要な情報を自動収集・要約・提示するAIツール。Claude APIと連携し、毎日の情報収集を効率化します。",
    techs: ["Next.js", "Claude API", "Supabase"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/works/info-recommend.png",
    status: "wip",
  },
  {
    id: "asset-manager",
    title: "資産管理アプリ",
    description:
      "銀行・証券のCSVを取り込み、資産・収支をグラフで可視化するツール。複数口座をまとめて把握し、家計管理をシンプルにします。",
    techs: ["Next.js", "Supabase", "Recharts"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/works/asset-manager.png",
    status: "wip",
  },
];
