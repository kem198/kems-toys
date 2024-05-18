'use client';

import { useState } from 'react';

const IncDecCounter = () => {
  // count の値を保存する state 変数とセッターを定義
  const [count, setCount] = useState(0);

  // 増減させる数値
  const decrementNum = -1;
  const incrementNum = 1;

  /**
   * count を指定された数値分だけ増加させる関数
   * @param {number} amount - 増加させる数値
   */
  const updateCount = (amount: number) => {
    setCount(count + amount);
  };

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(0);
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
          count: {count}
        </div>
        <button
          type="button"
          className="btn btn-primary join-item w-16"
          onClick={() => updateCount(incrementNum)}
        >
          +{incrementNum}
        </button>
      </div>
      <div>
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

export { IncDecCounter };
