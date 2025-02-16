'use client';

import { useRef, useState } from 'react';

const RefCounter = () => {
  // countRef への参照を定義
  const countRef = useRef<number>(0);

  // console.log(countRef);
  // console.log(countRef.current);
  // countRef.current += 1;
  // console.log(countRef.current);

  // コンポーネント再レンダリング用のダミーステート
  const [, setDummy] = useState(0);

  // 増減させる数値
  const decrementNum = -1;
  const incrementNum = 1;

  /**
   * count を指定された数値分だけ増加させる関数
   * @param {number} amount - 増加させる数値
   */
  const updateCount = (amount: number) => {
    countRef.current += amount;
    // console.log(countRef.current);
  };

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    countRef.current = 0;
    // console.log(countRef.current);
  };

  /**
   * コンポーネントを再レンダリングする関数
   *
   * useRef はコンポーネントの再レンダリングを行わないため、
   * ダミーのステートを更新して明示的に再描画を行う。
   */
  const rerender = () => {
    setDummy((prev) => prev + 1);
    // console.log('再描画');
  };

  return (
    <div>
      <div className="join">
        <button
          type="button"
          className="btn btn-primary join-item w-16"
          onClick={() => updateCount(decrementNum)}
        >
          {decrementNum}
        </button>
        <div className="join-item mx-auto flex min-w-32 place-items-center items-center justify-center bg-base-200 px-4">
          count: {countRef.current}
        </div>
        <button
          type="button"
          className="btn btn-primary join-item w-16"
          onClick={() => updateCount(incrementNum)}
        >
          +{incrementNum}
        </button>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="btn btn-secondary mt-4 w-24"
          onClick={rerender}
        >
          再描写
        </button>
        <button
          type="button"
          className="btn btn-ghost mt-4 w-24"
          onClick={resetCount}
        >
          リセット
        </button>
      </div>
    </div>
  );
};

export { RefCounter };
