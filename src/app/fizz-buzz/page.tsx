'use client';

import { useState } from 'react';

function FizzBuzz() {
  const [count, setCount] = useState(1);

  /**
   * count を 1 ずつ加算させる関数
   */
  const increment = () => {
    setCount(count + 1);
  };

  /**
   * count を 1 ずつ減算させる関数
   */
  const decrement = () => {
    setCount(count - 1);
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
    if (num <= 0) {
      return '1 以上の整数を入力してください';
    }
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
    <div className="container my-8 w-fit max-lg:mx-auto">
      {/* 加算減算させる UI */}
      <div className="join">
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={decrement}
        >
          -1
        </button>
        <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
          {count}
        </div>
        <button
          type="button"
          className="btn btn-secondary join-item w-24"
          onClick={increment}
        >
          +1
        </button>
      </div>
      {/* 結果表示 */}
      <div className="my-4 flex h-20 w-72 place-items-center items-center justify-center rounded-box bg-base-200">
        <p>{doFizzBuzz(count)}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <article className="prose">
        <h1>Fizz Buzz</h1>
        <p>1 以上の整数について、</p>
        <ul>
          <li>3 で割り切れる場合は `Fizz!` を返します。</li>
          <li>5 で割り切れる場合は `Buzz!` を返します。</li>
          <li>両方で割り切れる場合は `Fizz Buzz!!` を返します。</li>
        </ul>
        <p>
          <a href="https://ja.wikipedia.org/wiki/Fizz_Buzz" target="_blank">
            Fizz Buzz - Wikipedia
          </a>
        </p>
      </article>
      <FizzBuzz />
    </div>
  );
}
