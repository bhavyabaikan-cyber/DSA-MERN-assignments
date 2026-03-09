import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Check if payment method is valid
export function validatePaymentMethod(method) {
  if (method === 'card' || method === 'upi' || method === 'cod') {
    return true;
  }
  return false;
}

// Generate random order ID
function generateOrderId() {
  let time = Date.now();
  return 'ORD' + time;
}

// Process payment and place order
export function processPayment(paymentMethod, couponCode = null) {
  // Step 1: Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: 'failed',
      message: 'Invalid payment method'
    };
  }
  
  // Step 2: Get cart details
  let items = getCartItems();
  let subtotal = getCartTotal();
  
  // Step 3: Apply discount if coupon provided
  let discount = 0;
  let total = subtotal;
  
  if (couponCode !== null) {
    let result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }
  
  // Step 4: Reduce stock for all items
  for (let i = 0; i < items.length; i++) {
    reduceStock(items[i].id, items[i].quantity);
  }
  
  // Step 5: Clear cart
  clearCart();
  
  // Step 6: Generate order summary
  let order = {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: total,
    paymentMethod: paymentMethod,
    status: 'success',
    message: 'Order placed successfully'
  };
  
  return order;
}