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
  const [count, setCount] = useState<number | ''>('');

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    setCount('');
  };

  /**
   * 結果を取得する関数
   */
  const getResult = (): string => {
    if (count === '') {
      return '';
    }
    return isNabeatsu(Number(count)) ? `${count}!!!` : count.toString();
  };

  return (
    <div className="container my-8 w-fit max-lg:mx-auto">
      <LabeledNumberInput labelText="n =" count={count} setCount={setCount} />
      <ResultDisplay result={getResult()} />
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export { NabeatsuAssessmenter };
