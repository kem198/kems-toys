import {
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export type MonthColorKey = EtrianMonthName | EtrianNewYearsEveName | "default";

export const BIRTHDAY_COLOR_VARIANTS = {
  default: "bg-zinc-100 text-zinc-500 hover:bg-zinc-100",
  emperor:
    "bg-etrian-emperor text-etrian-emperor-foreground hover:bg-etrian-emperor",
  spring:
    "bg-etrian-spring text-etrian-spring-foreground hover:bg-etrian-spring",
  summer:
    "bg-etrian-summer text-etrian-summer-foreground hover:bg-etrian-summer",
  fall: "bg-etrian-fall text-etrian-fall-foreground hover:bg-etrian-fall",
  winter:
    "bg-etrian-winter text-etrian-winter-foreground hover:bg-etrian-winter",
  summoner:
    "bg-etrian-summoner text-etrian-summoner-foreground hover:bg-etrian-summoner",
} as const;

export const BIRTHDAY_CLASS_BY_MONTH: Record<MonthColorKey, string> = {
  default: BIRTHDAY_COLOR_VARIANTS.default,
  皇帝ノ月: BIRTHDAY_COLOR_VARIANTS.emperor,
  笛鼠ノ月: BIRTHDAY_COLOR_VARIANTS.spring,
  天牛ノ月: BIRTHDAY_COLOR_VARIANTS.spring,
  王虎ノ月: BIRTHDAY_COLOR_VARIANTS.spring,
  素兎ノ月: BIRTHDAY_COLOR_VARIANTS.summer,
  虹竜ノ月: BIRTHDAY_COLOR_VARIANTS.summer,
  白蛇ノ月: BIRTHDAY_COLOR_VARIANTS.summer,
  風馬ノ月: BIRTHDAY_COLOR_VARIANTS.fall,
  金羊ノ月: BIRTHDAY_COLOR_VARIANTS.fall,
  飛猴ノ月: BIRTHDAY_COLOR_VARIANTS.fall,
  火鳥ノ月: BIRTHDAY_COLOR_VARIANTS.winter,
  戌神ノ月: BIRTHDAY_COLOR_VARIANTS.winter,
  怒猪ノ月: BIRTHDAY_COLOR_VARIANTS.winter,
  鬼乎ノ日: BIRTHDAY_COLOR_VARIANTS.summoner,
} as const;
