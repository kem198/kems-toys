'use client';

import { doFizzBuzz } from '@/app/(contents)/(toys)/fizz-buzz/utilities/fizzbuzz';
import { LabeledNumberInputController } from '@/components/Atoms/LabeledNumberInputController';
import { ResetButton } from '@/components/Atoms/ResetButton';
import { ResultDisplay } from '@/components/Atoms/ResultDisplay';
import { FormProvider, useForm } from 'react-hook-form';

interface FormValues {
  count: string;
}

const FizzBuzzCalc = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      count: '',
    },
    mode: 'onChange', // バリデーションを onChange で実行する設定
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
   * FizzBuzz を計算する関数
   *
   * 入力値が自然数でない場合はエラーメッセージを設定する
   */
  const calculateFizzBuzz = () => {
    const num = parseInt(count, 10);
    if (Number.isNaN(num) || num <= 0) {
      return '';
    }
    return doFizzBuzz(num);
  };

  return (
    <FormProvider {...methods}>
      <div className="container my-8 max-w-sm max-lg:mx-auto">
        <form>
          <LabeledNumberInputController
            name="count"
            labelText="n ="
            placeholder="0"
            rules={{
              required: 'このフィールドは必須です',
              validate: {
                isNaturalNumber: (value: string) =>
                  /^[1-9]\d*$/.test(value) || '自然数を入力してください',
              },
            }}
          />
          <ResultDisplay>{calculateFizzBuzz()}</ResultDisplay>
          <ResetButton onClick={resetCount} />
        </form>
      </div>
    </FormProvider>
  );
};

export { FizzBuzzCalc };
