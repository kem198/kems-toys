import {
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-dob-note/_constants/month";
import { EtrianMonth } from "@/app/(toys)/etrian-dob-note/types/month";

export function toEtrianDate(date: Date): {
  month: EtrianMonth;
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
