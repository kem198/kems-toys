'use client';

import { NumberInput } from '@/components/Atoms/NumberInput';
import { useState } from 'react';

/**
 * Fizz Buzz を評価する関数
 *
 * 3 で割り切れる場合は 'Fizz' を返す。
 * 5 で割り切れる場合は 'Buzz' を返す。
 * 3 または 5 で割り切れる場合は 'FizzBuzz' を返す。
 * どの数値でも割り切れない場合は引数を string 型に型変換して返す。
 *
 * @param {number} num - 評価対象の数値
 * @returns {string} - 評価結果の文字列
 */
const doFizzBuzz = (num: number) => {
  if (num <= 0) {
    return '入力が自然数ではありません';
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'Fizz Buzz!!';
  }
  if (num % 3 === 0) {
    return 'Fizz!';
  }
  if (num % 5 === 0) {
    return 'Buzz!';
  }
  return num.toString();
};

/**
 * FizzBuzz コンポーネント
 */
const FizzBuzzCalc = () => {
  const [count, setCount] = useState(1);

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      {/* 数値増減用フォーム */}
      <NumberInput labelText="n" count={count} setCount={setCount} />
      {/* 結果表示 */}
      <div className="my-4 flex h-20 place-items-center items-center justify-center rounded-box bg-base-200 p-4">
        <p>{doFizzBuzz(count)}</p>
      </div>

      {/* リセットボタン */}
      <button type="button" className="btn btn-ghost w-24" onClick={resetCount}>
        リセット
      </button>
    </div>
  );
};

export { FizzBuzzCalc };
