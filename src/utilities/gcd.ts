/**
 * 最大公約数を計算する関数
 *
 * @param {number} m - 自然数 m
 * @param {number} n - 自然数 n
 * @returns {number | null} - 最大公約数を返す。入力が不正である場合は null を返す
 * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
 */
const calcGcd = (m: number, n: number): number | null => {
  // 入力が自然数であるか評価する
  if (m <= 0 || n <= 0) {
    return null;
  }
  // より大きい値を TempM, 小さい値を TempN へ代入する
  let tempM = Math.max(m, n);
  let tempN = Math.min(m, n);

  while (tempN !== 0) {
    // m と n の剰余を求める
    const q = tempM % tempN;

    // // m と n の商を求める
    // const r = Math.floor(tempM / tempN);
    // // 表示
    // console.log(`${tempM} / ${tempN} = ${r} ... ${q}`);

    // 元の n を新たに m とする
    tempM = tempN;
    // m と n の剰余を新たに n とする
    tempN = q;
  }

  return tempM;
};

export { calcGcd };
