/**
 * 入力値が 3 の倍数であるか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 の倍数であれば true, そうでなければ false
 */
export const isThreeMultiple = (num: number): boolean => num % 3 === 0;

/**
 * 入力値に 3 を含む桁が存在するか評価する関数
 * @param {number} num - 評価する数値
 * @returns {boolean} - 3 を含む桁があれば true, そうでなければ false
 */
export const hasThreeDigits = (num: number): boolean => {
  // 入力を絶対値へ変換する
  let absNum = Math.abs(num);

  // 各桁を調べる
  while (absNum > 0) {
    const digit = absNum % 10;
    if (digit === 3) {
      return true;
    }
    absNum = Math.trunc(absNum / 10);
  }

  return false;
};

/**
 * 与えられた数値について次のいずれかの条件を満たすか評価する関数
 *
 * (A) 3 の倍数である
 * (B) 3 を含む桁が存在する
 *
 * @param {number} num - 評価する数値
 * @returns {boolean} - 条件を満たす場合は true, そうでなければ false
 */
export const isNabeatsu = (num: number): boolean =>
  isThreeMultiple(num) || hasThreeDigits(num);
