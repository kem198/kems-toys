import StyledMarkdown from '@/components/Atoms/StyledMarkdown';
import Version from '@/components/Atoms/Version';
import GcdCalc from '@/components/Organisms/GcdCalc';

const bodySource = `
# ユークリッドの互除法

2 つの自然数について最大公約数を求める。

1. 入力を m, n (m ≧ n) とする。
2. n = 0 なら、 m を出力してアルゴリズムを終了する。
3. m を n で割った余りを新たに n とし、更に元の n を新たに m とし 2. に戻る。
`;

const supplementSource = `
参考文献:

- [ユークリッドの互除法 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E4%BA%92%E9%99%A4%E6%B3%95)
- [ユークリッドの互除法をCanvasで可視化する](https://zenn.dev/yend724/articles/20211126-ff73enfjjrxsaxyb)
`;

export default function Page() {
  return (
    <article>
      <StyledMarkdown source={bodySource} />
      <GcdCalc />
      <div className="divider" />
      <StyledMarkdown source={supplementSource} />
      <Version version="0.1.1" onDate="2024-05-12" />
    </article>
  );
}
