import * as z from "zod";

export const UNSET_SELECT_VALUE = "未設定";

export const registryFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "1 文字以上入力してください。")
      .max(20, "20 文字以下で入力してください。"),
    memo: z.string().max(100, "100 文字以下で入力してください。").optional(),
    dateOfBirth: z.object({
      month: z.string().optional(),
      day: z.string().optional(),
    }),
    affiliations: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.dateOfBirth.month === "鬼乎ノ日") {
        return data.dateOfBirth.day === UNSET_SELECT_VALUE;
      }
      return true;
    },
    {
      message: "鬼乎ノ日の場合、日は「未設定」で登録してください。",
      path: ["dateOfBirth", "day"],
    },
  );

export type RegistryFormValues = z.infer<typeof registryFormSchema>;
