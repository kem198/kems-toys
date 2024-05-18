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
  const [aCount, setACount] = useState<number | null>(null);
  const [bCount, setBCount] = useState<number | null>(null);

  /**
   * m と n をリセットする関数
   */
  const resetCounts = () => {
    setACount(null);
    setBCount(null);
  };

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      <LabeledNumberInput labelText="a =" count={aCount} setCount={setACount} />
      <LabeledNumberInput labelText="b =" count={bCount} setCount={setBCount} />
      <ResultDisplay>
        m = {aCount !== null && bCount !== null && calcGcd(aCount, bCount)}
      </ResultDisplay>
      <ResetButton onClick={resetCounts} />
    </div>
  );
};

export { GcdCalc };
