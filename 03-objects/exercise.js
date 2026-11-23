
// Module 03 — JavaScript Objects
// This module covers object properties, bracket notation,
// nested objects, destructuring, and the spread operator.

/**
 * Gets the name of a product.
 * Uses dot notation to access the name property.
 *
 * Example: productName({ name: "Notebook" }) -> "Notebook"
 */
export function productName(product) {
  return product.name;
}

/**
 * Reads a specific property from a product object.
 * Uses bracket notation because the property name
 * is provided as a variable.
 *
 * Example: getField(product, "price") -> 45
 * Example: getField(product, "name") -> "Notebook"
 * Returns undefined if the property does not exist.
 */
export function getField(product, field) {
  return product[field];
}

/**
 * Gets the city from a student's address.
 * Uses dot notation to access a nested object property.
 *
 * Example:
 * studentCity({
 *   name: "Salma",
 *   address: { city: "Cairo", street: "El Tahrir" }
 * }) -> "Cairo"
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * Creates a summary of a product.
 * Uses object destructuring to extract the name and price.
 * Then uses a template literal to build the string.
 *
 * Example:
 * summarize({ name: "Notebook", price: 45 })
 * -> "Notebook costs 45 EGP"
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * Creates a new product object with an updated price.
 * Uses the spread operator to copy all existing properties.
 * The original product remains unchanged.
 *
 * Example:
 * withPrice({ id: 1, name: "Notebook", price: 45 }, 30)
 * -> { id: 1, name: "Notebook", price: 30 }
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}
