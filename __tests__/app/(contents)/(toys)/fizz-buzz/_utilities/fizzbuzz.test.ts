import { fizzBuzz } from "@/app/(contents)/(toys)/fizz-buzz/_utilities/fizzbuzz";
import { describe, expect, it } from "vitest";

describe("fizzBuzz", () => {
  describe("when the number is divisible by 3", () => {
    it("should return 'Fizz!' if the number is 3", () => {
      expect(fizzBuzz(3)).toBe("Fizz!");
    });

    it("should return 'Fizz!' if the number is 6", () => {
      expect(fizzBuzz(3)).toBe("Fizz!");
    });
  });

  describe("when the number is divisible by 5", () => {
    it("should return 'Buzz!' if the number is 5", () => {
      expect(fizzBuzz(5)).toBe("Buzz!");
    });

    it("should return 'Buzz!' if the number is 10", () => {
      expect(fizzBuzz(10)).toBe("Buzz!");
    });
  });

  describe("when the number is divisible by 3 and 5", () => {
    it("should return 'Fizz Buzz!!' if the number is 15", () => {
      expect(fizzBuzz(15)).toBe("Fizz Buzz!!");
    });

    it("should return 'Fizz Buzz!!' if the number is 30", () => {
      expect(fizzBuzz(30)).toBe("Fizz Buzz!!");
    });
  });

  describe("when the number is not a positive integer", () => {
    it("should throw error if the number is -1", () => {
      expect(() => fizzBuzz(-1)).toThrow(Error);
    });

    it("should throw error if the number is 0", () => {
      expect(() => fizzBuzz(0)).toThrow(Error);
    });

    it("should throw error if the number is 3.1", () => {
      expect(() => fizzBuzz(3.1)).toThrow(Error);
    });
  });
});
