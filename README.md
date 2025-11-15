# KeM's Toys

[Next.js](https://nextjs.org/) , [React](https://react.dev/) , [TypeScript](https://www.typescriptlang.org/) , [Vitest](https://vitest.dev/) などの練習用に作成した小さなツール集。

URL はこちら。[^1]

- <https://toys.kem198.net>

[^1]: [XServer Domain](https://www.xdomain.ne.jp/) で取得した独自ドメイン `kem198.net` へサブドメイン `toys` を設定し、[Vercel](https://vercel.com/) でホスティングして公開している。

## Development

### Recommended

- [Volta](https://volta.sh/)

### Required

- [Node.js](https://nodejs.org/) ^20.12.2
- [npm](https://www.npmjs.com/) ^10.7.0

### Setup

```shell
# Clone
git clone git@github.com:kem198/kems-toys.git
cd kems-toys

# Install dependencies
npm install

# Start the local server
npm run dev
```

## References

### Next.js

- [Next.js by Vercel - The React Framework](https://nextjs.org/)
    - [Getting Started: Installation \| Next.js](https://nextjs.org/docs/getting-started/installation)
    - [Configuring: Debugging \| Next.js](https://nextjs.org/docs/pages/building-your-application/configuring/debugging#debugging-with-vs-code)
    - [Configuring: MDX \| Next.js](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
    - [Testing: Vitest \| Next.js](https://nextjs.org/docs/app/building-your-application/testing/vitest)
- [Setup Next.js with Airbnb ESLint, Prettier, TypeScript and Tailwind CSS \| Max Shen Dev](https://m4xshen.dev/posts/setup-nextjs-with-airbnb-eslint-prettier-typescript-and-tailwindcss/)
- [【完全版】Next.jsのSSG、SSR、ISR、CSRを図とコードでスッキリ理解する - らくらくエンジニア](https://rakuraku-engineer.com/posts/nextjs-app-ssgssr/)
- [Next.js で Hydration Error が起きる理由と解決方法](https://zenn.dev/luvmini511/articles/71f65df05716ca)

### React

- [React で localStorage 利用時の hydration エラーに対応する](https://zenn.dev/yami_beta/articles/ad209be154945f)
- [useSyncExternalStore – React](https://react.dev/reference/react/useSyncExternalStore#subscribing-to-a-browser-api)

### Styling

- [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
- [Tailwind CSS で要素やテキストを中央に寄せる方法 \| プログラミングと仕事論](https://shigotoron.com/tailwind-css-で要素やテキストを中央に寄せる方法/)
- [Rehype Pretty Code](https://rehype-pretty.pages.dev/)
- [Nextjsで@next/mdxを使ったマークダウンの変換でシンタックスハイライトを実装する \#Next.js - Qiita](https://qiita.com/KokiSakano/items/571130652864432b8489)

### Design Pattern

- [Next.js + MUIのスタイル再定義とアトミックデザインの話｜やっくん](https://note.com/pk_yakkun/n/ne1bc79d699be)
- [Reactフォルダ構造の最適解。コンポーネントの数に合わせて選ぶ基本方針 \| レバテックラボ（レバテックLAB）](https://levtech.jp/media/article/column/detail_711/)

### Icons

- [Lucide](https://lucide.dev/)

### ESLint

- [eslint-config-airbnb-typescript - npm](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [eslint-config-airbnb - npm](https://www.npmjs.com/package/eslint-config-airbnb)

### Prettier

- [Prettier · Opinionated Code Formatter](https://prettier.io/)
    - [Install · Prettier](https://prettier.io/docs/en/install)
- [prettier-plugin-organize-imports - npm](https://www.npmjs.com/package/prettier-plugin-organize-imports)
- [prettier-plugin-organize-imports で import 文を自動フォーマットする](https://zenn.dev/wakamsha/articles/prettier-plugin-organize-imports)

### Vitest

- [Vitest | Next Generation testing framework](https://vitest.dev/)
    - [Getting Started | Guide | Vitest](https://vitest.dev/guide/)

### PWA

- [kem198/practice-pwa](https://github.com/kem198/practice-pwa)
- [Metadata Files: manifest.json \| Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)
