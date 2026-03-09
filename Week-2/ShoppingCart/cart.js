import { getProductById, checkStock } from './product.js';

// Cart array to store items
let cartItems = [];

// Add product to cart
export function addToCart(productId, quantity) {
  // Step 1: Get product details
  let product = getProductById(productId);
  
  // Step 2: Check if product exists
  if (product === null) {
    return { error: "Product not found" };
  }
  
  // Step 3: Check stock availability
  if (!checkStock(productId, quantity)) {
    return { error: "Not enough stock" };
  }
  
  // Step 4: Check if product already in cart
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === productId) {
      // Product exists, update quantity
      cartItems[i].quantity = cartItems[i].quantity + quantity;
      return { message: "Quantity updated in cart" };
    }
  }
  
  // Step 5: Add new item to cart
  let newItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity
  };
  cartItems.push(newItem);
  
  return { message: "Product added to cart" };
}

// Remove product from cart
export function removeFromCart(productId) {
  let newCart = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id !== productId) {
      newCart.push(cartItems[i]);
    }
  }
  cartItems = newCart;
  return { message: "Product removed from cart" };
}

// Update quantity of product in cart
export function updateQuantity(productId, newQuantity) {
  // Check stock first
  if (!checkStock(productId, newQuantity)) {
    return { error: "Not enough stock" };
  }
  
  // Find and update
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === productId) {
      cartItems[i].quantity = newQuantity;
      return { message: "Quantity updated" };
    }
  }
  return { error: "Product not in cart" };
}

// Return all cart items with total price per item
export function getCartItems() {
  let result = [];
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let itemTotal = item.price * item.quantity;
    result.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      itemTotal: itemTotal
    });
  }
  return result;
}

// Calculate total price of cart
export function getCartTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + (cartItems[i].price * cartItems[i].quantity);
  }
  return total;
}

// Empty the cart
export function clearCart() {
  cartItems = [];
}