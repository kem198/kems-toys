import { EtrianDateOfBirth } from "@/app/(toys)/etrian-registry/types/etrian";
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
  return (
    <Badge
      className={cn(
        "flex items-end gap-1 whitespace-nowrap rounded-full bg-red-100 text-red-500 hover:bg-red-100",
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
            {day != null && month !== "鬼乎ノ日" && <> {day} 日</>}
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
