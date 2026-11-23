
// Module 02 — JavaScript Functions
// This module covers function declarations, arrow functions,
// default parameters, and functions passed as arguments.

/**
 * Greets a person using their name.
 * Uses a template literal to create the greeting.
 *
 * Example: greet("Ahmed") -> "Hello, Ahmed!"
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Doubles a given number.
 * Uses an arrow function with an implicit return.
 *
 * Example: double(21) -> 42
 */
export const double = (n) => n * 2;

/**
 * Calculates the price after applying a percentage discount.
 * Subtracts the discount amount from the original price.
 *
 * Example: applyDiscount(320, 25) -> 240
 * Example: applyDiscount(200, 10) -> 180
 */
export const applyDiscount = (amount, percent) => {
  return amount - (amount * percent) / 100;
};

/**
 * Formats a price with its currency.
 * Uses "EGP" as the default currency if none is provided.
 *
 * Example: formatPrice(45) -> "45 EGP"
 * Example: formatPrice(45, "USD") -> "45 USD"
 */
export const formatPrice = (amount, currency = "EGP") => {
  return `${amount} ${currency}`;
};

/**
 * Applies the same function twice to a value.
 * The result of the first call becomes the input for the second.
 *
 * Example: applyTwice(double, 5) -> 20
 * Example: applyTwice((n) => n + 10, 5) -> 25
 */
export function applyTwice(fn, value) {
  return fn(fn(value));
}
