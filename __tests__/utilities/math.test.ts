import { isPositiveInteger, sum } from "@/utilities/math";
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("should adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("isPositiveInteger", () => {
  it("should return true if the number is 1", () => {
    expect(isPositiveInteger(1)).toBe(true);
  });

  it("should return false if the number is 0", () => {
    expect(isPositiveInteger(0)).toBe(false);
  });

  it("should return false if the number is -1", () => {
    expect(isPositiveInteger(-1)).toBe(false);
  });

  it("should return false if the number is 1.1", () => {
    expect(isPositiveInteger(1.1)).toBe(false);
  });
});
