# syake-ichiro — Portfolio

個人ポートフォリオサイト。Next.js 14 App Router + Tailwind CSS で構築。

## 技術スタック

| カテゴリ | 採用技術 |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| アイコン | react-icons |
| フォント | Noto Sans JP / Inter (Google Fonts) |
| デプロイ | Vercel |

## ディレクトリ構成

```
.
├── app/
│   ├── api/contact/    # お問い合わせフォーム API (Resend)
│   ├── globals.css     # CSS 変数・グローバルスタイル
│   ├── icon.svg        # ファビコン
│   ├── layout.tsx      # ルートレイアウト・フォント設定
│   └── page.tsx        # エントリーポイント
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # スクロール連動ナビゲーション
│   │   └── Footer.tsx  # フッター
│   ├── sections/
│   │   ├── Hero.tsx    # ヒーロー（多層レイヤー背景）
│   │   ├── About.tsx   # プロフィール
│   │   ├── Skills.tsx  # スキル
│   │   ├── Works.tsx   # プロジェクト（Featured + Archive）
│   │   └── Contact.tsx # コンタクト
│   └── ui/
│       └── Reveal.tsx  # スクロール表示アニメーション
├── lib/
│   └── data.ts         # ★ コンテンツデータ（編集用）
└── public/
    ├── avatar.png      # プロフィール画像
    ├── hero-desk.jpg   # ヒーロー背景写真
    └── icon.svg        # ナビロゴ用アイコン
```

## コンテンツの編集

`lib/data.ts` を編集するだけでポートフォリオの内容を更新できます。

```ts
// プロフィール文・ファクト数値
export const profile = { ... }

// スキルカード（カテゴリ × タグ）
export const skills: SkillCategory[] = [ ... ]

// 代表プロジェクト（上段 2 枚カード）
export const featuredProjects: FeaturedProject[] = [ ... ]

// 全プロジェクトリスト（下段 Archive）
export const archiveProjects: ArchiveProject[] = [ ... ]

// SNS リンク
export const socials: Social[] = [ ... ]
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000

# 本番ビルド
npm run build
npm run start
```

## 環境変数

`.env.local` を作成してください。`.env.example` を参考にどうぞ。

```bash
cp .env.example .env.local
```

| 変数名 | 用途 |
|---|---|
| `RESEND_API_KEY` | お問い合わせフォームのメール送信（Resend） |
| `CONTACT_TO_EMAIL` | 問い合わせ受信先アドレス |

## ライセンス

MIT
