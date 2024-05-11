import StyledMarkdown from '@/components/Atoms/StyledMarkdown';
import Version from '@/components/Atoms/Version';
import CongratsButton from '@/components/Organisms/CongratsButton';

const bodySource = `
# おめでとうボタン
`;

const supplementSource = `
使用ライブラリ:

- [js-confetti](https://github.com/loonywizard/js-confetti) ([MIT](https://github.com/loonywizard/js-confetti/blob/main/LICENSE))
- [emoji-regex](https://github.com/mathiasbynens/emoji-regex) ([MIT](https://github.com/mathiasbynens/emoji-regex/blob/main/LICENSE-MIT.txt))
- [emoji-mart](https://github.com/missive/emoji-mart) ([MIT](https://github.com/missive/emoji-mart/blob/main/LICENSE))

参考文献:

- [文字列を1文字ずつ配列化（サロゲートペアを考慮） #JavaScript - Qiita](https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7)
- [絵文字をひとつだけ取り出す技術](https://zenn.dev/catnose99/scraps/79012f2617ffd9)
- [JavaScriptで絵文字を手軽かつ正確にカウントする](https://zenn.dev/masa5714/articles/0e8663e9f98082)
- [Create an Emoji Selector for Next.js Forms using Tailwind + DaisyUI | by Designly | Designly | Medium](https://medium.com/designly/create-an-emoji-selector-for-next-js-forms-using-tailwind-daisyui-24f5caf17626)
`;

export default function App() {
  return (
    <article>
      <StyledMarkdown source={bodySource} />
      <CongratsButton />
      <article className="prose prose-sm">
        <div className="divider" />
        <StyledMarkdown source={supplementSource} />
        <Version version="0.1.2" onDate="2024-05-11" />
      </article>
    </article>
  );
}
