import { getAllProducts, searchProducts, getProductsByCategory } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');

// 1. Browse all products
console.log('All Products:');
let all = getAllProducts();
for (let i = 0; i < all.length; i++) {
  console.log(all[i]);
}

// 2. Filter by category
console.log('\n Electronics Only:');
let electronics = getProductsByCategory('electronics');
for (let i = 0; i < electronics.length; i++) {
  console.log(electronics[i]);
}

// 3. Search products
console.log('\n Search "phone":');
let searchResult = searchProducts('phone');
for (let i = 0; i < searchResult.length; i++) {
  console.log(searchResult[i]);
}

// 4. Add items to cart
console.log('\n Adding to Cart:');
console.log(addToCart(1, 1)); // Add Laptop
console.log(addToCart(3, 2)); // Add 2 Headphones

// 5. View cart
console.log('\n Cart Items:');
let cart = getCartItems();
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}

// 6. View total
console.log('\n Cart Total: ₹' + getCartTotal());

// 7. Update quantity
console.log('\n Updating Headphones quantity to 1:');
console.log(updateQuantity(3, 1));

// 8. Remove item
console.log('\n Removing Laptop:');
console.log(removeFromCart(1));

// 9. View updated cart
console.log('\n Updated Cart:');
let updatedCart = getCartItems();
for (let i = 0; i < updatedCart.length; i++) {
  console.log(updatedCart[i]);
}

// 10. Place order with coupon
console.log('\n Placing Order with WELCOME10 coupon:');
let order = processPayment('upi', 'WELCOME10');
console.log(order);