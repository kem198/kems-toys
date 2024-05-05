'use client';

import { useState } from 'react';

function EuclideanAlgorithm() {
  // mCount と nCount の状態を管理する
  const [mCount, setMCount] = useState(1);
  const [nCount, setNCount] = useState(1);

  // カウントを更新する関数
  const updateCount = (countSetter, addNum) => () => {
    countSetter((prevCount) => prevCount + addNum);
  };

  /**
   * 2 つの自然数について最大公約数を求める関数
   *
   * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
   */
  const calcGcd = (m: number, n: number) => {
    // 入力が自然数であるか評価する
    if (m < 0 || n < 0) {
      return 'm または n が自然数ではありません';
    }
    // 入力が m >= n であるか評価する
    if (m < n) {
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

    return m;
  };

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      {/* mCount の加減算 UI */}
      <div className="join">
        <div className="join-item">
          <button
            type="button"
            className="btn btn-secondary join-item w-24"
            onClick={updateCount(setMCount, -1)}
          >
            -1
          </button>
        </div>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          m = {mCount}
        </div>
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount(setMCount, 1)}
        >
          +1
        </button>
      </div>
      {/* nCount の加減算 UI */}
      <div className="join">
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount(setNCount, -1)}
        >
          -1
        </button>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          n = {nCount}
        </div>
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={updateCount(setNCount, 1)}
        >
          +1
        </button>
      </div>

      {/* 結果表示領域 */}
      <div className="flex h-20 w-72 place-items-center items-center justify-center rounded-box bg-base-200">
        <p>{calcGcd(mCount, nCount)}</p>
      </div>
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
        <p>
          <a
            href="https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E4%BA%92%E9%99%A4%E6%B3%95"
            target="_blank"
          >
            ユークリッドの互除法 - Wikipedia
          </a>
        </p>
      </article>
      <EuclideanAlgorithm />
    </div>
  );
}
