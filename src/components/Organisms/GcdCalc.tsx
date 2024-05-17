'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
import { calcGcd } from '@/utilities/gcd';
import { useState } from 'react';

const GcdCalc = () => {
  const [mCount, setMCount] = useState<number>();
  const [nCount, setNCount] = useState<number>();

  /**
   * m と n を初期値 (1) にリセットする関数
   */
  const resetCounts = () => {
    setMCount(0);
    setNCount(0);
  };

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      <LabeledNumberInput labelText="m =" count={mCount} setCount={setMCount} />
      <LabeledNumberInput labelText="n =" count={nCount} setCount={setNCount} />
      <ResultDisplay
        result={mCount && nCount && calcGcd(Number(mCount), Number(nCount))}
      />
      <ResetButton onClick={resetCounts} />
    </div>
  );
};
export { GcdCalc };
