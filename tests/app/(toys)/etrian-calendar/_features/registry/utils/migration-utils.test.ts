import {
  EtrianRegistry,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { migrateEtrianRegistry } from "@/app/(toys)/etrian-calendar/_features/registry/utils/migration-utils";
import { describe, expect, it } from "vitest";

describe("migration-utils tests", () => {
  describe("migrateToEtrianRegistry() tests", () => {
    describe("EtrianV1 -> 最新の EtrianRegistry への移行", () => {
      it("EtrianV1[] が渡された時、最新の EtrianRegistry へ変換されること (dateOfMonth.month/day あり -> そのまま)", () => {
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
        const registry = migrateEtrianRegistry(oldEtrians);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: { month: "怒猪ノ月", day: 28 },
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });

      it("EtrianV1[] が渡された時、最新の EtrianRegistry へ変換されること (dateOfMonth.day なし -> dateOfMonth.day に 1)", () => {
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
        const registry = migrateEtrianRegistry(oldEtrians);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: { month: "怒猪ノ月", day: 1 },
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });

      it("EtrianV1[] が渡された時、最新の EtrianRegistry へ変換されること (dateOfMonth.month なし -> dateOfMonth.month に'皇帝ノ月')", () => {
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
        const registry = migrateEtrianRegistry(oldEtrians);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: { month: "皇帝ノ月", day: 28 },
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });

      it("EtrianV1[] が渡された時、最新の EtrianRegistry へ変換されること (dateOfMonth.month/day なし -> dateOfMonth なし)", () => {
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
        const registry = migrateEtrianRegistry(oldEtrians);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: undefined,
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });

      it("空の EtrianV1[] が渡された時、空の etrians を持つ EtrianRegistry へ変換されること", () => {
        // Arrange
        const oldEtrians: EtrianV1[] = [];

        // Act
        const registry = migrateEtrianRegistry(oldEtrians);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([]);
      });

      it("EtrianRegistry (v1) が渡された時、最新の EtrianRegistry へ変換されること", () => {
        // Arrange
        const oldRegistry: EtrianRegistry = {
          version: 1,
          etrians: [
            {
              id: "test-id",
              name: "セトハ",
              dateOfBirth: { month: "怒猪ノ月", day: 28 },
              affiliations: ["ブレイバント"],
              order: 1,
              memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
            },
          ],
        };

        // Act
        const registry = migrateEtrianRegistry(oldRegistry);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: { month: "怒猪ノ月", day: 28 },
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });

      it("最新の EtrianRegistry が渡された時、そのまま返すこと", () => {
        // Arrange
        const currentRegistry: EtrianRegistry = {
          version: 2,
          etrians: [
            {
              id: "test-id",
              name: "セトハ",
              dateOfBirth: { month: "怒猪ノ月", day: 28 },
              affiliations: ["ブレイバント"],
              order: 1,
              memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
            },
          ],
        };

        // Act
        const registry = migrateEtrianRegistry(currentRegistry);

        // Assert
        expect(registry.version).toBe(2);
        expect(registry.etrians).toEqual([
          {
            id: "test-id",
            name: "セトハ",
            dateOfBirth: { month: "怒猪ノ月", day: 28 },
            affiliations: ["ブレイバント"],
            order: 1,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ]);
      });
    });
  });
});
