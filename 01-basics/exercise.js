
// Module 01 — JavaScript Basics
// This module covers data types, template literals,
// comparisons, and conditional statements.

/**
 * Describes the value and its JavaScript data type.
 * Uses typeof to identify the type.
 *
 * Example: describeValue(45) -> "45 is a number"
 * Example: describeValue("Pen") -> "Pen is a string"
 */
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

/**
 * Creates a price label for a product.
 * Uses a template literal to combine the product name and price.
 *
 * Example: priceLabel("Notebook", 45) -> "Notebook costs 45 EGP"
 */
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

/**
 * Checks whether a product costs more than 100 EGP.
 * Returns true if the amount is greater than 100,
 * otherwise returns false.
 *
 * Example: isExpensive(320) -> true
 * Example: isExpensive(45) -> false
 */
export function isExpensive(amount) {
  return amount > 100;
}

/**
 * Calculates the shipping cost based on the order total.
 * Orders over 500 EGP receive free shipping.
 * Orders of 500 EGP or less have a shipping cost of 50 EGP.
 *
 * Example: shippingCost(600) -> 0
 * Example: shippingCost(500) -> 50
 */
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    // Free shipping for orders above 500 EGP.
    return 0;
  } else {
    // Standard shipping for other orders.
    return 50;
  }
}

/**
 * Displays the stock availability of a product.
 * Returns "Out of stock" when no items remain.
 * Returns "Low stock" when fewer than 10 items remain.
 * Returns "In stock" when 10 or more items are available.
 *
 * Example: stockLabel(0) -> "Out of stock"
 * Example: stockLabel(5) -> "Low stock"
 * Example: stockLabel(15) -> "In stock"
 */
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}
