"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

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
        <Button onClick={() => updateCount(decrementNum)}>
          {decrementNum}
        </Button>
        <div>count: {countRef.current}</div>
        <Button onClick={() => updateCount(incrementNum)}>
          +{incrementNum}
        </Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={rerender}>再描写</Button>
        <Button variant="ghost" onClick={resetCount}>
          リセット
        </Button>
      </div>
    </div>
  );
};

export { RefCounter };
