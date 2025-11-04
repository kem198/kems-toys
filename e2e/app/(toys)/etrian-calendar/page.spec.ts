import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { ETRIAN_REGISTRY_STORAGE_KEY } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { expect, test } from "@playwright/test";

test.describe("世界樹の暦ページのテスト", () => {
  test.describe("冒険者お誕生日台帳のテスト", () => {
    test.describe("初期表示のテスト", () => {
      test("追加済みの冒険者「Added Task 1」が初期表示されること", async ({
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
          },
        ];
        await page.evaluate(
          ([key, value]) => {
            localStorage.setItem(key, value);
          },
          [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(etrians)],
        );

        // Act
        await page.getByRole("link", { name: "icon KeM's Toys" }).click();
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();

        // Assert
        await expect(page.getByText("セトハ").first()).toBeVisible();

        // Cleanup
        await page.evaluate(
          (key) => localStorage.removeItem(key),
          ETRIAN_REGISTRY_STORAGE_KEY,
        );
      });
    });
    test.describe.skip("作成時のテスト", () => {});
  });
});
