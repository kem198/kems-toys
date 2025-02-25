/**
 * 最大公約数を計算する関数
 *
 * @param {number} a - 整数 a
 * @param {number} b - 整数 b
 * @returns {number} - 最大公約数を返す。両方の入力が 0 の場合はエラーを投げる
 */
const calcGcd = (a: number, b: number): number => {
  // a と b が共に 0 の場合は定義されないので処理を中断する
  if (a === 0 && b === 0) {
    throw new Error("両方の入力が 0 の場合、最大公約数は定義されません");
  }

  // 負の値を考慮して絶対値を取る
  let m = Math.abs(a);
  let n = Math.abs(b);

  // ユークリッドの互除法
  while (n !== 0) {
    const q = m % n;
    m = n;
    n = q;
  }

  return m;
};

/**
 * 最大公約数の計算過程を出力する関数
 *
 * @param {number} a - 整数 a
 * @param {number} b - 整数 b
 * @returns {steps: string[]} - 計算の途中経過を返す。両方の入力が 0 の場合はエラーを投げる
 */
const calcGcdSteps = (a: number, b: number): string[] => {
  // a と b が共に 0 の場合は定義されないので処理を中断する
  if (a === 0 && b === 0) {
    throw new Error("両方の入力が 0 の場合、最大公約数は定義されません");
  }

  // 計算ステップ記録用の配列を定義
  const steps: string[] = [];

  // 負の値を考慮して絶対値を取る
  let m = Math.abs(a);
  let n = Math.abs(b);

  // ユークリッドの互除法
  while (n !== 0) {
    const r = Math.trunc(m / n);
    const q = m % n;

    // 計算ステップを記録する
    steps.push(`${m} ÷ ${n} = ${r} ... ${q}`);

    m = n;
    n = q;
  }

  return steps;
};

export { calcGcd, calcGcdSteps };
