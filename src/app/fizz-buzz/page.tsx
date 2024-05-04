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
      return 'Fizz Buzz';
    }
    if (num % 3 === 0) {
      return 'Fizz';
    }
    if (num % 5 === 0) {
      return 'Buzz';
    }
    return num.toString();
  };

  return (
    <div>
      <button
        type="button"
        className="mb-4 min-w-32 rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
        onClick={handleClick}
      >
        {count}
      </button>
      <p className="min-w-32 rounded bg-gray-500 px-4 py-2 text-center font-bold text-white">
        {doFizzBuzz(count)}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Fizz Buzz</h1>
      <FizzBuzz />
    </main>
  );
}
