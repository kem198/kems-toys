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

    it("'EtrianV1[] を渡すと Etrian[] へ変換されること (配列)", () => {
      // Arrange
      const oldEtrians: EtrianV1[] = [
        {
          id: "test-id-0",
          name: "セトハ",
          dateOfBirth: { month: "笛鼠ノ月", day: 2 },
          affiliations: ["ブレイバント", "dummy"],
          order: 1,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
        {
          id: "test-id-1",
          name: "オーパス",
          dateOfBirth: { month: "天牛ノ月", day: 3 },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "大盾で仲間を守る冒険者。セトハお嬢に仕えていた元執事。",
        },
        {
          id: "test-id-2",
          name: "キサラギ",
          dateOfBirth: { month: "王虎ノ月", day: 4 },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "身の丈ほどの刀を振るう冒険者。中性的な雰囲気。",
        },
        {
          id: "test-id-3",
          name: "ヴィニヨン",
          dateOfBirth: { month: "素兎ノ月", day: 5 },
          affiliations: ["ブレイバント"],
          order: 1,
          memo: "魔法で仲間を支援する占師。訳アリの出自らしい。",
        },
      ];

      // Act
      const migratedEtrians = migrateEtrians(oldEtrians);

      // Assert
      expect(migratedEtrians[0]).toEqual({
        id: "test-id-0",
        name: "セトハ",
        dateOfBirth: { month: "笛鼠ノ月", day: 2 }, // 更新対象
        affiliations: ["ブレイバント", "dummy"],
        order: 1,
        memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
      });
      expect(migratedEtrians[1]).toEqual({
        id: "test-id-1",
        name: "オーパス",
        dateOfBirth: { month: "天牛ノ月", day: 3 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "大盾で仲間を守る冒険者。セトハお嬢に仕えていた元執事。",
      });
      expect(migratedEtrians[2]).toEqual({
        id: "test-id-2",
        name: "キサラギ",
        dateOfBirth: { month: "王虎ノ月", day: 4 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "身の丈ほどの刀を振るう冒険者。中性的な雰囲気。",
      });
      expect(migratedEtrians[3]).toEqual({
        id: "test-id-3",
        name: "ヴィニヨン",
        dateOfBirth: { month: "素兎ノ月", day: 5 }, // 更新対象
        affiliations: ["ブレイバント"],
        order: 1,
        memo: "魔法で仲間を支援する占師。訳アリの出自らしい。",
      });
    });
  });
});
