import StyledMarkdown from '@/components/Atoms/StyledMarkdown';

const source = `
# About

## このサイトは何？

[KeM's Toys](https://toys.kems-clew.net) (以下「当サイト」) は、管理人である KeM198 が制作・公開しているウェブサイトです。ウェブフロントエンド系技術の練習用として制作されました。

当サイトのソースコードは GitHub にて公開しています。

- [kenkenpa198/kems-toys](https://github.com/kenkenpa198/kems-toys)

親ドメインのサイトはこちら。

- [KeM's Clew](https://kems-clew.net/)

## 免責事項

当サイトのコンテンツやリンク先の情報、サービス等について一切の責任を負いません。

当サイトへ掲載する情報はできる限り正確な情報を提供するように努めていますが、正確性や安全性を保証するものではありません。

## 主に使用している技術・素材

### フレームワーク

- [Next.js](https://nextjs.org/) (v14 系 / App Router)

### 言語

- [TypeScript](https://www.typescriptlang.org/)

### UI 構築

- [React](https://react.dev/)

### スタイリング

- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CSS Typography](https://tailwindcss-typography.vercel.app/)
- [daisyUI](https://daisyui.com/)
- [react-markdown](https://remarkjs.github.io/react-markdown/)

### フォント

- [Google Fonts](https://fonts.google.com/)
    - [Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto+sans)

### アイコン

- [Heroicons](https://heroicons.com/)

### ホスティング

- [Vercel](https://vercel.com/)

### ドメイン取得

- [Xserverドメイン](https://www.xdomain.ne.jp/)

この他、使用したライブラリや参考文献は各ツールのページへ記載しています。

---

© 2024 kenkenpa198 / KeM198
`;

export default function Page() {
  return (
    <article>
      <StyledMarkdown source={source} />
    </article>
  );
}
