import {
  calcGcd,
  calcGcdSteps,
} from "@/app/(toys)/euclidean-algorithm/_utilities/gcd";
import { describe, expect, it } from "vitest";

describe("calcGcd", () => {
  describe("when both numbers are positive", () => {
    describe("and relatively prime", () => {
      it("should return 1 if the numbers are 2 and 3", () => {
        expect(calcGcd(2, 3)).toBe(1);
      });

      it("should return 1 if the numbers are 17 and 19", () => {
        expect(calcGcd(17, 19)).toBe(1);
      });

      it("should return 1 if the numbers are 14 and 25", () => {
        expect(calcGcd(14, 25)).toBe(1);
      });
    });

    describe("and not relatively prime", () => {
      it("should return 2 if the numbers are 2 and 6", () => {
        expect(calcGcd(2, 6)).toBe(2);
      });

      it("should return 3 if the numbers are 3 and 6", () => {
        expect(calcGcd(3, 6)).toBe(3);
      });

      it("should return 5 if the numbers are 25 and 5", () => {
        expect(calcGcd(25, 5)).toBe(5);
      });

      it("should return 1000000 if the numbers are 1000000 and 1000000", () => {
        expect(calcGcd(1000000, 1000000)).toBe(1000000);
      });

      it("should return 6 if the numbers are 123456 and 7890", () => {
        expect(calcGcd(123456, 7890)).toBe(6);
      });
    });
  });

  describe("when one or both numbers are negative", () => {
    it("should return 3 if the numbers are -3 and 6", () => {
      expect(calcGcd(-3, 6)).toBe(3);
    });

    it("should return 3 if the numbers are -3 and -6", () => {
      expect(calcGcd(-3, -6)).toBe(3);
    });

    it("should return 6 if the numbers are -123456 and 7890", () => {
      expect(calcGcd(-123456, 7890)).toBe(6);
    });
  });

  describe("when one number is zero", () => {
    it("should return 5 if the numbers are 0 and 5", () => {
      expect(calcGcd(0, 5)).toBe(5);
    });

    it("should return 5 if the numbers are 5 and 0", () => {
      expect(calcGcd(5, 0)).toBe(5);
    });
  });

  describe("when both numbers are zero", () => {
    it("should throw an error if the numbers are 0 and 0", () => {
      expect(() => calcGcd(0, 0)).toThrow(
        Error("両方の入力が 0 の場合、最大公約数は定義されません"),
      );
    });
  });
});

describe("calcGcdSteps", () => {
  describe("when both numbers are positive", () => {
    it("should return correct steps if the numbers are 2 and 3", () => {
      expect(calcGcdSteps(2, 3)).toEqual([
        "2 ÷ 3 = 0 ... 2",
        "3 ÷ 2 = 1 ... 1",
        "2 ÷ 1 = 2 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 2 and 6", () => {
      expect(calcGcdSteps(2, 6)).toEqual([
        "2 ÷ 6 = 0 ... 2",
        "6 ÷ 2 = 3 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 3 and 6", () => {
      expect(calcGcdSteps(3, 6)).toEqual([
        "3 ÷ 6 = 0 ... 3",
        "6 ÷ 3 = 2 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 123456 and 7890", () => {
      expect(calcGcdSteps(123456, 7890)).toEqual([
        "123456 ÷ 7890 = 15 ... 1236",
        "7890 ÷ 1236 = 6 ... 126",
        "1236 ÷ 126 = 9 ... 108",
        "126 ÷ 108 = 1 ... 18",
        "108 ÷ 18 = 6 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 17 and 19", () => {
      expect(calcGcdSteps(17, 19)).toEqual([
        "17 ÷ 19 = 0 ... 17",
        "19 ÷ 17 = 1 ... 2",
        "17 ÷ 2 = 8 ... 1",
        "2 ÷ 1 = 2 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 14 and 25", () => {
      expect(calcGcdSteps(14, 25)).toEqual([
        "14 ÷ 25 = 0 ... 14",
        "25 ÷ 14 = 1 ... 11",
        "14 ÷ 11 = 1 ... 3",
        "11 ÷ 3 = 3 ... 2",
        "3 ÷ 2 = 1 ... 1",
        "2 ÷ 1 = 2 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are 25 and 5", () => {
      expect(calcGcdSteps(25, 5)).toEqual(["25 ÷ 5 = 5 ... 0"]);
    });
  });

  describe("when one or both numbers are negative", () => {
    it("should return correct steps if the numbers are -3 and 6", () => {
      expect(calcGcdSteps(-3, 6)).toEqual([
        "3 ÷ 6 = 0 ... 3",
        "6 ÷ 3 = 2 ... 0",
      ]);
    });

    it("should return correct steps if the numbers are -6 and -6", () => {
      expect(calcGcdSteps(-6, -6)).toEqual(["6 ÷ 6 = 1 ... 0"]);
    });

    it("should return correct steps if the numbers are -123456 and 7890", () => {
      expect(calcGcdSteps(-123456, 7890)).toEqual([
        "123456 ÷ 7890 = 15 ... 1236",
        "7890 ÷ 1236 = 6 ... 126",
        "1236 ÷ 126 = 9 ... 108",
        "126 ÷ 108 = 1 ... 18",
        "108 ÷ 18 = 6 ... 0",
      ]);
    });
  });

  describe("when both numbers are zero", () => {
    it("should throw an error if the numbers are 0 and 0", () => {
      expect(() => calcGcdSteps(0, 0)).toThrow(
        Error("両方の入力が 0 の場合、最大公約数は定義されません"),
      );
    });
  });
});
