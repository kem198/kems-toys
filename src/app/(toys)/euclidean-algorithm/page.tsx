import Version from '@/components/Atoms/Version';
import GcdCalc from '@/components/Organisms/GcdCalc';

export default function App() {
  return (
    <div>
      <article className="prose">
        <h1>ユークリッドの互除法</h1>
        <p>2 つの自然数について最大公約数を求める。</p>
        <ol>
          <li>入力を m, n (m ≧ n) とする。</li>
          <li>n = 0 なら、 m を出力してアルゴリズムを終了する。</li>
          <li>
            m を n で割った余りを新たに n とし、更に元の n を新たに m とし 2.
            に戻る。
          </li>
        </ol>
      </article>
      <GcdCalc />
      <article className="prose prose-sm">
        <div className="divider" />
        <p>参考文献:</p>
        <ul>
          <li>
            <a
              href="https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E4%BA%92%E9%99%A4%E6%B3%95"
              target="_blank"
              rel="noreferrer"
            >
              ユークリッドの互除法 - Wikipedia
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/yend724/articles/20211126-ff73enfjjrxsaxyb"
              target="_blank"
            >
              ユークリッドの互除法をCanvasで可視化する
            </a>
          </li>
        </ul>
        <Version version="0.1.0" onDate="2024-05-07" />
      </article>
    </div>
  );
}
