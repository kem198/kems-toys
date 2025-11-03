import {
  toEtrianDate,
  toSolarDate,
} from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";
import { describe, expect, it } from "vitest";

describe("etrian-utils tests", () => {
  describe("toEtrianDate() tests", () => {
    it("'2025-01-01 00:00:00' を与えた場合、'皇帝ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-01-01 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "皇帝ノ月",
          kana: "こうていのつき",
        },
        day: 1,
      });
    });

    it("'2025-01-28 23:59:59' を与えた場合、'皇帝ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-01-28 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "皇帝ノ月",
          kana: "こうていのつき",
        },
        day: 28,
      });
    });

    it("'2025-01-29 00:00:00' を与えた場合、'笛鼠ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-01-29 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "笛鼠ノ月",
          kana: "ふえねずみのつき",
        },
        day: 1,
      });
    });

    it("'2025-02-25 23:59:59' を与えた場合、'笛鼠ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-02-25 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "笛鼠ノ月",
          kana: "ふえねずみのつき",
        },
        day: 28,
      });
    });

    it("'2025-02-26 00:00:00' を与えた場合、'天牛ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-02-26 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "天牛ノ月",
          kana: "てんぎゅうのつき",
        },
        day: 1,
      });
    });

    it("'2025-03-25 23:59:59' を与えた場合、'天牛ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-03-25 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "天牛ノ月",
          kana: "てんぎゅうのつき",
        },
        day: 28,
      });
    });

    it("'2025-03-26 00:00:00' を与えた場合、'王虎ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-03-26 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "王虎ノ月",
          kana: "おうこのつき",
        },
        day: 1,
      });
    });

    it("'2025-04-22 23:59:59' を与えた場合、'王虎ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-04-22 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "王虎ノ月",
          kana: "おうこのつき",
        },
        day: 28,
      });
    });

    it("'2025-04-23 00:00:00' を与えた場合、'素兎ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-04-23 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "素兎ノ月",
          kana: "すうさぎのつき",
        },
        day: 1,
      });
    });

    it("'2025-05-20 23:59:59' を与えた場合、'素兎ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-05-20 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "素兎ノ月",
          kana: "すうさぎのつき",
        },
        day: 28,
      });
    });

    it("'2025-05-21 00:00:00' を与えた場合、'虹竜ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-05-21 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "虹竜ノ月",
          kana: "にじりゅうのつき",
        },
        day: 1,
      });
    });

    it("'2025-06-17 23:59:59' を与えた場合、'虹竜ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-06-17 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "虹竜ノ月",
          kana: "にじりゅうのつき",
        },
        day: 28,
      });
    });

    it("'2025-06-18 00:00:00' を与えた場合、'白蛇ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-06-18 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "白蛇ノ月",
          kana: "しろへびのつき",
        },
        day: 1,
      });
    });

    it("'2025-07-15 23:59:59' を与えた場合、'白蛇ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-07-15 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "白蛇ノ月",
          kana: "しろへびのつき",
        },
        day: 28,
      });
    });

    it("'2025-07-16 00:00:00' を与えた場合、'風馬ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-07-16 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "風馬ノ月",
          kana: "ふうまのつき",
        },
        day: 1,
      });
    });

    it("'2025-08-12 23:59:59' を与えた場合、'風馬ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-08-12 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "風馬ノ月",
          kana: "ふうまのつき",
        },
        day: 28,
      });
    });

    it("'2025-08-13 00:00:00' を与えた場合、'金羊ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-08-13 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "金羊ノ月",
          kana: "きんようのつき",
        },
        day: 1,
      });
    });

    it("'2025-09-09 23:59:59' を与えた場合、'金羊ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-09-09 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "金羊ノ月",
          kana: "きんようのつき",
        },
        day: 28,
      });
    });

    it("'2025-09-10 00:00:00' を与えた場合、'飛猴ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-09-10 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "飛猴ノ月",
          kana: "ひろうのつき",
        },
        day: 1,
      });
    });

    it("'2025-10-07 23:59:59' を与えた場合、'飛猴ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-10-07 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "飛猴ノ月",
          kana: "ひろうのつき",
        },
        day: 28,
      });
    });

    it("'2025-10-08 00:00:00' を与えた場合、'火鳥ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-10-08 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "火鳥ノ月",
          kana: "かちょうのつき",
        },
        day: 1,
      });
    });

    it("'2025-11-04 23:59:59' を与えた場合、'火鳥ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-11-04 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "火鳥ノ月",
          kana: "かちょうのつき",
        },
        day: 28,
      });
    });

    it("'2025-11-05 00:00:00' を与えた場合、'戌神ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-11-05 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "戌神ノ月",
          kana: "いぬがみのつき",
        },
        day: 1,
      });
    });

    it("'2025-12-02 23:59:59' を与えた場合、'戌神ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-12-02 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "戌神ノ月",
          kana: "いぬがみのつき",
        },
        day: 28,
      });
    });

    it("'2025-12-03 00:00:00' を与えた場合、'怒猪ノ月 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-12-03 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "怒猪ノ月",
          kana: "どちょのつき",
        },
        day: 1,
      });
    });

    it("'2025-12-30 23:59:59' を与えた場合、'怒猪ノ月 28 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-12-30 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "怒猪ノ月",
          kana: "どちょのつき",
        },
        day: 28,
      });
    });

    it("'2025-12-31 00:00:00' を与えた場合、'鬼乎ノ日 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-12-31 00:00:00");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "鬼乎ノ日",
          kana: "ものかのひ",
        },
        day: 1,
      });
    });

    it("'2025-12-31 23:59:59' を与えた場合、'鬼乎ノ日 1 日' を返すこと", () => {
      // Arrange
      const realDate = new Date("2025-12-31 23:59:59");

      // Act
      const etrianDate = toEtrianDate(realDate);

      // Assert
      expect(etrianDate).toEqual({
        month: {
          name: "鬼乎ノ日",
          kana: "ものかのひ",
        },
        day: 1,
      });
    });

    describe("閏年の考慮", () => {
      it("'2024-02-29 00:00:00' (閏年のみの日付) を与えた場合、'天牛ノ月 4 日' を返すこと", () => {
        const realDate = new Date("2024-02-29 00:00:00");

        // Act
        const etrianDate = toEtrianDate(realDate);

        // Assert
        expect(etrianDate).toEqual({
          day: 4,
          month: {
            name: "天牛ノ月",
            kana: "てんぎゅうのつき",
          },
        });
      });

      it("'2024-02-29 23:59:59' (閏年のみの日付) を与えた場合、'天牛ノ月 4 日' を返すこと", () => {
        const realDate = new Date("2024-02-29 23:59:59");

        // Act
        const etrianDate = toEtrianDate(realDate);

        // Assert
        expect(etrianDate).toEqual({
          day: 4,
          month: {
            name: "天牛ノ月",
            kana: "てんぎゅうのつき",
          },
        });
      });

      it("'2024-03-01 00:00:00' (閏年のみの日付翌日) を与えた場合、'天牛ノ月 5 日' を返すこと", () => {
        const realDate = new Date("2024-03-01 00:00:00");

        // Act
        const etrianDate = toEtrianDate(realDate);

        // Assert
        expect(etrianDate).toEqual({
          day: 5,
          month: {
            name: "天牛ノ月",
            kana: "てんぎゅうのつき",
          },
        });
      });

      it("'2024-12-31 00:00:00' (閏年最終日) を与えた場合、'鬼乎ノ日 2 日' を返すこと", () => {
        const realDate = new Date("2024-12-31 00:00:00");

        // Act
        const etrianDate = toEtrianDate(realDate);

        // Assert
        expect(etrianDate).toEqual({
          month: {
            name: "鬼乎ノ日",
            kana: "ものかのひ",
          },
          day: 2,
        });
      });

      it("'2024-12-31 23:59:59' (閏年最終日) を与えた場合、'鬼乎ノ日 2 日' を返すこと", () => {
        const realDate = new Date("2024-12-31 23:59:59");

        // Act
        const etrianDate = toEtrianDate(realDate);

        // Assert
        expect(etrianDate).toEqual({
          month: {
            name: "鬼乎ノ日",
            kana: "ものかのひ",
          },
          day: 2,
        });
      });
    });
  });

  describe("toSolarDate() tests", () => {
    it("'2025 年 皇帝ノ月 1 日' を与えた場合、'2025-01-01' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "皇帝ノ月",
        day: 1,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 0, 1));
    });

    it("'2025 年 皇帝ノ月 28 日' を与えた場合、'2025-01-28' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "皇帝ノ月",
        day: 28,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 0, 28));
    });

    it("'2025 年 笛鼠ノ月 1 日' を与えた場合、'2025-01-29' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "笛鼠ノ月",
        day: 1,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 0, 29));
    });

    it("'2025 年 笛鼠ノ月 28 日' を与えた場合、'2025-02-25' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "笛鼠ノ月",
        day: 28,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 1, 25));
    });

    it("'2025 年 天牛ノ月 1 日' を与えた場合、'2025-02-26' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "天牛ノ月",
        day: 1,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 1, 26));
    });

    it("'2025 年 天牛ノ月 28 日' を与えた場合、'2025-03-25' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "天牛ノ月",
        day: 28,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 2, 25));
    });

    it("'2025 年 王虎ノ月 1 日' を与えた場合、'2025-03-26' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "王虎ノ月",
        day: 1,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 2, 26));
    });

    it("'2025 年 怒猪ノ月 28 日' を与えた場合、'2025-12-30' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "怒猪ノ月",
        day: 28,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 11, 30));
    });

    it("'2025 年 鬼乎ノ日 1 日' を与えた場合、'2025-12-31' を返すこと", () => {
      // Act
      const solarDate = toSolarDate({
        year: 2025,
        month: "鬼乎ノ日",
        day: 1,
      });

      // Assert
      expect(solarDate).toEqual(new Date(2025, 11, 31));
    });

    describe("閏年の考慮", () => {
      it("'2024 年 天牛ノ月 4 日' を与えた場合、'2024-02-29' (閏年のみの日付) を返すこと", () => {
        // Act
        const solarDate = toSolarDate({
          year: 2024,
          month: "天牛ノ月",
          day: 4,
        });

        // Assert
        expect(solarDate).toEqual(new Date(2024, 1, 29));
      });

      it("'2024 年 天牛ノ月 5 日' を与えた場合、'2024-03-01' (閏年のみの日付翌日) を返すこと", () => {
        // Act
        const solarDate = toSolarDate({
          year: 2024,
          month: "天牛ノ月",
          day: 5,
        });

        // Assert
        expect(solarDate).toEqual(new Date(2024, 2, 1));
      });

      it("'2024 年 鬼乎ノ日 1 日' を与えた場合、'2024-12-30' を返すこと", () => {
        // Act
        const solarDate = toSolarDate({
          year: 2024,
          month: "鬼乎ノ日",
          day: 1,
        });

        // Assert
        expect(solarDate).toEqual(new Date(2024, 11, 30));
      });

      it("'2024 年 鬼乎ノ日 2 日' を与えた場合、'2024-12-31' を返すこと", () => {
        // Act
        const solarDate = toSolarDate({
          year: 2024,
          month: "鬼乎ノ日",
          day: 2,
        });

        // Assert
        expect(solarDate).toEqual(new Date(2024, 11, 31));
      });
    });
  });
});
