import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import {
  getDiffDaysBetweenSolarAndEtrianDate,
  toEtrianDate,
} from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";

type BirthdayMessageProps = {
  etrian: Etrian;
};

export function BirthdayMessage({ etrian }: BirthdayMessageProps) {
  if (!etrian.dateOfBirth?.month || !etrian.dateOfBirth?.day) return null;

  const todaysEtrianDate = toEtrianDate(new Date());
  const isSameMonth = etrian.dateOfBirth.month === todaysEtrianDate.month.name;
  const isSameDay = etrian.dateOfBirth.day === todaysEtrianDate.day;

  if (isSameMonth && isSameDay) {
    return (
      <span className="text-xs text-red-400">
        🎉本日がお誕生日です！おめでとう！
      </span>
    );
  }

  const diffDays = getDiffDaysBetweenSolarAndEtrianDate(new Date(), {
    month: etrian.dateOfBirth.month,
    day: etrian.dateOfBirth.day,
  });

  if (isSameMonth && diffDays > 30) {
    return (
      <span className="text-xs text-red-400">
        今月がお誕生月でした！また来年！
      </span>
    );
  }

  if (isSameMonth) {
    return (
      <span className="text-xs text-red-400">{`今月はお誕生月です！あと ${diffDays} 日！`}</span>
    );
  }

  if (diffDays >= 1 && diffDays <= 30) {
    return (
      <span className="text-xs text-red-400">{`あと ${diffDays} 日でお誕生日です！`}</span>
    );
  }

  return null;
}
