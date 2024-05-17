'use client';

import { LabeledInput } from '@/components/Atoms/LabeledInput';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
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
const doFizzBuzz = (num: number | '') => {
  if (num === '') {
    return '数値を入力してください';
  }
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
  const [count, setCount] = useState<number | ''>('');

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount('');
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      <LabeledInput
        labelText="n ="
        count={count}
        setCount={setCount}
        inputType="number"
      />
      <ResultDisplay result={count && doFizzBuzz(Number(count))} />
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { FizzBuzzCalc };
