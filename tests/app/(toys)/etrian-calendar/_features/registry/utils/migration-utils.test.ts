import { EtrianV1 } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { migrateEtrians } from "@/app/(toys)/etrian-calendar/_features/registry/utils/migration-utils";
import { describe, expect, it } from "vitest";

describe("migration-utils tests", () => {
  describe("migrateEtrians() tests", () => {
    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (dateOfMonth.month/day あり -> そのまま)", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id",
          name: "セトハ",
          dateOfBirth: { month: "怒猪ノ月", day: 28 },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id",
        name: "セトハ",
        dateOfBirth: { month: "怒猪ノ月", day: 28 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
      });
    });

    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (dateOfMonth.day なし -> dateOfMonth.day に 1)", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id",
          name: "セトハ",
          dateOfBirth: { month: "怒猪ノ月" },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id",
        name: "セトハ",
        dateOfBirth: { month: "怒猪ノ月", day: 1 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
      });
    });

    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (dateOfMonth.month なし -> dateOfMonth.month に'皇帝ノ月')", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id",
          name: "セトハ",
          dateOfBirth: { day: 28 },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id",
        name: "セトハ",
        dateOfBirth: { month: "皇帝ノ月", day: 28 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
      });
    });

    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (dateOfMonth.month/day なし -> dateOfMonth なし)", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id",
          name: "セトハ",
          dateOfBirth: {},
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id",
        name: "セトハ",
        dateOfBirth: undefined, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
      });
    });
  });
});
