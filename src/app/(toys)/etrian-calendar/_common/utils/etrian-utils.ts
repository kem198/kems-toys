import {
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-calendar/_common/constants/date";
import {
  EtrianMonthName,
  EtrianMonthNameKana,
  EtrianNewYearsEveName,
  EtrianNewYearsEveNameKana,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export function toEtrianDate(date: Date): {
  month: {
    name: EtrianMonthName | EtrianNewYearsEveName;
    kana: EtrianMonthNameKana | EtrianNewYearsEveNameKana;
  };
  day: number;
} {
  // 1 日分のミリ秒数
  // e.g. 86400000
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  // (a) 与えられた Date が存在する年初の時刻 (Unix epoch time) を取る
  // e.g. 2025-01-01 00:00:00 GMT+0900 (Japan Standard Time) ⇒ 1735657200000
  const startOfYearTime = new Date(date.getFullYear(), 0, 1).getTime();

  // (b) 与えられた Date から変換対象日の時刻 (Unix epoch time) を取る
  // e.g. 2025-03-26 00:00:00 GMT+0900 (Japan Standard Time) ⇒ 1742914800000
  const targetTime = date.getTime();

  // (a) 年初の時刻 から (b) 変換対象日の時刻 までの 経過ミリ秒 (c) を取る
  // e.g. (a) 1735657200000 - (b) 1742914800000 ⇒ (c) 7257600000
  const elapsedMilliseconds = targetTime - startOfYearTime;

  // (c) 経過ミリ秒 を 1 日分のミリ秒数で割り、小数点以下を切り捨てる ⇒ 経過日数の整数値が取れる
  // e.g. 84
  const elapsedDays = Math.floor(elapsedMilliseconds / MILLISECONDS_PER_DAY);

  // 1 オリジンにしたいので経過日数 + 1 する
  // e.g. 85 ←ここで日数が判明した
  const dayOfYear = elapsedDays + 1;

  // 大晦日の判定
  if (dayOfYear === 365) {
    return { month: etrianNewYearsEve, day: 1 };
  }

  // 大晦日 (閏年) の判定
  if (dayOfYear === 366) {
    return { month: etrianNewYearsEve, day: 2 };
  }

  // 大晦日以外は etrianMonths の配列に割り当てる
  const monthIndex = Math.floor((dayOfYear - 1) / 28);
  const day = ((dayOfYear - 1) % 28) + 1;
  return { month: etrianMonths[monthIndex], day };
}
