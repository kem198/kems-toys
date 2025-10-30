"use client";

import {
  calcGcd,
  calcGcdSteps,
} from "@/app/(toys)/euclidean-algorithm/_utilities/gcd";
import { LabeledNumberInputOld } from "@/components/atoms/labeled-number-input-old";
import { ResetButton } from "@/components/atoms/reset-button";
import { ResultDisplay } from "@/components/atoms/result-display";
import { useEffect, useState } from "react";

/**
 * GCD (最大公約数) 計算コンポーネント
 */
const GcdCalc = () => {
  // state 変数とセッターを定義
  const [aCount, setACount] = useState<number | null>(null);
  const [bCount, setBCount] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [stepMessages, setStepMessages] = useState<string[]>([]);

  /**
   * m と n をリセットする関数
   */
  const resetCounts = () => {
    setACount(null);
    setBCount(null);
    setResult(null);
    setStepMessages([]);
  };

  /**
   * `aCount` または `bCount` が変更されるたびに最大公約数を計算する
   */
  useEffect(() => {
    if (aCount !== null && bCount !== null) {
      try {
        const gcd = calcGcd(aCount, bCount);
        const steps = calcGcdSteps(aCount, bCount);
        setResult(`GCD = ${gcd}`);
        setStepMessages(steps);
      } catch (error) {
        setResult((error as Error).message);
        setStepMessages([]);
      }
    } else {
      // aCount または bCount が null の場合は結果をリセットする
      setResult(null);
      setStepMessages([]);
    }
  }, [aCount, bCount]); // `aCount` または `bCount` の変更をトリガーとする

  return (
    <div className="container my-8 flex max-w-sm flex-col gap-4 max-lg:mx-auto">
      <LabeledNumberInputOld
        labelText="a ="
        count={aCount}
        setCount={setACount}
      />
      <LabeledNumberInputOld
        labelText="b ="
        count={bCount}
        setCount={setBCount}
      />
      <ResultDisplay>{result}</ResultDisplay>
      <div className="bg-base-200 collapse">
        <input type="checkbox" />
        <div className="collapse-title px-16 text-center font-medium">
          計算ステップを表示する
        </div>
        <div className="collapse-content">
          <ul>
            {stepMessages.map((step) => (
              <li key={step} className="step">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ResetButton onClick={resetCounts} />
    </div>
  );
};

export { GcdCalc };
