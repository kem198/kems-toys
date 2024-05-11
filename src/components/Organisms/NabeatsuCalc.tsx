'use client';

import { useState } from 'react';

/**
 * 3 を含む桁が存在するか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 を含む桁があれば true, そうでなければ false を返す
 */
const hasThreeDigits = (num: number) => {
  // 入力を絶対値へ変換する (e.g. -1234 ⇒ 1234)
  const absNum = Math.abs(num);

  // 0 の場合除算で -Infinity を返すため処理を終了する
  if (absNum === 0) {
    return false;
  }

  // 常用対数を求める (e.g. 1234 ⇒ 3.091...)
  const commonLog = Math.log10(absNum);

  // 常用対数の商を求める (e.g. 3.091... ⇒ 3)
  const commonLogQuotient = Math.floor(commonLog);

  // 桁数を求める (e.g. 3 + 1 ⇒ 4)
  const numDigits = commonLogQuotient + 1;

  // 桁の重みを求める (e.g. 10^3 ⇒ 1000)
  const numDigitsWeight = 10 ** commonLogQuotient;

  // 桁数分だけ評価を繰り返す
  for (let i = 0; i < numDigits; i += 1) {
    // 入力の絶対値を桁の重みで割り、商が 3 であれば true を返して終了する
    if (Math.floor(numAbs / numDigitsWeight) === 3) {
      return true;
    } else {
      // 負の場合は次のループで評価する値を再代入する
      const deleteDigits =
        Math.floor(numAbs / numDigitsWeight) * numDigitsWeight;
      num = num - deleteDigits;
    }

    return false;
  }
};

/**
 * FizzBuzz コンポーネント
 */
export default function FizzBuzzCalc() {
  const [count, setCount] = useState(1);

  /**
   * count を指定された数値分だけ増加させる関数
   * @param {number} amount - 増加させる数値
   */
  const updateCount = (amount: number) => {
    setCount((prevCount) => prevCount + amount);
  };

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      {/* 加算減算させる UI */}
      <div className="join">
        <button
          type="button"
          className="btn btn-primary join-item w-24"
          onClick={() => updateCount(-1)}
        >
          -1
        </button>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          {count}
        </div>
        <button
          type="button"
          className="btn btn-primary join-item w-24"
          onClick={() => updateCount(1)}
        >
          +1
        </button>
      </div>
      {/* 結果表示 */}
      <div className="my-4 flex h-20 w-72 place-items-center items-center justify-center rounded-box bg-base-200">
        <p>{func(count)}</p>
      </div>

      {/* リセット */}
      <button
        type="button"
        className="btn btn-ghost w-24"
        onClick={() => resetCount()}
      >
        リセット
      </button>
    </div>
  );
}
