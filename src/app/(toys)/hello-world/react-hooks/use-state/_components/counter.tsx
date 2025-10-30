"use client";

/* eslint-disable react/jsx-no-bind */

import { Button } from "@/components/ui/button";
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
      <Button className="" onClick={incrementCount}>
        You pressed me {count} times
      </Button>
      <div>
        <Button variant="ghost" onClick={resetCount}>
          リセット
        </Button>
      </div>
    </div>
  );
};

export { Counter };
