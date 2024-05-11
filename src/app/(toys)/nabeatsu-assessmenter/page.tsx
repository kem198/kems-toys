import StyledMarkdown from '@/components/Atoms/StyledMarkdown';
import Version from '@/components/Atoms/Version';
import NabeatsuAssessmenter from '@/components/Organisms/NabeatsuAssessmenter';

const bodySource = `
# ナベアツ判定機

与えられた数値について次の A, B いずれかの条件を満たせば \`[数値]!!!\` と出力する。

- (A) 3 の倍数である
- (B) 3 を含む桁が存在する
`;

const supplementSource = `
補足:

- 「(B) 3 を含む桁が存在する」について、数値 (number 型) として扱う縛りで対応している。
    - もっと単純にやるなら文字列 (string 型) に変換して「"3" を含むか」を評価する方が簡単。

参考文献:

- [Fizz Buzz - Wikipedia](https://ja.wikipedia.org/wiki/Fizz_Buzz)

    > 関連項目
    >
    > 世界のナベアツ
    >
    > 「3の倍数と3のつく数のときだけアホになる」という、Fizz Buzzと同様の考えのギャグを行っている。

- [力試しにナベアツのような判定をするプログラムを作ろうとしたところ、問題が発生しました。 - 人力検索はてな](https://q.hatena.ne.jp/1207585413)

    > 例えば351
    >
    > 100で割って小数点以下切捨てると3
    >
    > 351/3＝3.51→3
    >
    > 351から100の位なくして10で割って小数点以下切捨てると5
    >
    > (351-100×3)/10＝5.1→5
    >
    > 351から100の位と10の位をなくして1
    >
    > 351-100×3-5×10＝1
    >
    > ようはそれぞれの位をとりだして3かどうか判断すればよい。
`;

export default function Page() {
  return (
    <article>
      <StyledMarkdown source={bodySource} />
      <NabeatsuAssessmenter />
      <div className="divider" />
      <StyledMarkdown source={supplementSource} />
      <Version version="0.1.0" onDate="2024-05-07" />
    </article>
  );
}
