
// Checkpoint A — solution.js
// Personalized task for hashadamina

// 1. Load every order from the database.
// Use the database function imported by your generated file.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Keep orders from Cairo that have been paid.
export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Cairo" && order.status === "paid"
  );
}

// 3. Calculate total revenue.
// Each order contributes its price multiplied by its quantity.
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Describe an order, handling missing IDs.
export async function describeOrder(id) {
  try {
    const order = await findOrder(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

// 5. Convert orders to JSON with only student and item.
export function toJsonLines(orders) {
  const simplified = orders.map(order => ({
    student: order.student,
    item: order.item
  }));

  return JSON.stringify(simplified);
}
