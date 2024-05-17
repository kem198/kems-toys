'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const App = () => {
  // useForm() の戻り値 (メソッド) を各変数へ代入して使用できるようにする
  const {
    // 検証ルールを適用するメソッド
    register,

    // フォームの検証が完了した後にフォームデータを受け取るメソッド
    handleSubmit,

    // 指定された入力を監視し、その値を返すメソッド
    watch,

    // フォーム全体の状態に関する情報を含むオブジェクト
    // フィールドエラーを保有するオブジェクト (errors) 等を内包している
    formState: { errors },
  } = useForm<Inputs>();

  // onSubmit イベントが発生した時の処理 (公式の例)
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // onSubmit イベントを記録・確認するための状態管理
  const [result, setResult] = useState<Inputs | null>(null);

  // onSubmit イベントが発生した時の処理
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResult(data);
  };

  // 名前を指定して入力値を監視できる (公式の例)
  // console.log(`example: ${watch('example')}`);
  // console.log(`exampleRequired: ${watch('exampleRequired')}`);

  return (
    <article>
      <h1>Basic usage</h1>
      {/* "handleSubmit" は "onSubmit" を呼び出す前に入力を検証する */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* "register" 関数を呼び出して入力をフックに登録する */}
        <input
          className="input input-bordered"
          placeholder="example (non rules)"
          {...register('example')}
        />

        {/* 必須や他の標準的な HTML 検証ルールで検証を含める */}
        <input
          className="input input-bordered"
          placeholder="exampleRequired (required: true)"
          {...register('exampleRequired', { required: true })}
        />
        {/* フィールド検証が失敗したときはエラーを表示する */}
        {errors.exampleRequired && <div>This field is required</div>}

        <input className="btn" type="submit" value="Validate" />
      </form>
      <p>watch:</p>
      {/* 名前を指定して入力値を監視できる */}
      <pre>
        {`example: ${watch('example')}`}
        <br />
        {`exampleRequired: ${watch('exampleRequired')}`}
      </pre>
      {/* Submit されたときのみ行う処理 */}
      <p>result:</p>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      <h2>Reference</h2>
      <ul>
        <li>
          <a href="https://www.react-hook-form.com/get-started">
            Get Started | React Hook Form - Simple React forms validation
          </a>
        </li>
      </ul>
    </article>
  );
};

export default App;
