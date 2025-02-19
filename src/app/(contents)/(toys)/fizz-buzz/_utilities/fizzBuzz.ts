import { isPositiveInteger } from "@/utilities/math";

/**
 * Checks if a number is divisible by 3.
 */
const isFizz = (num: number): boolean => num % 3 === 0;

/**
 * Checks if a number is divisible by 5.
 */
const isBuzz = (num: number): boolean => num % 5 === 0;

/**
 * Determines the FizzBuzz result for a given number.
 */
const fizzBuzz = (num: number): string => {
  if (!isPositiveInteger(num)) {
    throw new Error("The number must be a positive integer.");
  }

  if (isFizz(num) && isBuzz(num)) return "Fizz Buzz!!";
  if (isFizz(num)) return "Fizz!";
  if (isBuzz(num)) return "Buzz!";

  return num.toString();
};

export { fizzBuzz };
