/**
 * 最大公約数を計算する関数
 *
 * @param {number} m - 整数 m
 * @param {number} n - 整数 n
 * @returns {number} - 最大公約数を返す。両方の入力が 0 の場合は null を返す
 * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
 */
const calcGcd = (a: number, b: number): number => {
  // a と b が共に 0 の場合は定義されないので処理を中断する
  if (a === 0 && b === 0) {
    throw new Error('両方の入力が 0 の場合、最大公約数は定義されません');
  }

  // 負の値を考慮して絶対値を取る
  const AbsA = Math.abs(a);
  const AbsB = Math.abs(b);

  // より大きい値を m, 小さい値を n へ代入する
  let m = Math.max(AbsA, AbsB);
  let n = Math.min(AbsA, AbsB);

  // ユークリッドの互除法
  while (n !== 0) {
    const q = m % n;
    m = n;
    n = q;
  }

  return m;
};

export { calcGcd };
