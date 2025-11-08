import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { ETRIAN_REGISTRY_STORAGE_KEY } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { expect, test } from "@playwright/test";

test.describe("世界樹の暦ページのテスト", () => {
  test.describe("暦変換器 (太陽暦 -> 世界樹歴) のテスト", () => {
    test.describe("初期表示のテスト", () => {
      test("当日が '2025-01-01' の状態で、画面が初期表示された時、'2025-01-01' と '皇帝ノ月 1 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [];
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
        await expect(page.getByText("2025-01-01").first()).toBeVisible();
        await expect(page.getByText("皇帝ノ月 1 日").first()).toBeVisible();
      });

      test("当日が '2024-12-31' (閏年) の状態で、画面が初期表示された時、'2024-12-31' と '鬼乎ノ日 2 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-12-31T09:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [
          {
            id: "dummy-etrian",
            name: "dummy",
            dateOfBirth: { month: "天牛ノ月", day: 1 },
            affiliations: [],
            order: 0,
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
        await expect(page.getByText("2024-12-31").first()).toBeVisible();
        await expect(page.getByText("鬼乎ノ日 2 日").first()).toBeVisible();
      });
    });

    test.describe("更新時のテスト", () => {
      test("当日が '2025-01-01' の状態で、太陽暦を '2025-02-01' に変更した時、'2025-02-01' と '笛鼠ノ月 4 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Act
        await page.getByRole("button", { name: "太陽暦" }).click();
        await page.getByLabel("Choose the Month").selectOption("1");
        await page
          .getByRole("button", { name: "Saturday, February 1st," })
          .click();

        // Assert
        await expect(page.getByText("2025-02-01").first()).toBeVisible();
        await expect(page.getByText("笛鼠ノ月 4 日").first()).toBeVisible();
      });

      test("当日が '2025-01-01' の状態で、太陽暦を '2024-12-31' に変更した時、'2024-12-31' と '鬼乎ノ日 2 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await page.goto("/");
        const etrians: Etrian[] = [];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Act
        await page.getByRole("button", { name: "太陽暦" }).click();
        await page.getByLabel("Choose the Month").selectOption("11");
        await page.getByLabel("Choose the Year").selectOption("2024");
        await page
          .getByRole("button", { name: "Tuesday, December 31st," })
          .click();

        // Assert
        await expect(page.getByText("2024-12-31").first()).toBeVisible();
        await expect(page.getByText("鬼乎ノ日 2 日").first()).toBeVisible();
      });
    });
  });

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
    });
    test.describe.skip("作成時のテスト", () => {});
    test.describe.skip("更新時のテスト", () => {});
    test.describe.skip("削除時のテスト", () => {});
  });
});
