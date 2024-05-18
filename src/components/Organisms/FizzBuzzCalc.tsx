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

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      <LabeledNumberInput labelText="n =" count={count} setCount={setCount} />
      <ResultDisplay>
        {count !== null && doFizzBuzz(Number(count))}
      </ResultDisplay>
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { FizzBuzzCalc };
