
// 06-modules — discounts.js
//
// This module exports a discount function and a sale name.

/**
 * Returns half the original price.
 * halfPrice(320) -> 160
 * halfPrice(45) -> 22.5
 *
 * @param {number} amount
 * @returns {number}
 */
export function halfPrice(amount) {
  return amount / 2;
}

/**
 * The name of the current sale.
 * Exported as the default value of this module.
 */
export default "Winter sale";
