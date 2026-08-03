import { CURRENT_ETRIAN_REGISTRY_VERSION } from "@/app/(toys)/etrian-calendar/_common/constants/date";
import {
  Etrian,
  EtrianDateOfBirth,
  EtrianRegistry,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

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
  // EtrianRegistry 型の場合 (version を含む)
  if ("version" in data) {
    // runtime validation: ensure structure is exactly as expected
    if (typeof data.version !== "number") {
      throw new Error("invalid version");
    }

    if (!Array.isArray((data as any).etrians)) {
      throw new Error("invalid etrians");
    }

    const allowedEtrianKeys = [
      "id",
      "name",
      "dateOfBirth",
      "affiliations",
      "order",
      "memo",
    ];

    for (const et of (data as any).etrians) {
      if (et == null || typeof et !== "object") {
        throw new Error("invalid etrian");
      }

      // no unknown keys
      for (const key of Object.keys(et)) {
        if (!allowedEtrianKeys.includes(key)) {
          throw new Error(`unknown key: ${key}`);
        }
      }

      if (typeof et.id !== "string" || typeof et.name !== "string") {
        throw new Error("invalid etrian fields");
      }

      if (!Array.isArray(et.affiliations)) {
        throw new Error("invalid affiliations");
      }

      if (typeof et.order !== "number") {
        throw new Error("invalid order");
      }

      if (et.memo !== undefined && typeof et.memo !== "string") {
        throw new Error("invalid memo");
      }

      if (et.dateOfBirth !== undefined) {
        if (typeof et.dateOfBirth !== "object" || et.dateOfBirth == null) {
          throw new Error("invalid dateOfBirth");
        }

        // dateOfBirth must not contain unknown keys
        const dobKeys = Object.keys(et.dateOfBirth);
        for (const k of dobKeys) {
          if (k !== "month" && k !== "day") {
            throw new Error(`unknown dateOfBirth key: ${k}`);
          }
        }

        if (typeof et.dateOfBirth.month !== "string") {
          throw new Error("invalid dateOfBirth.month");
        }
        if (typeof et.dateOfBirth.day !== "number") {
          throw new Error("invalid dateOfBirth.day");
        }
      }
    }

    // すでに最新バージョンの場合はそのまま
    if (data.version === CURRENT_ETRIAN_REGISTRY_VERSION) {
      return data;
    }

    // 他のバージョンの場合は最新の JSON 形式に詰め替える
    return {
      version: CURRENT_ETRIAN_REGISTRY_VERSION,
      etrians: data.etrians,
    };
  }

  // EtrianV1[] は構造が一段階浅いので別処理で移行する
  if (!Array.isArray(data)) {
    throw new Error("invalid data");
  }

  // validate V1 items
  for (const et of data as any[]) {
    if (et == null || typeof et !== "object") {
      throw new Error("invalid etrian v1");
    }
    const allowedV1Keys = [
      "id",
      "name",
      "dateOfBirth",
      "affiliations",
      "order",
      "memo",
    ];
    for (const key of Object.keys(et)) {
      if (!allowedV1Keys.includes(key)) {
        throw new Error(`unknown key v1: ${key}`);
      }
    }
    if (typeof et.id !== "string" || typeof et.name !== "string") {
      throw new Error("invalid etrian v1 fields");
    }
    if (!Array.isArray(et.affiliations)) {
      throw new Error("invalid affiliations v1");
    }
    if (typeof et.order !== "number") {
      throw new Error("invalid order v1");
    }
  }

  return {
    version: CURRENT_ETRIAN_REGISTRY_VERSION,
    etrians: migrateEtriansV1toV2(data as EtrianV1[]),
  };
};
