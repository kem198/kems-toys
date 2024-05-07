'use client';

import JSConfetti from 'js-confetti';
import { useEffect, useState } from 'react';

export default function App() {
  /**
   * インスタンス用の変数とセッターを定義する
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

  // ボタンクリック時に呼ばれる処理
  const showConfetti = () => {
    // confetti が undefined でないときのみ後続処理を実行する
    if (confetti) {
      confetti.addConfetti();
    }
  };

  return (
    <div>
      <article className="prose">
        <h1>おめでとうボタン</h1>
      </article>
      <div className="container my-8 w-fit max-lg:mx-auto">
        <button type="button" className="btn btn-lg" onClick={showConfetti}>
          🥳 Congrats!
        </button>
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
