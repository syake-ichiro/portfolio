# ポートフォリオサイト 全面リデザイン実装仕様書

このドキュメントはClaude Codeにそのまま渡すことを想定した、サイト全体の実装仕様書です。
セクションごとに独立して実装できる構成にしているので、上から順に進めれば完成します。

---

## 0. 前提

- 対象リポジトリ: 既存のポートフォリオサイト（Next.js App Router + Tailwind CSS 想定）
- 現状サイト構成: Hero / About / Skills / Works / Contact / Footer
- 既存のコンテンツ（コピー、実績数字、技術スタック）は最大限活用する
- 必要であれば軽量ライブラリの導入を許可（`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge` など）
- 重いライブラリは原則導入しない

---

## 1. デザイン哲学

このポートフォリオが体現すべき価値観は以下の3つ。

1. **Engineering Precision** — エンジニアらしい正確さ・整合性。グリッドが揃い、余白に意図があり、文字組みが丁寧であること
2. **Quiet Confidence** — 派手な装飾ではなく、コンテンツと余白で語る静かな自信
3. **Craftsmanship in Detail** — マイクロインタラクション、フォーカスリング、キーボード操作、ダークモードといった細部の作り込み

→ ひとことで言うと「**Linear / Vercel / Resend のような、技術企業のドキュメントサイトに通じる質感**」を目指す。

---

## 2. デザインシステム

### 2.1 カラートークン

`tailwind.config.ts` に以下のカスタムカラーを追加。CSS変数経由でダークモード対応。

```ts
// tailwind.config.ts (抜粋)
theme: {
  extend: {
    colors: {
      // セマンティックトークン（CSS変数参照）
      bg: "rgb(var(--bg) / <alpha-value>)",
      surface: "rgb(var(--surface) / <alpha-value>)",
      "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
      border: "rgb(var(--border) / <alpha-value>)",
      fg: "rgb(var(--fg) / <alpha-value>)",
      "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
      "fg-subtle": "rgb(var(--fg-subtle) / <alpha-value>)",
      accent: "rgb(var(--accent) / <alpha-value>)",
      "accent-fg": "rgb(var(--accent-fg) / <alpha-value>)",
    },
  },
}
```

`app/globals.css` に変数を定義:

```css
:root {
  --bg: 255 255 255;          /* white */
  --surface: 250 250 250;     /* zinc-50 */
  --surface-2: 244 244 245;   /* zinc-100 */
  --border: 228 228 231;      /* zinc-200 */
  --fg: 24 24 27;             /* zinc-900 */
  --fg-muted: 82 82 91;       /* zinc-600 */
  --fg-subtle: 161 161 170;   /* zinc-400 */
  --accent: 37 99 235;        /* blue-600 既存色を踏襲 */
  --accent-fg: 255 255 255;   /* white */
}

.dark {
  --bg: 9 9 11;               /* zinc-950 */
  --surface: 24 24 27;        /* zinc-900 */
  --surface-2: 39 39 42;      /* zinc-800 */
  --border: 39 39 42;         /* zinc-800 */
  --fg: 250 250 250;          /* zinc-50 */
  --fg-muted: 161 161 170;    /* zinc-400 */
  --fg-subtle: 113 113 122;   /* zinc-500 */
  --accent: 96 165 250;       /* blue-400 */
  --accent-fg: 9 9 11;
}
```

### 2.2 タイポグラフィ

- 日本語: Noto Sans JP（既存）
- 英数字: **Inter** を新規導入（`next/font/google`）
- 等幅: **JetBrains Mono** を新規導入（コードスニペット、数字、技術名で使用）

```ts
// app/layout.tsx
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans-en" });
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-sans-jp" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

タイプスケール（Tailwindユーティリティで運用）:

| 用途 | クラス例 | 備考 |
|---|---|---|
| Hero見出し | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight` | 詰めて重厚に |
| セクション見出し | `text-3xl md:text-4xl font-bold tracking-tight` | |
| サブ見出し | `text-xl font-semibold` | |
| 本文 | `text-base leading-relaxed text-fg-muted` | |
| キャプション | `text-sm text-fg-subtle` | |
| 等幅（数字・技術名） | `font-mono text-sm` | 技術スタックバッジで使用 |

### 2.3 余白・グリッド

- セクション間の縦余白: `py-24 md:py-32`
- コンテナ幅: `max-w-6xl mx-auto px-6 md:px-8`
- セクション内の縦リズム: `space-y-12` を基本

### 2.4 角丸・影

- カード: `rounded-2xl`
- ボタン: `rounded-lg`
- バッジ: `rounded-full`（小さいもの）/ `rounded-md`（技術名）
- 影は控えめ: `shadow-sm` を基本、ホバー時に `shadow-lg` まで

### 2.5 モーション

- `prefers-reduced-motion` を尊重（必須）
- 標準のイージング: `ease-out` / `cubic-bezier(0.16, 1, 0.3, 1)`
- 標準の duration: `200ms`（ホバー）/ `400ms`（出現）/ `600ms`（大きな変化）
- スクロール出現: `framer-motion` の `whileInView` で fade + 8px translateY
- ホバー: ボタンは scale なし（色変化のみ）、カードは `translateY(-2px)` + 影強化

---

## 3. グローバル要素

### 3.1 ナビゲーションバー

- 位置: 固定 `sticky top-0 z-50`
- 背景: スクロール前は透明、スクロール後は `bg-bg/80 backdrop-blur-md border-b border-border`
- 高さ: `h-16`
- 中身: 左にロゴ `syake-ichiro`、右にナビリンク（About / Skills / Works / Contact）+ ダークモード切替ボタン
- リンクのホバー: 下線アニメーション（`::after` で left→right に伸びる）
- モバイル: ハンバーガーメニュー → フルスクリーンドロワー（`framer-motion` で fade + slide）
- 現在表示中のセクションを示すアクティブインジケータ（`IntersectionObserver` で実装）

### 3.2 ダークモード

- `next-themes` を導入
- 初期値: `system`（OS設定に従う）
- ナビ右端にトグルボタン（`lucide-react` の Sun/Moon アイコン）
- 切り替え時のフラッシュ防止（`suppressHydrationWarning` + `<script>` でテーマ先行適用）

### 3.3 スムーズスクロール

- `html { scroll-behavior: smooth; }` をCSSで指定
- ナビ高さぶんのオフセットを `scroll-margin-top: 4rem;` で各セクションに付与

### 3.4 グローバル装飾

- `<body>` 直下にごく薄いノイズテクスチャを `::before` で重ねる（`opacity: 0.015 ~ 0.03`）
- 大きなセクション境界に薄い水平線 `border-t border-border` を入れる

---

## 4. セクション仕様

### 4.1 Hero

**目的**: 5秒で「課題をコードで解決する、AI駆動の即戦力フルスタックエンジニア」と伝える。

**レイアウト（lg以上）**: 左右2カラム（左55%・右45%）

**左カラム（縦に積む）**:

1. アイブロウ: `フルスタックエンジニア`（accent色、`tracking-widest text-sm uppercase` 風だが日本語なのでそのまま）
2. 見出し: `業務の課題を、`改行`コードで解決します。`（`text-7xl font-bold tracking-tight`）
3. 説明文: `通信大手で4年間、ミッションクリティカルなシステム開発に従事。業務自動化・効率化を得意とするフルスタックエンジニアです。`
4. CTAボタン2つ横並び: 
   - プライマリ「制作物を見る」→ `#works`（accent色塗り）
   - セカンダリ「お仕事のご相談」→ `#contact`（border + transparent）
5. 実績バッジ3つ横並び:
   - `4年` / `大企業での実務経験`
   - `90%` / `作業時間削減実績`
   - `AI駆動` / `Claude Code活用`
   - 数字部分は `font-mono`、ラベルは `text-fg-muted text-xs`

**右カラム**: macOS風コードカード

```tsx
// 表示するコード本文（シンタックスハイライト付き）
// syake-ichiro / fullstack-engineer
type Problem = "業務の非効率" | "手作業の繰り返し";

async function solve(problem: Problem) {
  const stack = ["Next.js", "Django", "Supabase"];
  const tools = ["Claude Code", "GitHub Copilot"];

  return await deliver({
    stack,
    tools,
    timeReduction: "90%",
  });
}

// → 業務の課題を、コードで解決します。
```

- カード: `bg-zinc-900 rounded-xl shadow-2xl`（ダークモードでも変えない＝固定でダーク）
- 上部: 赤・黄・緑の3ドット + ファイル名 `solve.ts`
- シンタックスハイライト: 軽量実装で `<span>` に色を付ける手書き or `shiki` の事前ハイライト
- マウント時アニメ: 行が上から順に150ms間隔でフェードイン
- 末尾にカーソル点滅 `▋`（`@keyframes blink`）

**背景装飾**: セクション全体の左上に薄いラジアルグラデーション（accent色）、右下にも同様。`opacity: 0.4` 程度。

**モバイル**: 縦1カラム。コードカードは下部、横スクロール可、フォントサイズ縮小。

---

### 4.2 About

**目的**: 人物像の信頼度を底上げする。

**レイアウト**: 左右2カラム（lg以上）。左にプロフィール、右に経歴とハイライト。

**左カラム**:
- 大きめの正方形カード（`aspect-square max-w-sm`）にアバターを表示
  - 画像があればそれを使用、なければイニシャル `S` を中央に大きく表示（`text-8xl font-bold` + accent色グラデーション）
  - カードは `bg-surface border border-border rounded-2xl p-8`
- 下に名前 `syake-ichiro`、肩書き `フルスタックエンジニア`
- GitHubリンクボタン（`lucide-react` の `Github` アイコン + ラベル）

**右カラム**:
- 見出し: `About`（`text-sm uppercase tracking-widest text-fg-muted`）+ 大きい見出し `課題解決を、コードで。`
- 本文（既存のテキスト）: 通信会社4年勤務 → 副業案件募集中、までを2〜3段落で構成
- 下にハイライトカード3つ（縦並び or 2x2グリッド）
  - 既存の `本業4年 / 90%削減 / 認証セキュリティ` を流用
  - 各カードに `lucide-react` のアイコン（`Briefcase`, `Zap`, `Lock`）を左に配置
  - カード: `bg-surface border border-border rounded-2xl p-6 hover:border-accent transition-colors`

---

### 4.3 Skills（最も視覚的に強化したいセクション）

**目的**: 技術スタックを「網羅」ではなく「**得意領域の地図**」として見せる。

**新レイアウト: Bento Grid**

`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4` のベント型グリッドで、サイズ違いのカードを並べる。

カード構成:

| カード | サイズ | 内容 |
|---|---|---|
| AI駆動開発 | `md:col-span-2 md:row-span-2` 大 | アイコン + 見出し「AI-Driven Development」+ 説明 + Claude Code / GitHub Copilot のロゴ風バッジ |
| フロントエンド | `md:col-span-2` 横長 | Next.js / React / Angular / TypeScript / Tailwind CSS の技術名を `font-mono` で並べる |
| バックエンド | `md:col-span-1` | Django / Python / uWSGI / REST API |
| インフラ | `md:col-span-1` | Nginx / Linux / Git / GitHub / Vercel / Supabase |
| ワークフロー設計 | `md:col-span-2` 横長 | アイコン + 「設計から納品までワンストップ」みたいな説明 |

各カードのスタイル:
- `bg-surface border border-border rounded-2xl p-6`
- ホバー時: `border-accent/50` + `translateY(-2px)` + 影強化
- 大カードには中央〜右下に大きな半透明アイコン（装飾）

技術名バッジ:
- `inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-2 border border-border font-mono text-sm`
- 可能なら左に各技術のロゴ（`simple-icons` か `react-icons/si`）を表示

**省略すべきもの**: 旧デザインの「フロントエンド/バックエンド/インフラ・その他/開発スタイル」というベタな分類タイトル。代わりに各カード自体が説明している構造にする。

---

### 4.4 Works

**目的**: 「準備中」感を払拭し、これから出てくる楽しみがある状態にする。

**レイアウト**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

各カード（`<article>`）:
- 上部にビジュアル領域（`aspect-[4/3]`）
  - 画像があれば画像、なければグラデーション + 大きな絵文字 or `lucide-react` アイコンを中央配置
  - 各プロジェクト固有のグラデーション（SaaS=青系、情報レコメンド=紫系、資産管理=緑系 など差異を出す）
- 下部に内容:
  - ステータスバッジ右上（`制作予定` → `Coming Soon` のピル）
  - タイトル `text-xl font-semibold`
  - 説明文（既存）
  - 技術タグ（`Next.js / Supabase / Recharts` など、既存の表記を流用）
- カード全体ホバー: `translateY(-4px)` + 影強化 + ビジュアル領域のグラデーションが微妙に動く（`background-position` アニメ）
- カード: `bg-surface border border-border rounded-2xl overflow-hidden transition-all`

**ステータスバッジ表現**:
- `Coming Soon`: `bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20`
- `Live`: `bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20`（将来用）

---

### 4.5 Contact

**目的**: 問い合わせのハードルを下げる。

**レイアウト**: 左右2カラム（lg以上）。

**左カラム**:
- 見出し `お仕事のご相談` + 大見出し `Let's build something together.`
- 本文: 既存の「副業として承っています…」「返信は2〜3営業日以内」
- 連絡手段の代替リスト:
  - メール: アイコン + アドレス（コピーボタン付き）
  - GitHub: アイコン + リンク
- 「対応可能な案件」のチェックリスト（軽く）:
  - 業務自動化ツール開発
  - SaaSのMVP開発
  - 既存システムのリファクタ・パフォーマンス改善
  - AI駆動開発の導入支援

**右カラム**: 既存のフォームを刷新
- 入力欄: ボーダー型 → フォーカス時に accent色の細いリング
- ラベル: 入力の上に小さく `text-sm font-medium`
- 必須マーク: accent色の `*`
- バリデーション: クライアントサイドで簡易チェック（メール形式・必須）
- 送信ボタン: フル幅、accent色、ホバーで微妙に明度変化
- 送信成功時: フォームを置き換える形で「ありがとうございます」のメッセージカード（`framer-motion` でフェード）

---

### 4.6 Footer

- 上下パディング `py-12`
- 上部に細い区切り線
- 左: `© 2026 syake-ichiro. All rights reserved.`（年は自動更新: `new Date().getFullYear()`）
- 右: GitHubリンク（アイコンのみ）+ 「Built with Next.js & Tailwind CSS」の小テキスト

---

## 5. アニメーション・インタラクション全体方針

### 5.1 スクロール出現

`framer-motion` を導入し、共通コンポーネント `<Reveal>` を作る:

```tsx
// components/Reveal.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

各セクションの主要要素を `<Reveal>` で囲む。多用しすぎないこと（過剰だとうるさくなる）。

### 5.2 カーソル

カスタムカーソルは導入しない（パフォーマンス・アクセシビリティ・モバイル対応の観点で割に合わない）。
代わりにインタラクティブ要素のホバー演出を丁寧に作る。

### 5.3 数字のカウントアップ

About / Heroの数字バッジ（4年 / 90%）にカウントアップアニメを入れる（任意）。`motion` の値アニメで実装可能。やりすぎ注意で1.5秒以内に完了させる。

---

## 6. パフォーマンス・アクセシビリティ要件

### パフォーマンス
- Lighthouse Performance ≥ 90（モバイル）
- 画像は `next/image` 経由
- フォントは `next/font` で self-host & preload
- `framer-motion` のインポートはクライアントコンポーネント内に閉じ込める
- 不要な `"use client"` は付けない

### アクセシビリティ
- セマンティックHTML（`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`）
- 全インタラクティブ要素にフォーカスリング（`focus-visible:ring-2 focus-visible:ring-accent`）
- 装飾的なアイコンは `aria-hidden`
- フォームは `<label>` を必ず関連付け
- 色のみで情報を伝えない
- `prefers-reduced-motion: reduce` のとき、出現アニメを無効化

### SEO
- `app/layout.tsx` の `metadata` を整備
  - title: `syake-ichiro | フルスタックエンジニア`
  - description: ヒーロー説明文を流用
  - openGraph: OG画像を生成（`opengraph-image.tsx` で動的生成）
- `robots.txt` と `sitemap.xml` を設置

---

## 7. ファイル構成（推奨）

```
app/
  layout.tsx               # フォント、テーマプロバイダ、メタデータ
  page.tsx                 # 各セクションをimportして並べる
  globals.css              # CSS変数、ベーススタイル
  opengraph-image.tsx      # OG画像生成（任意）
components/
  layout/
    Navbar.tsx
    Footer.tsx
    ThemeToggle.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Works.tsx
    Contact.tsx
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Reveal.tsx
    CodeCard.tsx           # Heroで使うコードカード
lib/
  utils.ts                 # cn() ヘルパなど
```

---

## 8. 実装手順（推奨順序）

各ステップで `npm run build` が通ることを確認しながら進める。

1. **基盤整備**
   - フォント導入（Inter / Noto Sans JP / JetBrains Mono）
   - `tailwind.config.ts` のトークン拡張
   - `globals.css` のCSS変数定義
   - `next-themes` 導入とProvider設置
   - 共通UI（Button / Card / Badge / Reveal）作成

2. **グローバル要素**
   - Navbar（スクロール挙動・ダークモードトグル・モバイルメニュー）
   - Footer

3. **セクションを上から順に**
   - Hero
   - About
   - Skills（Bento Grid）
   - Works
   - Contact

4. **仕上げ**
   - スクロール出現アニメ（`<Reveal>`）の調整
   - メタデータ・OG画像
   - Lighthouse確認・微調整

---

## 9. 受け入れ基準（チェックリスト）

実装完了後、以下をすべて満たすこと:

### 機能面
- [ ] ナビゲーションバーがスクロールに応じて背景を変える
- [ ] ナビリンクが該当セクションに正しくスクロールする
- [ ] ダークモードの切り替えが動作し、再読込後も保持される（`next-themes`）
- [ ] モバイルメニューが開閉し、リンククリックで自動的に閉じる
- [ ] Heroのコードカードが正しく表示され、シンタックスハイライトが効いている
- [ ] Worksの「Coming Soon」バッジが3カードすべてに付いている
- [ ] Contactフォームのバリデーションが動作する
- [ ] フッターの年が自動更新される

### デザイン面
- [ ] 全セクションでデスクトップ/タブレット/モバイルのレイアウトが破綻しない
- [ ] ライト/ダーク両方で十分なコントラスト比が確保されている
- [ ] フォーカスリングがすべてのインタラクティブ要素で見える
- [ ] スクロール出現アニメが過剰でない

### パフォーマンス・品質
- [ ] `npm run build` がエラー・警告なく通る
- [ ] Lighthouse Performance ≥ 90（モバイル）
- [ ] Lighthouse Accessibility ≥ 95
- [ ] `prefers-reduced-motion` 設定時にアニメが抑制される
- [ ] TypeScriptの型エラーがゼロ

---

## 10. 触ってよいファイル / 触ってはいけないもの

- 触ってよい: ソースコード全般、`tailwind.config.*`、`next.config.*`、依存関係（必要なものを追加）
- 触ってはいけない: 外部APIキーや環境変数の中身、デプロイ設定（`.vercel` など）

---

## 11. 実装後の報告

1. 変更したファイル一覧
2. 追加した依存パッケージ一覧
3. 判断に迷った箇所（どう判断したか）
4. 残課題（あれば）
5. ローカルでの起動方法と確認手順

---

以上です。**実装前に、ファイル構成と1.基盤整備のところで認識合わせをしてから進めてください。**
途中で仕様の解釈に迷ったら止まって質問してください。
