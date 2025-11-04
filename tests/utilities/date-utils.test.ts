import { isLeapYear } from "@/utilities/date-utils";
import { describe, expect, it } from "vitest";

describe("isLeapYear() のテスト", () => {
  describe("閏年のテスト", () => {
    it("閏年である Date オブジェクトを与えた場合 true を返すこと (4 で割れる年)", () => {
      // Arrange
      const leapYear = new Date("2024-02-29");

      // Act
      const result = isLeapYear(leapYear);

      // Assert
      expect(result).toBe(true);
    });

    it("閏年である Date オブジェクトを与えた場合 true を返すこと (400 で割れる年)", () => {
      // Arrange
      const leapYear = new Date("2000-02-29");

      // Act
      const result = isLeapYear(leapYear);

      // Assert
      expect(result).toBe(true);
    });
  });

  describe("閏年でない日付のテスト", () => {
    it("閏年でない Date オブジェクトを与えた場合 false を返すこと (一般的な年)", () => {
      // Arrange
      const leapYear = new Date("2025-03-01");

      // Act
      const result = isLeapYear(leapYear);

      // Assert
      expect(result).toBe(false);
    });

    it("閏年でない Date オブジェクトを与えた場合 false を返すこと (100 で割れるが 400 で割れない年)", () => {
      // Arrange
      const leapYear = new Date("1900-02-28");

      // Act
      const result = isLeapYear(leapYear);

      // Assert
      expect(result).toBe(false);
    });
  });
});
