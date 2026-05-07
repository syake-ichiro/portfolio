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

## 開発フロー

### ブランチ構成

```
main          本番（Vercel 本番 URL）
  └─ develop  開発（Vercel プレビュー URL）
       └─ develop_xxx  機能ごとの作業ブランチ
```

### ブランチ命名規則

- 接頭語: `develop_`
- 区切り: スネークケース（`_`）

| 作業内容 | ブランチ名 |
|---|---|
| ヒーロー修正 | `develop_hero_copy` |
| スキル追加 | `develop_skills_update` |
| お問い合わせフォーム実装 | `develop_contact_form` |

### 機能開発の手順

```bash
# 1. develop から作業ブランチを切る
git checkout develop
git checkout -b develop_xxx

# 2. 作業・コミット・push
git add .
git commit -m "feat: ..."
git push origin develop_xxx
```

3. GitHub で PR を作成（base: `develop`、compare: `develop_xxx`）
4. Vercel のプレビュー URL で動作確認
5. マージ後、作業ブランチを削除
   - リモート: GitHub のマージ完了画面の "Delete branch" ボタン
   - ローカル: `git branch -d develop_xxx`

### develop → main へのリリース手順

```bash
# develop を最新に更新
git checkout develop
git pull origin develop
```

1. GitHub で PR を作成（base: `main`、compare: `develop`）
2. 差分・動作を確認してマージ（`develop` ブランチは削除しない）
3. ローカルの main を更新

```bash
git checkout main
git pull origin main
```
