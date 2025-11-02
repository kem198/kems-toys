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
  day?: number;
} {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear =
    Math.floor(
      (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

  if (dayOfYear >= 365) {
    return { month: etrianNewYearsEve };
  }

  const monthIndex = Math.floor((dayOfYear - 1) / 28);
  const day = ((dayOfYear - 1) % 28) + 1;

  return { month: etrianMonths[monthIndex], day };
}
