/**
 * 最大公約数を計算する関数
 * @param {number} m - 自然数 m
 * @param {number} n - 自然数 n
 * @returns {number | string} - 最大公約数またはエラーメッセージ
 * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
 */
const calcGcd = (m: number, n: number): number | string => {
  // 入力が自然数であるか評価する
  if (m <= 0 || n <= 0) {
    return 'm または n が自然数ではありません';
  }
  // 入力が m >= n であるか評価する
  if (!(m >= n)) {
    return 'm ≧ n ではありません';
  }

  let tempM = m;
  let tempN = n;

  while (tempN !== 0) {
    // m と n の剰余を求める
    const q = Math.floor(tempM % tempN);

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
