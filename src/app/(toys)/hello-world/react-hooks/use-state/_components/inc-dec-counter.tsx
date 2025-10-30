"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function IncDecCounter() {
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
    <div className="flex flex-col gap-4">
      <div className="flex w-44 flex-col gap-2 text-center">
        <Button variant="outline" onClick={() => updateCount(incrementNum)}>
          +{incrementNum}
        </Button>
        <div>count: {count}</div>
        <Button variant="outline" onClick={() => updateCount(decrementNum)}>
          {decrementNum}
        </Button>
      </div>
      <div>
        <Button variant="ghost" onClick={resetCount}>
          リセット
        </Button>
      </div>
    </div>
  );
}

export { IncDecCounter };
