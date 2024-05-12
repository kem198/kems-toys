import StyledMarkdown from '@/components/Atoms/StyledMarkdown';
import Version from '@/components/Atoms/Version';
import NabeatsuAssessmenter from '@/components/Organisms/NabeatsuAssessmenter';

const bodySource = `
# ナベアツ判定機

与えられた数値について次の (A), (B) いずれかの条件を満たせば \`[数値]!!!\` と出力する。

- (A) 3 の倍数である
- (B) 3 を含む桁が存在する
`;

const supplementSource = `
補足:

- 0 も 3 の倍数として評価している。
- 「(A) 3 の倍数である」は入力値を 3 で割って余りが出なければ倍数であると評価する。

    \`\`\`
    /**
     * 入力値が 3 の倍数であるか評価する関数
     * @param {number} num - 評価する数値
     * @returns {boolean} - 3 の倍数であれば true, そうでなければ false
     */
    const isThreeMultiple = (num: number): boolean => num % 3 === 0;
    \`\`\`

- 「(B) 3 を含む桁が存在する」は数値 (number 型) として扱う縛りで対応した。
    - もっと単純にやるなら文字列 (string 型) に変換して「"3" を含むか」を評価する方が簡単。だけれどそれは芸がないので……。
    - 処理はこんな感じ。桁ごとに 3 と一致するか評価している。特に「**入力を 10 で割って余剰 (余り) を取り出すと最下位の桁 (一の位) が取得できる**」のがポイント。

        \`\`\`
        /**
         * 入力値に 3 を含む桁が存在するか評価する関数
         * @param {number} num - 評価する数値
         * @returns {boolean} - 3 を含む桁があれば true, そうでなければ false
         */
        const hasThreeDigits = (num: number): boolean => {
          // 入力を絶対値へ変換する
          // e.g. -1234 ⇒ 1234
          let absNum = Math.abs(num);

          // 各桁を調べる
          while (absNum > 0) {
            // 最下位の桁を取得する
            // 入力を 10 で割って余剰を取り出すと取得できる
            // e.g. \`1234 % 10 = 1230 ... 4\` ⇒ \`4\` が最下位の桁となる
            const digit = absNum % 10;

            // 3 と比較して等しい桁が見つかったら true を返す
            if (digit === 3) {
              return true;
            }

            // 見つからなかったら最下位の桁を削除して次の桁へ移動する
            // 入力を 10 で割って小数部を切り捨てると削除できる
            // e.g. \`1234 / 10 = 123.4\` ⇒ \`123\` を次の計算で使用する
            absNum = Math.trunc(absNum / 10);
          }

          // 3 と等しい桁が見つからずにループを抜けたら false を返す
          return false;
        };
        \`\`\`



参考文献:

- [Fizz Buzz - Wikipedia](https://ja.wikipedia.org/wiki/Fizz_Buzz)

    > 関連項目
    >
    > 世界のナベアツ
    >
    > 「3の倍数と3のつく数のときだけアホになる」という、Fizz Buzzと同様の考えのギャグを行っている。

- [Math.trunc() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
- [力試しにナベアツのような判定をするプログラムを作ろうとしたところ、問題が発生しました。 - 人力検索はてな](https://q.hatena.ne.jp/1207585413)

    > ようはそれぞれの位をとりだして3かどうか判断すればよい。

- [【Ruby】10の位と1の位を取得する方法 #Ruby - Qiita](https://qiita.com/suzu12/items/d0b53838353d6a6e651e)
- [0は何の倍数？ | 稲荷塾](https://inarijuku.com/2017/09/17/5521/)
`;

export default function Page() {
  return (
    <article>
      <StyledMarkdown source={bodySource} />
      <NabeatsuAssessmenter />
      <div className="divider" />
      <StyledMarkdown source={supplementSource} />
      <Version version="0.1.0" onDate="2024-05-12" />
    </article>
  );
}
