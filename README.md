# nook Landing Page

nook アプリのランディングページ

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

- **Hosting**: Netlify
- **URL**: https://nook-lp.netlify.app
- **Auto Deploy**: `main` ブランチへのプッシュで自動デプロイ

## CI

GitHub Actions で PR / push 時に以下を実行:

- Type check (`tsc --noEmit`)
- Lint (`eslint`)
- Build (`vite build`)

## Pages

| Path | 内容 |
|------|------|
| `/` | トップページ |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |
| `/contact` | お問い合わせ |
