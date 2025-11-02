import { etrianNewYearsEve } from "@/app/(toys)/etrian-calendar/_constants/month";
import {
  type EtrianDateOfBirth,
  type EtrianMonthName,
  type EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/types/etrian";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Cake, House } from "lucide-react";

type MonthColorKey = EtrianMonthName | EtrianNewYearsEveName | "default";

const BIRTHDAY_COLOR_VARIANTS = {
  default: "bg-zinc-100 text-zinc-500 hover:bg-zinc-100",
  kotei: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  sakura: "bg-pink-50 text-pink-500 hover:bg-pink-50",
  koseki: "bg-green-100 text-lime-700 hover:bg-green-100",
  johi: "bg-orange-100 text-red-700 hover:bg-orange-100",
  rikka: "bg-slate-100 text-sky-600 hover:bg-slate-100",
  monoka: "bg-rose-200 text-rose-700 hover:bg-rose-200",
} as const;

const BIRTHDAY_CLASS_BY_MONTH: Record<MonthColorKey, string> = {
  default: BIRTHDAY_COLOR_VARIANTS.default,
  皇帝ノ月: BIRTHDAY_COLOR_VARIANTS.kotei,
  笛鼠ノ月: BIRTHDAY_COLOR_VARIANTS.sakura,
  天牛ノ月: BIRTHDAY_COLOR_VARIANTS.sakura,
  王虎ノ月: BIRTHDAY_COLOR_VARIANTS.sakura,
  素兎ノ月: BIRTHDAY_COLOR_VARIANTS.koseki,
  虹竜ノ月: BIRTHDAY_COLOR_VARIANTS.koseki,
  白蛇ノ月: BIRTHDAY_COLOR_VARIANTS.koseki,
  風馬ノ月: BIRTHDAY_COLOR_VARIANTS.johi,
  金羊ノ月: BIRTHDAY_COLOR_VARIANTS.johi,
  飛猴ノ月: BIRTHDAY_COLOR_VARIANTS.johi,
  火鳥ノ月: BIRTHDAY_COLOR_VARIANTS.rikka,
  戌神ノ月: BIRTHDAY_COLOR_VARIANTS.rikka,
  怒猪ノ月: BIRTHDAY_COLOR_VARIANTS.rikka,
  鬼乎ノ日: BIRTHDAY_COLOR_VARIANTS.monoka,
} as const;

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
