import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";

type BirthdayMessageProps = {
  etrian: Etrian;
};

export function BirthdayMessage({ etrian }: BirthdayMessageProps) {
  const todaysEtrianDate = toEtrianDate(new Date());
  const isSameMonth = etrian.dateOfBirth?.month === todaysEtrianDate.month.name;
  const isSameDay = etrian.dateOfBirth?.day === todaysEtrianDate.day;

  if (isSameMonth && isSameDay) {
    return (
      <span className="text-xs text-red-400">
        🎉本日がお誕生日です！おめでとう！
      </span>
    );
  }

  if (isSameMonth) {
    return <span className="text-xs text-red-400">🍰今月がお誕生日です！</span>;
  }

  return null;
}
