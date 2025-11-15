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
    // すでに最新バージョンの場合はそのまま
    if (data.version === CURRENT_ETRIAN_REGISTRY_VERSION) {
      return data;
    }

    // 他のバージョンの場合は最新の JSON 形式に詰め替える (ここが後々の更新対象になるはず)
    return {
      version: CURRENT_ETRIAN_REGISTRY_VERSION,
      etrians: migrateEtriansV1toV2(data.etrians),
    };
  }

  // EtrianV1[] は構造が一段階浅いので別処理で移行する
  return {
    version: CURRENT_ETRIAN_REGISTRY_VERSION,
    etrians: migrateEtriansV1toV2(data),
  };
};
