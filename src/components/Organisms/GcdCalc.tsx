'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
import { calcGcd } from '@/utilities/gcd';
import { useEffect, useState } from 'react';

/**
 * GCD (最大公約数) 計算コンポーネント
 */
const GcdCalc = () => {
  // state 変数とセッターを定義
  const [aCount, setACount] = useState<number | null>(null);
  const [bCount, setBCount] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  /**
   * m と n をリセットする関数
   */
  const resetCounts = () => {
    setACount(null);
    setBCount(null);
    setResult(null);
    setSteps([]);
  };

  /**
   * `aCount` または `bCount` が変更されるたびに最大公約数を計算する
   */
  useEffect(() => {
    if (aCount !== null && bCount !== null) {
      try {
        const { gcd, steps } = calcGcd(aCount, bCount);
        setResult(`GCD = ${gcd}`);
        setSteps(steps);
      } catch (error) {
        setResult((error as Error).message);
        setSteps([]);
      }
    } else {
      // aCount または bCount が null の場合は結果をリセットする
      setResult(null);
      setSteps([]);
    }
  }, [aCount, bCount]); // `aCount` または `bCount` の変更をトリガーとする

  return (
    <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
      <LabeledNumberInput labelText="a =" count={aCount} setCount={setACount} />
      <LabeledNumberInput labelText="b =" count={bCount} setCount={setBCount} />
      <ResultDisplay>{result}</ResultDisplay>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-center font-medium">
          計算の途中経過を表示する
        </div>
        <div className="collapse-content">
          {steps.map((step, index) => (
            <div key={index} className="step">
              {step}
            </div>
          ))}
        </div>
      </div>
      <ResetButton onClick={resetCounts} />
    </div>
  );
};

export { GcdCalc };
