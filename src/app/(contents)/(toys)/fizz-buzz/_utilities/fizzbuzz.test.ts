import { describe, expect, it } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzBuzz", () => {
  it("should return `Fizz!` if the number is divisible by 3", () => {
    expect(fizzBuzz(-3)).toBe("Fizz!");
    expect(fizzBuzz(3)).toBe("Fizz!");
    expect(fizzBuzz(6)).toBe("Fizz!");
  });

  it("should return `Buzz!` if the number is divisible by 5", () => {
    expect(fizzBuzz(-5)).toBe("Buzz!");
    expect(fizzBuzz(5)).toBe("Buzz!");
    expect(fizzBuzz(10)).toBe("Buzz!");
  });

  it("should return `Fizz Buzz!!` if the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(-15)).toBe("Fizz Buzz!!");
    expect(fizzBuzz(0)).toBe("Fizz Buzz!!");
    expect(fizzBuzz(15)).toBe("Fizz Buzz!!");
    expect(fizzBuzz(30)).toBe("Fizz Buzz!!");
  });

  it("should return the number as a string if the number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(-1)).toBe("-1");
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(2)).toBe("2");
  });
});
