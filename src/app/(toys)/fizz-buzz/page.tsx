import Version from '@/components/Atoms/Version';
import FizzBuzzCalc from '@/components/Organisms/FizzBuzzCalc';

export default function App() {
  return (
    <div>
      <article className="prose">
        <h1>Fizz Buzz</h1>
        <p>1 以上の整数について、</p>
        <ul>
          <li>3 で割り切れる場合は `Fizz!` を返す。</li>
          <li>5 で割り切れる場合は `Buzz!` を返す。</li>
          <li>両方で割り切れる場合は `Fizz Buzz!!` を返す。</li>
        </ul>
      </article>
      <FizzBuzzCalc />
      <article className="prose prose-sm">
        <div className="divider" />
        <p>参考文献:</p>
        <ul>
          <li>
            <a href="https://ja.wikipedia.org/wiki/Fizz_Buzz" target="_blank">
              Fizz Buzz - Wikipedia
            </a>
          </li>
        </ul>
        <Version version="0.1.0" onDate="2024-05-07" />
      </article>
    </div>
  );
}
