import {
  Etrian,
  EtrianV1,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { ETRIAN_REGISTRY_STORAGE_KEY } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { expect, test } from "@playwright/test";

test.describe("世界樹の暦ページのテスト", () => {
  test.describe("冒険者お誕生日台帳のテスト", () => {
    test.describe("初期表示のテスト", () => {
      test("冒険者が登録済みの状態で、画面が初期表示された時、登録済み冒険者の各種情報が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.goto("/");
        const etrians: Etrian[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              month: "皇帝ノ月",
              day: 1,
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert
        await expect(page.getByText("セトハ").first()).toBeVisible();
        await expect(page.getByText("皇帝ノ月 1 日").first()).toBeVisible();
        await expect(page.getByText("ブレイバント").first()).toBeVisible();
        await expect(page.getByText("アルカディア").first()).toBeVisible();
        await expect(
          page.getByText("突剣を自在に扱う冒険者。没落貴族の一人娘。").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });

      test("今日が誕生月の状態で、画面が初期表示された時、「今月はお誕生月です！あと ? 日！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-14T10:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              month: "皇帝ノ月",
              day: 15,
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert
        await expect(
          page.getByText("今月はお誕生月です！あと 1 日！").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });

      test("今日が誕生日の状態で、画面が初期表示された時、「🎉お誕生日です！おめでとう！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-15T10:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              month: "皇帝ノ月",
              day: 15,
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert
        await expect(
          page.getByText("🎉お誕生日です！おめでとう！").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });

      test("今日が誕生月かつ誕生日が過ぎている状態で、画面が初期表示された時、「今月はお誕生月でした！また来年！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-16T10:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              month: "皇帝ノ月",
              day: 15,
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert
        await expect(
          page.getByText("今月はお誕生月でした！また来年！").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });
    });

    test.describe.skip("作成時のテスト", () => {});
    test.describe.skip("更新時のテスト", () => {});
    test.describe.skip("削除時のテスト", () => {});
    test.describe("移行時のテスト", () => {
      test("EtrianV1 型が保存されている状態で、画面が初期表示された時、最新の Etrian 型で初期値が設定されること (月なし -> 月あり)", async ({
        page,
      }) => {
        // Arrange
        await page.goto("/");
        const etrians: EtrianV1[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              day: 1,
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert (月に初期値が設定されること)
        const migrated: Etrian[] = await page.evaluate(
          (key) => JSON.parse(localStorage.getItem(key)!),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
        expect(migrated[0].dateOfBirth).toEqual({ month: "皇帝ノ月", day: 1 }); // マイグレート対象
        expect(migrated[0].name).toBe("セトハ");
        expect(migrated[0].affiliations).toEqual([
          "ブレイバント",
          "アルカディア",
        ]);

        // Assert (表示が正しいこと)
        await expect(page.getByText("セトハ").first()).toBeVisible();
        await expect(page.getByText("皇帝ノ月 1 日").first()).toBeVisible(); // マイグレート対象
        await expect(page.getByText("ブレイバント").first()).toBeVisible();
        await expect(page.getByText("アルカディア").first()).toBeVisible();
        await expect(
          page.getByText("突剣を自在に扱う冒険者。没落貴族の一人娘。").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });

      test("EtrianV1 型が保存されている状態で、画面が初期表示された時、最新の Etrian 型で初期値が設定されること (日なし -> 日あり)", async ({
        page,
      }) => {
        // Arrange
        await page.goto("/");
        const etrians: EtrianV1[] = [
          {
            id: "test-etrian",
            name: "セトハ",
            dateOfBirth: {
              month: "皇帝ノ月",
            },
            affiliations: ["ブレイバント", "アルカディア"],
            order: 0,
            memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert (月に初期値が設定されること)
        const migrated: Etrian[] = await page.evaluate(
          (key) => JSON.parse(localStorage.getItem(key)!),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
        expect(migrated[0].dateOfBirth).toEqual({ month: "皇帝ノ月", day: 1 }); // マイグレート対象
        expect(migrated[0].name).toBe("セトハ");
        expect(migrated[0].affiliations).toEqual([
          "ブレイバント",
          "アルカディア",
        ]);

        // Assert (表示が正しいこと)
        await expect(page.getByText("セトハ").first()).toBeVisible();
        await expect(page.getByText("皇帝ノ月 1 日").first()).toBeVisible(); // マイグレート対象
        await expect(page.getByText("ブレイバント").first()).toBeVisible();
        await expect(page.getByText("アルカディア").first()).toBeVisible();
        await expect(
          page.getByText("突剣を自在に扱う冒険者。没落貴族の一人娘。").first(),
        ).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });
    });

    test("EtrianV1 型が保存されている状態で、画面が初期表示された時、最新の Etrian 型で初期値が設定されること (月日なし -> 誕生日なし)", async ({
      page,
    }) => {
      // Arrange
      await page.goto("/");
      const etrians: EtrianV1[] = [
        {
          id: "test-etrian",
          name: "セトハ",
          dateOfBirth: {},
          affiliations: ["ブレイバント", "アルカディア"],
          order: 0,
          memo: "突剣を自在に扱う冒険者。没落貴族の一人娘。",
        },
      ];
      await page.evaluate(
        ([key, value]) => {
          localStorage.setItem(key, value);
        },
        [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
      );

      // Act
      await page
        .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
        .click();

      // Assert (月に初期値が設定されること)
      const migrated: Etrian[] = await page.evaluate(
        (key) => JSON.parse(localStorage.getItem(key)!),
        ETRIAN_REGISTRY_STORAGE_KEY,
      );
      expect(migrated[0].dateOfBirth).toBeUndefined(); // マイグレート対象
      expect(migrated[0].name).toBe("セトハ");
      expect(migrated[0].affiliations).toEqual([
        "ブレイバント",
        "アルカディア",
      ]);

      // Assert (表示が正しいこと)
      await expect(page.getByText("セトハ").first()).toBeVisible();
      await expect(page.getByText("皇帝ノ月 1 日").first()).not.toBeVisible(); // マイグレート対象
      await expect(page.getByText("ブレイバント").first()).toBeVisible();
      await expect(page.getByText("アルカディア").first()).toBeVisible();
      await expect(
        page.getByText("突剣を自在に扱う冒険者。没落貴族の一人娘。").first(),
      ).toBeVisible();

      // Cleanup
      await page.evaluate(
        (key) => localStorage.removeItem(key),
        ETRIAN_REGISTRY_STORAGE_KEY,
      );
    });
  });
});
