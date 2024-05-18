import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface LabeledNumberInputProps {
  name: string;
  labelText: string;
  placeholder?: string;
  rules?: any;
}

const LabeledNumberInput: React.FC<LabeledNumberInputProps> = ({
  name,
  labelText,
  placeholder,
  rules,
}) => {
  // useFormContext フックを使用してフォームのコンテキストにアクセスする
  // 親コンポーネントから渡されたプロパティやメソッドを使用できる
  // これを Controller へ渡すことでフォームの状態と連携する
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <label className="input input-bordered flex items-center gap-2">
            {labelText}
            <input
              {...field}
              value={field.value === null ? '' : field.value}
              placeholder={placeholder}
              type="text"
              className="grow"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // エンターキーによるデフォルトの動作をキャンセル
                }
              }}
            />
          </label>
          {fieldState.error && (
            <span className="text-error">{fieldState.error.message}</span>
          )}
        </>
      )}
    />
  );
};

export { LabeledNumberInput };
