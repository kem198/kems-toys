import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { ETRIAN_REGISTRY_STORAGE_KEY } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { expect, Locator, Page, test } from "@playwright/test";

test.describe("世界樹の暦ページのテスト", () => {
  /** テストの Assert 範囲 */
  let toySection: Locator;

  /** テスト対象のページへ遷移する */
  const navigateToEtrianCalendar = async (page: Page) => {
    await page.getByRole("link", { name: "世界樹の暦 今日は何ノ月？" }).click();
    await expect(toySection).toBeVisible();
  };

  test.beforeEach(async ({ page }) => {
    // ルートへ移動しておく
    await page.goto("/");

    // テストの Assert 範囲を設定
    toySection = page.locator('[data-testid="toy"]');
  });

  test.describe("暦変換器 (太陽暦 -> 世界樹歴) のテスト", () => {
    test.describe("初期表示のテスト", () => {
      test("当日が '2025-01-01' の状態で、画面が初期表示された時、'2025-01-01' と '皇帝ノ月 1 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));

        // Act
        await navigateToEtrianCalendar(page);

        // Assert
        await expect(toySection.getByText("2025-01-01")).toBeVisible();
        await expect(
          toySection.getByText("皇帝ノ月 1 日").nth(1),
        ).toBeVisible();
      });

      test("当日が '2024-12-31' (閏年) の状態で、画面が初期表示された時、'2024-12-31' と '鬼乎ノ日 2 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-12-31T09:00:00"));

        // Act
        await navigateToEtrianCalendar(page);

        // Assert
        await expect(toySection.getByText("2024-12-31")).toBeVisible();
        await expect(toySection.getByText("鬼乎ノ日 2 日")).toBeVisible();
      });
    });

    test.describe("更新時のテスト", () => {
      test("当日が '2025-01-01' の状態で、太陽暦を '2025-02-01' に変更した時、'2025-02-01' と '笛鼠ノ月 4 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await navigateToEtrianCalendar(page);

        // Act
        await page.getByRole("button", { name: "太陽暦" }).click();
        await page.getByLabel("Choose the Month").selectOption("1");
        await page
          .getByRole("button", { name: "Saturday, February 1st," })
          .click();

        // Assert
        await expect(toySection.getByText("2025-02-01")).toBeVisible();
        await expect(toySection.getByText("笛鼠ノ月 4 日")).toBeVisible();
      });

      test("当日が '2025-01-01' の状態で、太陽暦を '2024-12-31' に変更した時、'2024-12-31' と '鬼乎ノ日 2 日' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await navigateToEtrianCalendar(page);

        // Act
        await page.getByRole("button", { name: "太陽暦" }).click();
        await page.getByLabel("Choose the Month").selectOption("11");
        await page.getByLabel("Choose the Year").selectOption("2024");
        await page
          .getByRole("button", { name: "Tuesday, December 31st," })
          .click();

        // Assert
        await expect(toySection.getByText("2024-12-31")).toBeVisible();
        await expect(toySection.getByText("鬼乎ノ日 2 日")).toBeVisible();
      });
    });
  });

  test.describe("暦変換器 (世界樹歴 -> 太陽暦) のテスト", () => {
    test.describe("初期表示のテスト", () => {
      test("当日が '2025-01-01' の状態で、暦変換器 (世界樹歴 -> 太陽暦) が初期表示された時、'皇帝ノ月 1 日' と '2025-01-01' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await navigateToEtrianCalendar(page);

        // Act
        await page.getByRole("button", { name: "入れ替える" }).click();

        // Assert
        await expect(toySection.getByText("2025").first()).toBeVisible();
        await expect(toySection.getByText("皇帝ノ月").nth(1)).toBeVisible();
        await expect(toySection.getByText("1").nth(1)).toBeVisible();
        await expect(toySection.getByText("2025-01-01")).toBeVisible();
      });

      test("当日が '2024-12-31' (閏年) の状態で、暦変換器 (世界樹歴 -> 太陽暦) が初期表示された時、'鬼乎ノ日 2 日' と '2024-12-31' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-12-31T09:00:00"));
        await navigateToEtrianCalendar(page);

        // Act
        await page.getByRole("button", { name: "入れ替える" }).click();

        // Assert
        await expect(toySection.getByText("2024").first()).toBeVisible();
        await expect(toySection.getByText("鬼乎ノ日").nth(1)).toBeVisible();
        await expect(toySection.getByText("2").nth(1)).toBeVisible();
        await expect(toySection.getByText("2024-12-31")).toBeVisible();
      });

      test("暦変換機 (太陽暦 -> 世界樹歴) で特定日を選択した状態で、暦変換器 (世界樹歴 -> 太陽暦) が初期表示された時、特定日が初期表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await page
          .getByRole("link", { name: "世界樹の暦 今日は何ノ月？" })
          .click();
        await page.getByRole("button", { name: "太陽暦" }).click();
        await page.getByLabel("Choose the Month").selectOption("3");
        await page.getByRole("button", { name: "Tuesday, April 1st," }).click();

        // Act
        await page.getByRole("button", { name: "入れ替える" }).click();

        // Assert
        await expect(page.getByText("2025").first()).toBeVisible();
        await expect(page.getByText("王虎ノ月").first()).toBeVisible();
        await expect(page.getByText("7").first()).toBeVisible();
        await expect(page.getByText("2025-04-01").first()).toBeVisible();
      });
    });

    test.describe("更新時のテスト", () => {
      test("当日が '2025-01-01' の状態で、世界樹暦を '2025 年 笛鼠ノ月 4 日' に変更した時、'笛鼠ノ月 4 日' と '2025-02-01' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await navigateToEtrianCalendar(page);
        await page.getByRole("button", { name: "入れ替える" }).click();

        // Act
        await page.locator("#etrian-year").click();
        await page.getByRole("option", { name: "2025" }).click();
        await page.locator("#etrian-month").click();
        await page.getByText("笛鼠ノ月", { exact: true }).click();
        await page.locator("#etrian-day").click();
        await page.getByRole("option", { name: "4", exact: true }).click();

        // Assert
        await expect(toySection.getByText("2025").first()).toBeVisible();
        await expect(toySection.getByText("笛鼠ノ月")).toBeVisible();
        await expect(toySection.getByText("4")).toBeVisible();
        await expect(toySection.getByText("2025-02-01")).toBeVisible();
      });

      test("当日が '2025-01-01' の状態で、世界樹暦を '2024 年 鬼乎ノ日 2 日' に変更した時、'鬼乎ノ日 2 日' と '2024-12-31' が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2025-01-01T09:00:00"));
        await navigateToEtrianCalendar(page);
        await page.getByRole("button", { name: "入れ替える" }).click();

        // Act
        await page.locator("#etrian-year").click();
        await page.getByRole("option", { name: "2024" }).click();
        await page.locator("#etrian-month").click();
        await page.getByText("鬼乎ノ日", { exact: true }).click();
        await page.locator("#etrian-day").click();
        await page.getByRole("option", { name: "2", exact: true }).click();

        // Assert
        await expect(toySection.getByText("2024").first()).toBeVisible();
        await expect(toySection.getByText("鬼乎ノ日")).toBeVisible();
        await expect(toySection.getByText("2").nth(1)).toBeVisible();
        await expect(toySection.getByText("2024-12-31")).toBeVisible();
      });
    });
  });

  test.describe("冒険者お誕生日台帳のテスト", () => {
    const DUMMY_ETRIANS: Etrian[] = [
      {
        id: "dummy-etrian",
        name: "dummy",
        dateOfBirth: { month: "天牛ノ月", day: 1 },
        affiliations: [],
        order: 0,
      },
    ];

    test.beforeEach(async ({ page }) => {
      // ダミー Etrians のセット
      await page.evaluate(
        ([key, value]) => {
          localStorage.setItem(key, value);
        },
        [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(DUMMY_ETRIANS)],
      );
    });

    test.afterEach(async ({ page }) => {
      // ダミー Etrians で再度上書き
      await page.evaluate(
        ([key, value]) => {
          localStorage.setItem(key, value);
        },
        [ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(DUMMY_ETRIANS)],
      );
    });

    test.describe("初期表示のテスト", () => {
      test("冒険者が登録済みの状態で、画面が初期表示された時、登録済み冒険者の各種情報が表示されること", async ({
        page,
      }) => {
        // Arrange
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
        await navigateToEtrianCalendar(page);

        // Assert
        await expect(toySection.getByText("セトハ")).toBeVisible();
        await expect(toySection.getByText("皇帝ノ月 1 日")).toBeVisible();
        await expect(toySection.getByText("ブレイバント")).toBeVisible();
        await expect(toySection.getByText("アルカディア")).toBeVisible();
        await expect(
          toySection.getByText("突剣を自在に扱う冒険者。没落貴族の一人娘。"),
        ).toBeVisible();
      });

      test("今日が誕生月の状態で、画面が初期表示された時、「今月はお誕生月です！あと ? 日！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-14T10:00:00"));
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
      });

      test("今日が誕生日の状態で、画面が初期表示された時、「🎉お誕生日です！おめでとう！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-15T10:00:00"));
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
      });

      test("今日が誕生月かつ誕生日が過ぎている状態で、画面が初期表示された時、「今月はお誕生月でした！また来年！」が表示されること", async ({
        page,
      }) => {
        // Arrange
        await page.clock.setFixedTime(new Date("2024-01-16T10:00:00"));
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
      });
    });

    test.describe.skip("作成時のテスト", () => {});

    test.describe.skip("更新時のテスト", () => {});

    test.describe.skip("削除時のテスト", () => {});
  });
});
