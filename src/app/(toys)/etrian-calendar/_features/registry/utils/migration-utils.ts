import {
  Etrian,
  EtrianDateOfBirth,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

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

export const migrateEtrians = (etrianV1s: EtrianV1[]): Etrian[] => {
  if (etrianV1s.length === 0) {
    return [];
  }

  return etrianV1s.map((etrianV1) => ({
    id: etrianV1.id,
    name: etrianV1.name,
    dateOfBirth: migrateDateOfBirth(etrianV1.dateOfBirth),
    affiliations: etrianV1.affiliations,
    order: etrianV1.order,
    memo: etrianV1.memo,
  }));
};
