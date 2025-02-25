import {
  calcGcd,
  calcGcdSteps,
} from "@/app/(toys)/euclidean-algorithm/_utilities/gcd";
import { describe, expect, it } from "vitest";

describe("calcGcd", () => {
  it("should return 1 if the numbers are 2 and 3", () => {
    expect(calcGcd(2, 3)).toBe(1);
  });

  it("should return 2 if the numbers are 2 and 6", () => {
    expect(calcGcd(2, 6)).toBe(2);
  });

  it("should return 3 if the numbers are 3 and 6", () => {
    expect(calcGcd(3, 6)).toBe(3);
  });

  it("should return 3 if the numbers are -3 and 6", () => {
    expect(calcGcd(-3, 6)).toBe(3);
  });

  it("should return 3 if the numbers are -6 and -6", () => {
    expect(calcGcd(-3, -6)).toBe(3);
  });

  it("should throw an error if the numbers are 0 and 0", () => {
    expect(() => calcGcd(0, 0)).toThrow(
      Error("両方の入力が 0 の場合、最大公約数は定義されません"),
    );
  });
});

describe("calcGcdSteps", () => {
  it("should return correct steps if the numbers are 2 and 3", () => {
    expect(calcGcdSteps(2, 3)).toEqual([
      "2 ÷ 3 = 0 ... 2",
      "3 ÷ 2 = 1 ... 1",
      "2 ÷ 1 = 2 ... 0",
    ]);
  });

  it("should return correct steps if the numbers are 2 and 6", () => {
    expect(calcGcdSteps(2, 6)).toEqual(["2 ÷ 6 = 0 ... 2", "6 ÷ 2 = 3 ... 0"]);
  });

  it("should return correct steps if the numbers are 3 and 6", () => {
    expect(calcGcdSteps(3, 6)).toEqual(["3 ÷ 6 = 0 ... 3", "6 ÷ 3 = 2 ... 0"]);
  });

  it("should return correct steps if the numbers are -3 and 6", () => {
    expect(calcGcdSteps(-3, 6)).toEqual(["3 ÷ 6 = 0 ... 3", "6 ÷ 3 = 2 ... 0"]);
  });

  it("should return correct steps if the numbers are -6 and -6", () => {
    expect(calcGcdSteps(-6, -6)).toEqual(["6 ÷ 6 = 1 ... 0"]);
  });

  it("should throw an error if the numbers are 0 and 0", () => {
    expect(() => calcGcdSteps(0, 0)).toThrow(
      Error("両方の入力が 0 の場合、最大公約数は定義されません"),
    );
  });
});
