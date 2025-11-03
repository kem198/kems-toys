import { isLeapYear } from "@/utilities/date-utils";
import { describe, expect, it } from "vitest";

describe("isLeapYear() のテスト", () => {
  it("閏年である Date オブジェクトを与えた場合 true を返すこと", () => {
    // Arrange
    const leapYear = new Date("2024-02-29");

    // Act
    const result = isLeapYear(leapYear);

    // Assert
    expect(result).toBe(true);
  });

  it("閏年でない Date オブジェクトを与えた場合 false を返すこと", () => {
    // Arrange
    const leapYear = new Date("2025-03-01");

    // Act
    const result = isLeapYear(leapYear);

    // Assert
    expect(result).toBe(false);
  });
});
