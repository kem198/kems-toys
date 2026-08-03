import { CURRENT_ETRIAN_REGISTRY_VERSION } from "@/app/(toys)/etrian-calendar/_common/constants/date";
import {
  Etrian,
  EtrianDateOfBirth,
  EtrianRegistry,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import * as z from "zod";

const migrateEtriansV1toV2 = (etrianV1s: EtrianV1[]): Etrian[] => {
  const migrateDateOfBirth = (
    dateOfBirth: EtrianV1["dateOfBirth"],
  ): EtrianDateOfBirth | undefined => {
    if (dateOfBirth.month && dateOfBirth.day) {
      return {
        month: dateOfBirth.month,
        day: dateOfBirth.day,
      };
    }

    if (dateOfBirth.month && !dateOfBirth.day) {
      return {
        month: dateOfBirth.month,
        day: 1,
      };
    }

    if (!dateOfBirth.month && dateOfBirth.day) {
      return {
        month: "皇帝ノ月",
        day: dateOfBirth.day,
      };
    }

    return undefined;
  };

  return etrianV1s.map((etrianV1) => ({
    id: etrianV1.id,
    name: etrianV1.name,
    dateOfBirth: migrateDateOfBirth(etrianV1.dateOfBirth),
    affiliations: etrianV1.affiliations,
    order: etrianV1.order,
    memo: etrianV1.memo,
  }));
};

export const migrateEtrianRegistry = (
  data: EtrianV1[] | EtrianRegistry,
): EtrianRegistry => {
  // zod schemas for runtime validation
  const dateOfBirthV2Schema = z
    .object({
      month: z.string(),
      day: z.number(),
    })
    .strict();

  const etrianSchema = z
    .object({
      id: z.string(),
      name: z.string(),
      dateOfBirth: dateOfBirthV2Schema.optional(),
      affiliations: z.array(z.string()),
      order: z.number(),
      memo: z.string().optional(),
    })
    .strict();

  const registrySchema = z
    .object({
      version: z.number(),
      etrians: z.array(etrianSchema),
    })
    .strict();

  // V1 dateOfBirth is more permissive (month/day optional or empty object)
  const dateOfBirthV1Schema = z
    .object({
      month: z.string().optional(),
      day: z.number().optional(),
    })
    .strict();

  const etrianV1Schema = z
    .object({
      id: z.string(),
      name: z.string(),
      dateOfBirth: dateOfBirthV1Schema.optional(),
      affiliations: z.array(z.string()),
      order: z.number(),
      memo: z.string().optional(),
    })
    .strict();

  // EtrianRegistry 型の場合 (version を含む)
  if ("version" in data) {
    // validate using zod; will throw on unknown keys or type mismatches
    const parsed = registrySchema.parse(data);

    // すでに最新バージョンの場合はそのまま
    if (parsed.version === CURRENT_ETRIAN_REGISTRY_VERSION) {
      return parsed as EtrianRegistry;
    }

    // 他のバージョンの場合は最新の JSON 形式に詰め替える
    return {
      version: CURRENT_ETRIAN_REGISTRY_VERSION,
      etrians: parsed.etrians,
    };
  }

  // EtrianV1[] は構造が一段階浅いので別処理で移行する
  if (!Array.isArray(data)) {
    throw new Error("invalid data");
  }

  // EtrianV1[] は構造が一段階浅いので別処理で移行する
  if (!Array.isArray(data)) {
    throw new Error("invalid data");
  }

  // validate V1 items with zod
  const parsedV1 = z.array(etrianV1Schema).parse(data);

  return {
    version: CURRENT_ETRIAN_REGISTRY_VERSION,
    etrians: migrateEtriansV1toV2(parsedV1 as EtrianV1[]),
  };
};
