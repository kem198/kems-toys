"use client";

import { useState } from "react";

const Counter = () => {
  // count の値を保存する state 変数とセッターを定義
  const [count, setCount] = useState(0);
  // console.log(count);

  /**
   * count をインクリメントする関数
   */
  function incrementCount() {
    setCount(count + 1);
  }

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <button type="button" className="btn mt-4" onClick={incrementCount}>
        You pressed me {count} times
      </button>
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

export { Counter };
