import {
  etrianDayOptionValues,
  etrianMonthOptionValues,
} from "@/app/(toys)/etrian-calendar/_common/constants/date";
import * as z from "zod";

export const registryFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "1 文字以上入力してください。")
      .max(20, "20 文字以下で入力してください。"),
    memo: z.string().max(100, "100 文字以下で入力してください。").optional(),
    dateOfBirth: z
      .object({
        month: z.enum(etrianMonthOptionValues).optional(),
        day: z.enum(etrianDayOptionValues).optional(),
      })
      .optional(),
    affiliations: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.dateOfBirth) return true;

      const hasMonth =
        data.dateOfBirth.month !== undefined &&
        data.dateOfBirth.month !== "未設定";
      const hasDay =
        data.dateOfBirth.day !== undefined && data.dateOfBirth.day !== "未設定";

      // 両方入力または両方未設定
      return hasMonth === hasDay;
    },
    {
      message: "誕生日を設定する場合、月日両方を入力してください。",
      path: ["dateOfBirth"],
    },
  )
  .refine(
    (data) => {
      if (data.dateOfBirth?.month === "鬼乎ノ日") {
        return data.dateOfBirth.day === "1";
      }
      return true;
    },
    {
      message: "鬼乎ノ日の場合、日は「1」で登録してください。",
      path: ["dateOfBirth", "day"],
    },
  );

export type RegistryFormValues = z.infer<typeof registryFormSchema>;
