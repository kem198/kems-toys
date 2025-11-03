import {
  Etrian,
  EtrianDay,
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import {
  toEtrianDate,
  toSolarDate,
} from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";
import { MILLISECONDS_PER_DAY } from "@/constants/date";

type BirthdayMessageProps = {
  etrian: Etrian;
};

const getDiffDaysBetweenSolarAndEtrianDate = (
  solarDate: Date,
  etrianDate: {
    month: EtrianMonthName | EtrianNewYearsEveName;
    day: EtrianDay;
  },
): number => {
  // 時刻の影響を避けるため「太陽暦 00:00:00」を基準にする
  const solarDateMidnight = new Date(
    solarDate.getFullYear(),
    solarDate.getMonth(),
    solarDate.getDate(),
  );

  // 太陽暦の年を割り当てて今年の世界樹歴を作成する
  let targetEtrianDate = toSolarDate({
    year: solarDateMidnight.getFullYear(),
    month: etrianDate.month,
    day: etrianDate.day,
  });

  // 今年の世界樹歴が過去なら翌年の日付にする
  if (targetEtrianDate.getTime() < solarDateMidnight.getTime()) {
    targetEtrianDate = toSolarDate({
      year: solarDateMidnight.getFullYear() + 1,
      month: etrianDate.month,
      day: etrianDate.day,
    });
  }

  const diffMilliseconds =
    targetEtrianDate.getTime() - solarDateMidnight.getTime();
  const diffDays = Math.ceil(diffMilliseconds / MILLISECONDS_PER_DAY);

  return diffDays;
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
