/**
 * Checks if a number is divisible by 3.
 */
const isFizz = (num: number): boolean => {
  return num % 3 === 0;
};

/**
 * Checks if a number is divisible by 5.
 */
const isBuzz = (num: number): boolean => {
  return num % 5 === 0;
};

/**
 * Checks if a number is positive integer.
 */
const isPositiveInteger = (num: number): boolean => {
  return num > 0 && Number.isInteger(num);
};

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
