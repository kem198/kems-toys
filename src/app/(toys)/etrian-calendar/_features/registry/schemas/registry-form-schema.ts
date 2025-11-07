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
        month: z.enum(
          etrianMonthOptionValues,
          // TODO: 表示されないので原因調査する
          "誕生日を設定する場合、月日両方を入力してください。",
        ),
        day: z.enum(
          etrianDayOptionValues,
          "誕生日を設定する場合、月日両方を入力してください。",
        ),
      })
      .optional(),
    affiliations: z.string().optional(),
  })
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
