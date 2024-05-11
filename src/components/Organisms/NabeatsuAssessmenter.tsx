'use client';

import { useState } from 'react';
import IncDecForm from '../Molecules/IncDecForm';

/**
 * 入力値が 3 の倍数であるか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 の倍数であれば true, そうでなければ false
 */
const isThreeMultiple = (num: number): boolean => num % 3 === 0;

/**
 * 入力値に 3 を含む桁が存在するか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 を含む桁があれば true, そうでなければ false
 */
const hasThreeDigits = (num: number): boolean => {
  // 入力を絶対値へ変換する
  // e.g. -1234 ⇒ 1234
  let absNum = Math.abs(num);

  // 各桁を調べる
  while (absNum > 0) {
    // 最下位の桁を取得して 3 と比較する
    // e.g. 1234 % 10 = 1230 ... 4 ⇒ 4 が最下位の桁となる
    const digit = absNum % 10;
    if (digit === 3) {
      return true;
    }
    // 最下位の桁を削除して次の桁へ移動
    // e.g. 1234 / 10 = 123.4 ⇒ 123 を次の計算で使用する
    absNum = Math.floor(absNum / 10);
  }

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

export default function NabeatsuAssessmenter() {
  const [count, setCount] = useState(0);

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      {/* 加算減算させる UI */}
      <IncDecForm
        labelText="n"
        formNum={count}
        setFormNum={setCount}
        decrementNum={-1}
        incrementNum={1}
      />
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
