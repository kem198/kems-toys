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
    });

    describe("and not relatively prime", () => {
      it("should return 2 if the numbers are 2 and 6", () => {
        expect(calcGcd(2, 6)).toBe(2);
      });

      it("should return 3 if the numbers are 3 and 6", () => {
        expect(calcGcd(3, 6)).toBe(3);
      });

      it("should return 6 if the numbers are 123456 and 7890", () => {
        expect(calcGcd(123456, 7890)).toBe(6);
      });
    });

    describe("and the other is a multiple of the prime", () => {
      it("should return 7 if the numbers are 7 and 14", () => {
        expect(calcGcd(7, 14)).toBe(7);
      });
    });

    describe("and the other is not a multiple of the prime", () => {
      it("should return 1 if the numbers are 7 and 10", () => {
        expect(calcGcd(7, 10)).toBe(1);
      });
    });
  });

  describe("when one or both numbers are negative", () => {
    it("should return 3 if the numbers are -3 and 6", () => {
      expect(calcGcd(-3, 6)).toBe(3);
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
    describe("and relatively prime", () => {
      it("should return correct steps if the numbers are 2 and 3", () => {
        expect(calcGcdSteps(2, 3)).toEqual([
          "3 ÷ 2 = 1 ... 1",
          "2 ÷ 1 = 2 ... 0",
        ]);
      });

      it("should return correct steps if the numbers are 17 and 19", () => {
        expect(calcGcdSteps(17, 19)).toEqual([
          "19 ÷ 17 = 1 ... 2",
          "17 ÷ 2 = 8 ... 1",
          "2 ÷ 1 = 2 ... 0",
        ]);
      });
    });

    describe("and not relatively prime", () => {
      it("should return correct steps if the numbers are 2 and 6", () => {
        expect(calcGcdSteps(2, 6)).toEqual(["6 ÷ 2 = 3 ... 0"]);
      });

      it("should return correct steps if the numbers are 3 and 6", () => {
        expect(calcGcdSteps(3, 6)).toEqual(["6 ÷ 3 = 2 ... 0"]);
      });

      it("should return correct steps if the numbers are 123456 and 7890", () => {
        expect(calcGcdSteps(123456, 7890)).toEqual([
          "123456 ÷ 7890 = 15 ... 5106",
          "7890 ÷ 5106 = 1 ... 2784",
          "5106 ÷ 2784 = 1 ... 2322",
          "2784 ÷ 2322 = 1 ... 462",
          "2322 ÷ 462 = 5 ... 12",
          "462 ÷ 12 = 38 ... 6",
          "12 ÷ 6 = 2 ... 0",
        ]);
      });
    });
  });

  describe("when one or both numbers are negative", () => {
    it("should return correct steps if the numbers are -3 and 6", () => {
      expect(calcGcdSteps(-3, 6)).toEqual(["6 ÷ 3 = 2 ... 0"]);
    });

    it("should return correct steps if the numbers are -123456 and 7890", () => {
      expect(calcGcdSteps(-123456, 7890)).toEqual([
        "123456 ÷ 7890 = 15 ... 5106",
        "7890 ÷ 5106 = 1 ... 2784",
        "5106 ÷ 2784 = 1 ... 2322",
        "2784 ÷ 2322 = 1 ... 462",
        "2322 ÷ 462 = 5 ... 12",
        "462 ÷ 12 = 38 ... 6",
        "12 ÷ 6 = 2 ... 0",
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
