'use client';

import { LabeledInput } from '@/components/Atoms/LabeledInput';
import { useState } from 'react';
import { ResetButton } from '../Atoms/ResetButton';
import { ResultDisplay } from '../Atoms/ResultDisplay';

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
    // 最下位の桁を取得する
    // 入力を 10 で割って余剰を取り出すと取得できる
    // e.g. `1234 % 10 = 1230 ... 4` ⇒ `4` が最下位の桁となる
    const digit = absNum % 10;

    // 3 と比較して等しい桁が見つかったら true を返す
    if (digit === 3) {
      return true;
    }

    // 見つからなかったら最下位の桁を削除して次の桁へ移動する
    // 入力を 10 で割って小数部を切り捨てると削除できる
    // e.g. `1234 / 10 = 123.4` ⇒ `123` を次の計算で使用する
    absNum = Math.trunc(absNum / 10);
  }

  // 3 と等しい桁が見つからずにループを抜けたら false を返す
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

const NabeatsuAssessmenter = () => {
  const [count, setCount] = useState<number | ''>('');

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount('');
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      {/* 加算減算させる UI */}
      <LabeledInput
        labelText="n ="
        count={count}
        setCount={setCount}
        inputType="number"
      />
      <ResultDisplay
        result={isNabeatsu(Number(count)) ? `${count}!!!` : count}
      />
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { NabeatsuAssessmenter };
