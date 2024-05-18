'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
import { calcGcd } from '@/utilities/gcd';
import { useState } from 'react';

/**
 * GCD (最大公約数) 計算コンポーネント
 */
const GcdCalc = () => {
  // state 変数とセッターを定義
  const [mCount, setMCount] = useState<number | null>(null);
  const [nCount, setNCount] = useState<number | null>(null);

  /**
   * m と n をリセットする関数
   */
  const resetCounts = () => {
    setMCount(null);
    setNCount(null);
  };

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      <LabeledNumberInput labelText="a =" count={mCount} setCount={setMCount} />
      <LabeledNumberInput labelText="b =" count={nCount} setCount={setNCount} />
      <ResultDisplay>
        {mCount !== null && nCount !== null && calcGcd(mCount, nCount)}
      </ResultDisplay>
      <ResetButton onClick={resetCounts} />
    </div>
  );
};
export { GcdCalc };
