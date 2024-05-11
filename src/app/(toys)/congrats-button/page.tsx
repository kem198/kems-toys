import Version from '@/components/Atoms/Version';
import CongratsButton from '@/components/Organisms/CongratsButton';

export default function App() {
  return (
    <div>
      <article className="prose">
        <h1>おめでとうボタン</h1>
      </article>
      <CongratsButton />
      <article className="prose prose-sm">
        <div className="divider" />
        <p>使用ライブラリ:</p>
        <ul>
          <li>
            <a
              href="https://github.com/loonywizard/js-confetti"
              target="_blank"
            >
              js-confetti
            </a>{' '}
            (
            <a
              href="https://github.com/loonywizard/js-confetti/blob/main/LICENSE"
              target="_blank"
            >
              MIT
            </a>
            )
          </li>
          <li>
            <a
              href="https://github.com/mathiasbynens/emoji-regex"
              target="_blank"
            >
              emoji-regex
            </a>{' '}
            (
            <a
              href="https://github.com/mathiasbynens/emoji-regex/blob/main/LICENSE-MIT.txt"
              target="_blank"
            >
              MIT
            </a>
            )
          </li>
          <li>
            <a href="https://github.com/missive/emoji-mart" target="_blank">
              emoji-mart
            </a>{' '}
            (
            <a
              href="https://github.com/missive/emoji-mart/blob/main/LICENSE"
              target="_blank"
            >
              MIT
            </a>
            )
          </li>
        </ul>
        <p>参考文献:</p>
        <ul>
          <li>
            <a
              href="https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7"
              target="_blank"
            >
              文字列を1文字ずつ配列化（サロゲートペアを考慮） #JavaScript -
              Qiita
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/catnose99/scraps/79012f2617ffd9"
              target="_blank"
            >
              絵文字をひとつだけ取り出す技術
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/masa5714/articles/0e8663e9f98082"
              target="_blank"
            >
              JavaScriptで絵文字を手軽かつ正確にカウントする
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/designly/create-an-emoji-selector-for-next-js-forms-using-tailwind-daisyui-24f5caf17626"
              target="_blank"
            >
              Create an Emoji Selector for Next.js Forms using Tailwind +
              DaisyUI | by Designly | Designly | Medium
            </a>
          </li>
        </ul>
        <Version version="0.1.2" onDate="2024-05-11" />
      </article>
    </div>
  );
}
