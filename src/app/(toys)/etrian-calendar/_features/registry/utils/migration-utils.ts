import {
  Etrian,
  EtrianDateOfBirth,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export const migrateEtrians = (etrianV1s: EtrianV1[]): Etrian[] => {
  let migratedDateOfBirth: EtrianDateOfBirth | undefined;

  if (etrianV1s[0].dateOfBirth.month && etrianV1s[0].dateOfBirth.day) {
    migratedDateOfBirth = {
      month: etrianV1s[0].dateOfBirth.month,
      day: etrianV1s[0].dateOfBirth.day,
    };
  }

  if (etrianV1s[0].dateOfBirth.month && !etrianV1s[0].dateOfBirth.day) {
    migratedDateOfBirth = {
      month: etrianV1s[0].dateOfBirth.month,
      day: 1,
    };
  }

  if (!etrianV1s[0].dateOfBirth.month && etrianV1s[0].dateOfBirth.day) {
    migratedDateOfBirth = {
      month: "皇帝ノ月",
      day: etrianV1s[0].dateOfBirth.day,
    };
  }

  const migratedEtrians: Etrian[] = [
    {
      id: etrianV1s[0].id,
      name: etrianV1s[0].name,
      dateOfBirth: migratedDateOfBirth,
      affiliations: [etrianV1s[0].affiliations[0]],
      order: etrianV1s[0].order,
      memo: etrianV1s[0].memo,
    },
  ];

  return migratedEtrians;
};
