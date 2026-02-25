# shibayan.jp

![Publish](https://github.com/shibayan/shibayan.jp/workflows/Publish/badge.svg)

Tatsuro Shibamura ([@shibayan](https://github.com/shibayan)) のプロフィールサイトです。

https://shibayan.jp

## 技術スタック

- [Astro](https://astro.build/) v5
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Node.js](https://nodejs.org/) (Volta で管理)

## 開発

### 前提条件

- Node.js 24 以降（[Volta](https://volta.sh/) 推奨）

### セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

### コマンド

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用にビルド |
| `npm run preview` | ビルド結果をプレビュー |

## ディレクトリ構成

```
src/
├── components/   # Astro コンポーネント
├── images/       # 画像アセット
├── layouts/      # レイアウト
├── pages/        # ページ
└── styles/       # グローバルスタイル
public/
└── slides/       # スライド資料
```

## ライセンス

ISC
