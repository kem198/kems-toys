'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { isNabeatsu } from '@/utilities/nabeatsu';
import { useState } from 'react';
import { ResetButton } from '../Atoms/ResetButton';
import { ResultDisplay } from '../Atoms/ResultDisplay';

/**
 * NabeatsuAssessmenter コンポーネント
 */
const NabeatsuAssessmenter = () => {
  const [count, setCount] = useState<number | null>(null);

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount(null);
  };

  /**
   * 結果を取得する関数
   */
  const getResult = () => {
    if (count === null) {
      return null;
    }
    return isNabeatsu(Number(count)) ? `${count}!!!` : count.toString();
  };

  return (
    <div className="container my-8 max-w-sm max-lg:mx-auto">
      <LabeledNumberInput labelText="n =" count={count} setCount={setCount} />
      <ResultDisplay>{getResult()}</ResultDisplay>
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { NabeatsuAssessmenter };
