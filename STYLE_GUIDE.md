# デザインガイドライン (STYLE_GUIDE.md)

## 1. デザインコンセプト
**「大人の癒しと、自然体な健康美」**

- **キーワード**: 凛とした落ち着き、ボタニカル（植物）、信頼感、温もり
- **ターゲット**: 40代後半〜60代女性（老眼への配慮、操作のしやすさを最優先）
- **トーン＆マナー**: 派手さを抑えた、クリニックとリラクゼーションサロンの中間のような「清潔感のある親しみやすさ」。

## 2. カラーパレット (Color System)

ロゴの「ボタニカルグリーン」を基調としたアースカラー配色です。

| Token | Value | Description | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#FAFAF9` | **Warm White** (生成り) | サイト全体の背景。真っ白(#FFF)よりも目に優しく、和紙のような質感。 |
| **Surface** | `#FFFFFF` | **White** | カード、セクション背景（交互配置用）。清潔感の演出。 |
| **Primary** | `#5F7161` | **Sage Green** | **ブランドカラー**。ロゴと同系統のくすんだ緑。ヘッダー、フッター、アイコン。 |
| **Secondary** | `#D48E7E` | **Terracotta** | **アクセント/CTA**。サーモンピンクに近い赤土色。血色感、女性らしさ。 |
| **Accent** | `#C5A059` | **Matt Gold** | **高級感**。見出しの下線、装飾、重要な数字の強調。 |
| **Text Main** | `#434343` | **Sumiiro** (墨色) | 本文。コントラストを確保しつつ、黒(#000)より柔らかい。 |
| **Text Muted** | `#78716C` | **Stone Gray** | 補足情報、日付など。 |
| **Border** | `#E7E5E4` | **Warm Gray** | 区切り線。主張しすぎない色。 |

## 3. タイポグラフィ (Typography)

**可読性最優先**。一般的なWebサイトよりも「ひと回り大きく」「ゆったり」と設定します。

- **Font Family**: `"Noto Sans JP", sans-serif`
- **Base Size**: `16px` (スマホでの最小可読サイズ)
- **Line Height**: `2.0` (leading-loose) - 行間を広く取り、読み疲れを防ぐ。

### フォントサイズ・スタイル定義
| Role | Mobile (SP) | Desktop (PC) | Weight | Tailwind Class (目安) |
| :--- | :--- | :--- | :--- | :--- |
| **Page Title** | 24px | 32px | Bold | `text-2xl md:text-4xl font-bold` |
| **Section H2** | 22px | 28px | Bold | `text-xl md:text-3xl font-bold text-[#5F7161]` |
| **Card H3** | 18px | 22px | Medium | `text-lg md:text-xl font-medium` |
| **Body** | 16px | 18px | Regular | `text-base md:text-lg leading-loose` |
| **Caption** | 14px | 15px | Regular | `text-sm text-gray-500` |

## 4. UIコンポーネント設計

### (A) ボタン (CTA)
- **形状**: 完全な角丸 (Pill shape) `rounded-full`
- **サイズ**: 高さ `56px` 以上（指でタップしやすいサイズ）
- **Primary (予約)**:
  - Background: `#D48E7E` (Terracotta) または `#5F7161` (Green)
  - Text: `#FFFFFF`
  - Shadow: `shadow-lg` (ふんわりとした浮き出し)
  - Effect: ホバー時に少し薄くなる、または上に移動する

### (B) カード (Cards)
- **背景**: `#FFFFFF`
- **角丸**: `rounded-2xl` (16px - 24px) - 大きめの角丸で優しさを表現
- **枠線**: なし、または極薄い `#E7E5E4`
- **影**: `shadow-sm` (薄く、広がる影)。濃い影は避ける。

### (C) 見出し装飾 (Headings)
- **H2**: セージグリーン(`#5F7161`)の文字 ＋ 下にゴールド(`#C5A059`)のライン、または植物アイコンのあしらい。
- **装飾**: 植物の葉（Leaf）のアイコンをうっすらと背景や見出し横に配置。

## 5. レイアウト・セクション別指針

### 共通ルール (SP First)
- **左右余白**: スマホでは `px-5` (20px) を確保。
- **セクション間隔**: `py-20` (80px) 以上。余白＝高級感・ゆとり。

### Hero (FV)
- **背景**: オーナー提供のイメージ写真（または日本人女性の笑顔）。
- **コピー**: 白帯または半透明の白ボックスを重ねて、文字の視認性を100%確保する。
- **雰囲気**: 「悩み」よりも「解決後の明るい未来」を想起させる。

### Menu / Price
- **表組み禁止**: スマホで崩れるため、`flex-col` のカードリスト形式、または定義リスト(`dl`, `dt`, `dd`)で縦に積む。
- **価格強調**: 金額部分は大きく、太く。`text-[#C5A059]` または `text-[#D48E7E]`。

### Access
- **Google Maps**: スマホでのスクロール誤操作を防ぐため、地図の上に透明なオーバーレイを置くか、あるいは画像リンクにする等の配慮。
- 「地図アプリで開く」ボタンを設置。

### Sticky Footer (CTA)
- スマホ閲覧時、画面下部に常に「LINE予約」「電話」ボタンを固定表示。
- 背景: 白 (`bg-white/95 backdrop-blur`) ＋ 上部に細いボーダー。

## 6. アイコン・素材
- **Icons**: `Lucide React` を使用。線が細く上品なものを選ぶ（例: `Leaf`, `Sparkles`, `Calendar`, `Phone`, `MessageCircle`）。
- **Images**: 写真は角丸(`rounded-xl`)で配置。必要に応じてセピアや彩度を落とすフィルタをかけ、サイトのトーンに合わせる。


