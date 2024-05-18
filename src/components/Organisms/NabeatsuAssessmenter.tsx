'use client';

import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';
import { isNabeatsu } from '@/utilities/nabeatsu';
import { FormProvider, useForm } from 'react-hook-form';
import { ResetButton } from '../Atoms/ResetButton';
import { ResultDisplay } from '../Atoms/ResultDisplay';

interface FormValues {
  count: string;
}

const NabeatsuAssessmenter = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      count: '',
    },
    mode: 'onChange',
  });

  const { reset, watch } = methods;
  const count = watch('count');

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    reset({ count: '' });
  };

  /**
   * 結果を取得する関数
   */
  const getResult = () => {
    if (count === '') {
      return '';
    }
    return isNabeatsu(Number(count)) ? `${count}!!!` : count.toString();
  };

  return (
    <FormProvider {...methods}>
      <div className="container my-8 max-w-sm max-lg:mx-auto">
        <form>
          <LabeledNumberInput
            name="count"
            labelText="n ="
            placeholder="0"
            rules={{
              required: 'このフィールドは必須です',
              validate: {
                isNumber: (value: string) =>
                  /^-?\d+$/.test(value) || '半角数字のみ入力できます',
              },
            }}
          />
          <ResultDisplay>{getResult()}</ResultDisplay>
          <ResetButton onClick={resetCount} />
        </form>
      </div>
    </FormProvider>
  );
};

export { NabeatsuAssessmenter };
