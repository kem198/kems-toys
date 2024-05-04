'use client';

import { useState } from 'react';

function FizzBuzz() {
  const [count, setCount] = useState(1);

  /**
   * count を 1 ずつ増加させる関数
   */
  const handleClick = () => {
    setCount(count + 1);
  };

  /**
   * Fizz Buzz を評価する関数
   *
   * 3 で割り切れる場合は 'Fizz' を返す。
   * 5 で割り切れる場合は 'Buzz' を返す。
   * 3 または 5 で割り切れる場合は 'FizzBuzz' を返す。
   * どの数値でも割り切れない場合は引数を string 型に型変換して返す。
   *
   * @param num 評価対象の数値
   * @returns string 型の結果
   */
  const doFizzBuzz = (num: number) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'Fizz Buzz!!';
    }
    if (num % 3 === 0) {
      return 'Fizz!';
    }
    if (num % 5 === 0) {
      return 'Buzz!';
    }
    return num.toString();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary w-32"
        onClick={handleClick}
      >
        {count}
      </button>
      <div className="mx-auto my-4 flex h-20 place-items-center items-center justify-center rounded-box bg-base-200">
        <p>{doFizzBuzz(count)}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="prose">
      <h1>Fizz Buzz</h1>
      <FizzBuzz />
    </div>
  );
}
