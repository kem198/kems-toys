import { calcGcd } from "@/app/(toys)/euclidean-algorithm/_utilities/gcd";
import { describe, expect, it } from "vitest";

describe("calcGcd", () => {
  it("should return 1 if the numbers are 1 and 1", () => {
    expect(calcGcd(1, 1)).toBe(1);
  });

  it("should return 3 if the numbers are 6 and 9", () => {
    expect(calcGcd(6, 9)).toBe(3);
  });

  it("should return 1 if the numbers are 5 and 9", () => {
    expect(calcGcd(5, 9)).toBe(1);
  });

  it("should return 3 if the numbers are -6 and 9", () => {
    expect(calcGcd(-6, 9)).toBe(3);
  });

  it("should return 3 if the numbers are -6 and -9", () => {
    expect(calcGcd(-6, -9)).toBe(3);
  });

  it("should throw an error if the numbers are 0 and 0", () => {
    expect(() => calcGcd(0, 0)).toThrow(
      Error("両方の入力が 0 の場合、最大公約数は定義されません"),
    );
  });
});
