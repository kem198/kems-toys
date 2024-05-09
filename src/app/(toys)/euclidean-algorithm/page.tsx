'use client';

import { MouseEventHandler, useState } from 'react';

type UpdateCountFunction = MouseEventHandler<HTMLButtonElement>;

function EuclideanAlgorithm(): JSX.Element {
  // 状態フックを使用して m と n の状態を管理する
  const [counts, setCounts] = useState<{ m: number; n: number }>({
    m: 1,
    n: 1,
  });

  // ボタンクリック時の処理関数
  const updateCount: UpdateCountFunction = (event) => {
    const { name = '', value = '0' } = event.currentTarget.dataset;
    const addNum = parseInt(value, 10);
    if (name === 'm' || name === 'n') {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [name]: prevCounts[name] + addNum,
      }));
    }
  };

  /**
   * m と n を初期値 (1) にリセットする関数
   */
  const resetCounts = () => {
    setCounts({ m: 1, n: 1 });
  };

  /**
   * 最大公約数を計算する関数
   * @param {number} m - 自然数 m
   * @param {number} n - 自然数 n
   * @returns {number | string} - 最大公約数またはエラーメッセージ
   * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
   */
  const calcGcd = (m: number, n: number): number | string => {
    // 入力が自然数であるか評価する
    if (m <= 0 || n <= 0) {
      return 'm または n が自然数ではありません';
    }
    // 入力が m >= n であるか評価する
    if (!(m >= n)) {
      return 'm ≧ n ではありません';
    }

    let tempM = m;
    let tempN = n;

    while (tempN !== 0) {
      // m と n の剰余を求める
      const q = Math.floor(tempM % tempN);

      // // m と n の商を求める
      // const r = Math.floor(tempM / tempN);
      // // 表示
      // console.log(`${tempM} / ${tempN} = ${r} ... ${q}`);

      // 元の n を新たに m とする
      tempM = tempN;
      // m と n の剰余を新たに n とする
      tempN = q;
    }

    return tempM;
  };

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      {/* mCount の加減算 UI */}
      <div className="join">
        <div className="join-item">
          <button
            type="button"
            className="btn btn-secondary join-item w-24"
            onClick={updateCount}
            data-name="m"
            data-value="-1"
          >
            -1
          </button>
        </div>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          m = {counts.m}
        </div>
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount}
          data-name="m"
          data-value="1"
        >
          +1
        </button>
      </div>
      {/* nCount の加減算 UI */}
      <div className="join">
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount}
          data-name="n"
          data-value="-1"
        >
          -1
        </button>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          n = {counts.n}
        </div>
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount}
          data-name="n"
          data-value="1"
        >
          +1
        </button>
      </div>

      {/* 結果表示領域 */}
      <div className="flex h-20 w-72 place-items-center items-center justify-center rounded-box bg-base-200">
        <p>{calcGcd(counts.m, counts.n)}</p>
      </div>

      {/* リセット */}
      <button
        type="button"
        className="btn btn-ghost w-24"
        onClick={resetCounts}
      >
        リセット
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <article className="prose">
        <h1>ユークリッドの互除法</h1>
        <p>2 つの自然数について最大公約数を求める。</p>
        <ol>
          <li>入力を m, n (m ≧ n) とする。</li>
          <li>n = 0 なら、 m を出力してアルゴリズムを終了する。</li>
          <li>
            m を n で割った余りを新たに n とし、更に元の n を新たに m とし 2.
            に戻る。
          </li>
        </ol>
      </article>
      <EuclideanAlgorithm />
      <article className="prose prose-sm">
        <div className="divider" />
        <p>参考文献:</p>
        <ul>
          <li>
            <a
              href="https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E4%BA%92%E9%99%A4%E6%B3%95"
              target="_blank"
              rel="noreferrer"
            >
              ユークリッドの互除法 - Wikipedia
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/yend724/articles/20211126-ff73enfjjrxsaxyb"
              target="_blank"
            >
              ユークリッドの互除法をCanvasで可視化する
            </a>
          </li>
        </ul>
        <div className="join">
          <div className="badge join-item badge-neutral">v0.1.0</div>
          <div className="badge join-item badge-ghost">on 2024-05-07</div>
        </div>
      </article>
    </div>
  );
}
