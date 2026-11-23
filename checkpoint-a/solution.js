
// Checkpoint A — Solution
// Personalized task for hashadamina
//
// Check your work with: npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. Load every order from the database.
 *
 * @returns {Promise<Array>} all orders
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * 2. Keep only orders from Cairo with paid status.
 *
 * @param {Array} orders
 * @returns {Array} matching orders
 */
export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Cairo" && order.status === "paid"
  );
}

/**
 * 3. Calculate total revenue.
 * Revenue = price multiplied by quantity.
 *
 * @param {Array} orders
 * @returns {number} total revenue in EGP
 */
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

/**
 * 4. Describe an order by its ID.
 * If the order does not exist, return a not-found message.
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

/**
 * 5. Convert orders into JSON text containing
 * only the student and item fields.
 *
 * @param {Array} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const simplified = orders.map(order => ({
    student: order.student,
    item: order.item
  }));

  return JSON.stringify(simplified);
}
