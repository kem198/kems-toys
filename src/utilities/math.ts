/**
 * add two numbers for testing
 *
 * @see https://vitest.dev/guide/
 */
export const sum = (a: number, b: number) => a + b;

/**
 * Checks if a number is positive integer.
 */
export const isPositiveInteger = (num: number): boolean =>
  num > 0 && Number.isInteger(num);
