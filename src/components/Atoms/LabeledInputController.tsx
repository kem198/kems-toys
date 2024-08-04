import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface LabeledInputProps {
  name: string;
  type: 'text' | 'number';
  labelText: string;
  placeholder?: string;
  rules?: any;
}

const LabeledInputController: React.FC<LabeledInputProps> = ({
  name,
  type,
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
          <label className="input input-bordered flex items-center justify-between gap-2">
            {labelText}
            <input
              {...field}
              value={field.value === null ? '' : field.value}
              placeholder={placeholder}
              type={type}
              className="max-w-52 grow text-right"
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

export { LabeledInputController };
