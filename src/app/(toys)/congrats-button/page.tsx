'use client';

import JSConfetti from 'js-confetti';
import { useEffect, useRef, useState } from 'react';

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

  // 絵文字入力用フォームの参照を定義
  const emojiTextRef = useRef<HTMLInputElement>(null);

  // ボタンクリック時に呼ばれる処理
  const showConfetti = () => {
    // confetti が undefined でないときのみ後続処理を実行する
    if (!confetti) {
      return;
    }

    /**
     * フォームへ入力された文字列を評価する
     *
     * 真であればスプレッド構文で 1 文字ずつ配列化して addConfetti() へオブジェクトとして渡す
     * 偽であれば引数なしで実行する
     *
     * https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
     * https://github.com/loonywizard/js-confetti?tab=readme-ov-file#customise-confetti
     */
    const emojisText = emojiTextRef.current?.value;
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
          🥳 Congrats!
        </button>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">絵文字を入力してみよう</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            ref={emojiTextRef}
          />
        </label>
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
        </ul>
      </article>
    </div>
  );
}
