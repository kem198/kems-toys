'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
import { doFizzBuzz } from '@/utilities/fizzbuzz';
import { useState } from 'react';

const FizzBuzzCalc = () => {
  const [count, setCount] = useState<number | null>(null);

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(null);
  };

  /**
   * FizzBuzz を計算する関数
   *
   * 入力値が自然数でない場合はエラーメッセージを設定する
   */
  const calculateFizzBuzz = () => {
    if (count !== null && count > 0) {
      return doFizzBuzz(count);
    }
    if (count !== null && count <= 0) {
      return '入力値が自然数ではありません';
    }
    return null;
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      <LabeledNumberInput labelText="n =" count={count} setCount={setCount} />
      <ResultDisplay>{calculateFizzBuzz()}</ResultDisplay>
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { FizzBuzzCalc };
