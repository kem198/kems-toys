import {
  Etrian,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export const migrateEtrians = (etrianV1s: EtrianV1[]): Etrian[] => {
  console.log(etrianV1s);
  const migratedEtrians: Etrian[] = [
    {
      affiliations: [],
      dateOfBirth: undefined,
      id: "test-id",
      name: "セトハ",
      order: 1,
    },
  ];

  return migratedEtrians;
};
