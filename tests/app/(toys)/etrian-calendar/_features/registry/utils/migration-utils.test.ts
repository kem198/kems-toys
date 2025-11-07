import { EtrianV1 } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { migrateEtrians } from "@/app/(toys)/etrian-calendar/_features/registry/utils/migration-utils";
import { describe, expect, it } from "vitest";

describe("migration-utils tests", () => {
  describe("migrateEtrians() tests", () => {
    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (dateOfMonth.month/day なし -> dateOfMonth なし)", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id",
          name: "セトハ",
          dateOfBirth: {},
          affiliations: [],
          order: 1,
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id",
        name: "セトハ",
        dateOfBirth: undefined, // 変更対象
        affiliations: [],
        order: 1,
      });
    });
  });
});
