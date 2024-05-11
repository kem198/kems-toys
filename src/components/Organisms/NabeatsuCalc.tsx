'use client';

import { useState } from 'react';

/**
 * 入力値が 3 の倍数であるか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 の倍数であれば true, そうでなければ false
 */
const isThreeMultiple = (num: number): boolean => {
  // 0 は 3 の倍数ではないため除外する
  if (num === 0) {
    return false;
  }

  // 入力値が 3 の倍数であるか評価して返す
  return num % 3 === 0;
};

/**
 * 入力値に 3 を含む桁が存在するか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 を含む桁があれば true, そうでなければ false
 */
const hasThreeDigits = (num: number): boolean => {
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

  // 桁数分だけ評価を繰り返す
  for (let i = 0; i < numDigits; i += 1) {
    // 桁の重みを求める (e.g. 10^3 ⇒ 1000)
    const numDigitsWeight = 10 ** commonLogQuotient;

    // 桁の値を取得する
    const digit = Math.floor(absNum / numDigitsWeight) % 10;

    // 3 を含む桁があれば true を返して終了する
    if (digit === 3) {
      return true;
    }
  }

  // 3 を含む桁がなければ false を返す
  return false;
};

/**
 * 与えられた数値について次のいずれかの条件を満たすか評価する関数
 *
 * (A) 3 の倍数である
 * (B) 3 を含む桁が存在する
 *
 * @param {number} num - 評価する数値
 * @returns {boolean} - 条件を満たす場合は true, そうでなければ false
 */
const isNabeatsu = (num: number): boolean =>
  isThreeMultiple(num) || hasThreeDigits(num);

export default function NabeatsuCalc() {
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
        <p>{isNabeatsu(count) ? `${count}!!!` : count}</p>
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
