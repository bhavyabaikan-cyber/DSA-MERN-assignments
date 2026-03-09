// Product database (simulated)
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Find product by ID
export function getProductById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null; // not found
}

// Return all products
export function getAllProducts() {
  return products;
}

// Filter products by category
export function getProductsByCategory(category) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      result.push(products[i]);
    }
  }
  return result;
}

// Search products by name (case-insensitive)
export function searchProducts(query) {
  let lowerQuery = query.toLowerCase();
  let result = [];
  for (let i = 0; i < products.length; i++) {
    let lowerName = products[i].name.toLowerCase();
    if (lowerName.includes(lowerQuery)) {
      result.push(products[i]);
    }
  }
  return result;
}

// Check if product has enough stock
export function checkStock(productId, quantity) {
  let product = getProductById(productId);
  if (product === null) {
    return false;
  }
  if (product.stock >= quantity) {
    return true;
  }
  return false;
}

// Reduce stock after purchase
export function reduceStock(productId, quantity) {
  let product = getProductById(productId);
  if (product !== null) {
    product.stock = product.stock - quantity;
  }
}