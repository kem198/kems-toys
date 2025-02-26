import { isNabeatsu } from "@/app/(toys)/nabeatsu-assessmenter/_utilities/nabeatsu";
import { describe, expect, it } from "vitest";

describe("isNabeatsu", () => {
  describe("when the number is multiple of 3", () => {
    it("should return true if the number is -3", () => {
      expect(isNabeatsu(-3)).toBe(true);
    });

    it("should return true if the number is 0", () => {
      expect(isNabeatsu(0)).toBe(true);
    });

    it("should return true if the number is 3", () => {
      expect(isNabeatsu(3)).toBe(true);
    });

    it("should return true if the number is 6", () => {
      expect(isNabeatsu(6)).toBe(true);
    });

    it("should return true if the number is 9", () => {
      expect(isNabeatsu(9)).toBe(true);
    });
  });

  describe("when the number contains the digit 3", () => {
    it("should return true if the number is -13", () => {
      expect(isNabeatsu(-13)).toBe(true);
    });

    it("should return true if the number is 13", () => {
      expect(isNabeatsu(13)).toBe(true);
    });

    it("should return true if the number is 23", () => {
      expect(isNabeatsu(23)).toBe(true);
    });

    it("should return true if the number is 31", () => {
      expect(isNabeatsu(31)).toBe(true);
    });
  });

  describe("when the number is neither multiple of 3 nor contains the digit 3", () => {
    it("should return false if the number is -1", () => {
      expect(isNabeatsu(-1)).toBe(false);
    });

    it("should return false if the number is 1", () => {
      expect(isNabeatsu(1)).toBe(false);
    });

    it("should return false if the number is 2", () => {
      expect(isNabeatsu(2)).toBe(false);
    });

    it("should return false if the number is 2.9", () => {
      expect(isNabeatsu(2.9)).toBe(false);
    });

    it("should return false if the number is 3.1", () => {
      expect(isNabeatsu(3.1)).toBe(false);
    });

    it("should return false if the number is 4", () => {
      expect(isNabeatsu(4)).toBe(false);
    });
  });
});
