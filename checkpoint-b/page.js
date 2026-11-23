
// Checkpoint B — Campus Store
// Personalized task for hashadamina

// Import the product data from items.js.
// Do not edit or copy the items in items.js.
import { items } from "./items.js";

/**
 * 1. renderItems(list)
 *
 * Displays the given products inside #list.
 * Replaces any products that were displayed before.
 *
 * @param {Array} list - Array of product objects
 * @returns {void}
 */
export function renderItems(list) {
  // Find the list element.
  const productList = document.querySelector("#list");

  // Clear previously displayed products.
  productList.innerHTML = "";

  // Create one list item for each product.
  list.forEach(item => {
    const li = document.createElement("li");

    // Add the required product class.
    li.classList.add("product");

    // Display the product name and price.
    li.textContent = `${item.name} - ${item.price} EGP`;

    // Add the product to the list.
    productList.append(li);
  });
}

/**
 * 2. matching()
 *
 * Returns only products that are in stock.
 *
 * @returns {Array} Products where inStock is true
 */
export function matching() {
  return items.filter(item => item.inStock === true);
}

/**
 * 3. start()
 *
 * Displays all products when the page starts.
 * Shows only in-stock products when the button is clicked.
 *
 * @returns {void}
 */
export function start() {
  // Display all products initially.
  renderItems(items);

  // Find the filter button.
  const filterButton = document.querySelector("#filter-button");

  // Attach a click listener to filter the products.
  filterButton.addEventListener("click", () => {
    renderItems(matching());
  });
}

// Start the application when the HTML page finishes loading.
// Avoid automatically initializing it in the test environment.
if (
  typeof document !== "undefined" &&
  typeof window !== "undefined" &&
  !navigator.userAgent.includes("jsdom")
) {
  document.addEventListener("DOMContentLoaded", start);
}
