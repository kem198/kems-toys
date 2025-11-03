import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";

type BirthdayMessageProps = {
  etrian: Etrian;
};

export function BirthdayMessage({ etrian }: BirthdayMessageProps) {
  const today = toEtrianDate(new Date());
  const isSameMonth = etrian.dateOfBirth?.month === today.month.name;
  const isSameDay = etrian.dateOfBirth?.day === today.day;

  if (isSameMonth && isSameDay) {
    return <span className="text-xs text-red-400">🎉本日がお誕生日です！</span>;
  }

  if (isSameMonth) {
    return <span className="text-xs text-red-400">🍰今月がお誕生日です！</span>;
  }

  return null;
}
