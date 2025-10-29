import { etrianMonths, etrianNewYearsEve } from "../_constants/month";
import { EtrianMonth } from "../types/month";

export function toEtrianDate(date: Date): {
  month: EtrianMonth;
  day?: number;
} {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear =
    Math.floor(
      (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

  if (dayOfYear === 365) {
    return { month: etrianNewYearsEve };
  }

  const monthIndex = Math.floor((dayOfYear - 1) / 28);
  const day = ((dayOfYear - 1) % 28) + 1;

  return { month: etrianMonths[monthIndex], day };
}

export function toRealDate(
  year: number,
  month: EtrianMonth,
  day?: number,
): Date {
  let dayOfYear: number;

  if (month === etrianNewYearsEve) {
    dayOfYear = 365;
  } else {
    const monthIndex = etrianMonths.indexOf(month as EtrianMonth);
    if (monthIndex === -1 || !day) throw new Error("不正なゲーム暦");
    dayOfYear = monthIndex * 28 + day;
  }

  const date = new Date(year, 0, 1);
  date.setDate(dayOfYear);

  return date;
}
