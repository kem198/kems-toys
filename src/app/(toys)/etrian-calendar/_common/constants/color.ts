import {
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export type MonthColorKey = EtrianMonthName | EtrianNewYearsEveName | "default";

export const BIRTHDAY_COLOR_VARIANTS = {
  default: "bg-zinc-100 text-zinc-500 hover:bg-zinc-100",
  emperor: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100/70",
  sakura: "bg-pink-100 text-pink-500 hover:bg-pink-100/70",
  koseki: "bg-green-200 text-green-800 hover:bg-green-200/70",
  johi: "bg-amber-200 text-amber-700 hover:bg-amber-200/70",
  rikka: "bg-sky-200 text-slate-700 hover:bg-sky-200/70",
  summoner: "bg-pink-500 text-gray-950 hover:bg-pink-500/70",
} as const;

export const BIRTHDAY_CLASS_BY_MONTH: Record<MonthColorKey, string> = {
  default: BIRTHDAY_COLOR_VARIANTS.default,
  皇帝ノ月: BIRTHDAY_COLOR_VARIANTS.emperor,
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
  鬼乎ノ日: BIRTHDAY_COLOR_VARIANTS.summoner,
} as const;
