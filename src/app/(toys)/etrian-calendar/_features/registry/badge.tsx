import { BIRTHDAY_CLASS_BY_MONTH } from "@/app/(toys)/etrian-calendar/_constants/color";
import { etrianNewYearsEve } from "@/app/(toys)/etrian-calendar/_constants/date";
import { type EtrianDateOfBirth } from "@/app/(toys)/etrian-calendar/types/etrian";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Cake, House } from "lucide-react";
type DateOfBirthBadgeProps = {
  dateOfBirth: EtrianDateOfBirth;
} & BadgeProps;

export function DateOfBirthBadge({
  dateOfBirth,
  className,
  ...props
}: DateOfBirthBadgeProps) {
  const colorClass = BIRTHDAY_CLASS_BY_MONTH[dateOfBirth.month ?? "default"];
  return (
    <Badge
      className={cn(
        "flex items-end gap-1 whitespace-nowrap rounded-full",
        colorClass,
        className,
      )}
      {...props}
    >
      <Cake strokeWidth={1.5} size={14} />

      {/*
      誕生日の設定状況によって次のいずれかで出力する
      - 皇帝ノ月 1 日
      - 鬼乎ノ日
      - 未設定
      */}
      {(() => {
        const month = dateOfBirth?.month;
        const day = dateOfBirth?.day;
        if (!month) return <>未設定</>;
        return (
          <>
            {month}
            {day != null && month !== etrianNewYearsEve.name && <> {day} 日</>}
          </>
        );
      })()}
    </Badge>
  );
}

type AffiliationBadgeProps = {
  affiliation: string;
} & BadgeProps;

export function AffiliationBadge({
  affiliation,
  className,
  ...props
}: AffiliationBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="flex items-end gap-1 whitespace-nowrap rounded-full font-normal"
      {...props}
    >
      <House strokeWidth={1.5} size={14} />
      <span>{affiliation}</span>
    </Badge>
  );
}
