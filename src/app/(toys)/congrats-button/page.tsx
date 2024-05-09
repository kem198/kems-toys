'use client';

import EmojiPicker from '@/components/Atoms/EmojiPicker';
import emojiRegex from 'emoji-regex';
import JSConfetti from 'js-confetti';
import { useEffect, useState } from 'react';

export default function App() {
  /**
   * confetti インスタンス用の変数とセッターを定義する
   *
   * new JSConfetti() はクライアント側で一度だけ呼ぶ必要があるが
   * useEffect() の中で生成するとインスタンスへスコープ外からアクセスできないため
   */
  const [confetti, setConfetti] = useState<JSConfetti | undefined>(undefined);

  // レンダリング時に一度だけ実行する
  useEffect(() => {
    // js-confettiのインスタンスを生成して confetti へセットする
    const instance = new JSConfetti();
    setConfetti(instance);
  }, []);

  // 絵文字入力用フォームの変数とセッターを定義
  const [emojiText, setEmojiText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmojiText(event.target.value);
  };

  // ボタンクリック時に呼ばれる処理
  const showConfetti = () => {
    // confetti が undefined でないときのみ後続処理を実行する
    if (!confetti) {
      return;
    }

    // 絵文字のみを取り出す正規表現
    const emojiRe = emojiRegex();

    /**
     * フォームへ入力された絵文字を評価する
     *
     * 真であればスプレッド構文で 1 文字ずつ配列化して addConfetti() へオブジェクトとして渡す
     * 偽であれば引数なしで実行する
     *
     * https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
     * https://github.com/loonywizard/js-confetti?tab=readme-ov-file#customise-confetti
     */
    const emojisText = emojiText.match(emojiRe);
    if (emojisText) {
      confetti.addConfetti({ emojis: [...emojisText] });
    } else {
      confetti.addConfetti();
    }
  };

  return (
    <div>
      <article className="prose">
        <h1>おめでとうボタン</h1>
      </article>
      <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
        <button type="button" className="btn btn-lg" onClick={showConfetti}>
          🎉 Congrats!
        </button>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">好きな絵文字でお祝いしよう</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emojiText}
                onChange={handleChange}
              />
              <div>
                <EmojiPicker setText={setEmojiText} buttonIcon="🥳" />
              </div>
            </div>
          </label>
        </div>
      </div>
      <article className="prose prose-sm">
        <div className="divider" />
        <p>使用ライブラリ:</p>
        <ul>
          <li>
            <a
              href="https://github.com/loonywizard/js-confetti"
              target="_blank"
            >
              loonywizard/js-confetti
            </a>{' '}
            (
            <a
              href="https://github.com/loonywizard/js-confetti/blob/main/LICENSE"
              target="_blank"
            >
              MIT License
            </a>
            )
          </li>
          <li>
            <a
              href="https://github.com/mathiasbynens/emoji-regex"
              target="_blank"
            >
              mathiasbynens/emoji-regex
            </a>{' '}
            (
            <a
              href="https://github.com/mathiasbynens/emoji-regex/blob/main/LICENSE-MIT.txt"
              target="_blank"
            >
              MIT License
            </a>
            )
          </li>
          <li>
            <a href="https://github.com/missive/emoji-mart" target="_blank">
              missive/emoji-mart
            </a>{' '}
            (
            <a
              href="https://github.com/missive/emoji-mart/blob/main/LICENSE"
              target="_blank"
            >
              MIT License
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
      </article>
    </div>
  );
}
