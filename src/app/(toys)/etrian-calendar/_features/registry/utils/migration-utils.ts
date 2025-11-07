import {
  Etrian,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export const migrateEtrians = (etrianV1s: EtrianV1[]): Etrian[] => {
  const migratedEtrians: Etrian[] = [
    {
      id: etrianV1s[0].id,
      name: etrianV1s[0].name,
      dateOfBirth: undefined,
      affiliations: [etrianV1s[0].affiliations[0]],
      order: etrianV1s[0].order,
      memo: etrianV1s[0].memo,
    },
  ];

  return migratedEtrians;
};
