// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Validate coupon code
export function validateCoupon(couponCode, cartTotal, cartItems) {
  // Step 1: Check if coupon exists
  let coupon = coupons[couponCode];
  if (coupon === undefined) {
    return { valid: false, message: "Invalid coupon code" };
  }
  
  // Step 2: Check minimum amount
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Cart total below minimum amount" };
  }
  
  // Step 3: Check category requirement (if any)
  if (coupon.category !== undefined) {
    let hasCategoryItem = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].category === coupon.category) {
        hasCategoryItem = true;
        break;
      }
    }
    if (!hasCategoryItem) {
      return { valid: false, message: "No eligible items for this coupon" };
    }
  }
  
  return { valid: true, message: "Coupon applied successfully" };
}

// Calculate discount amount
export function calculateDiscount(couponCode, cartTotal) {
  let coupon = coupons[couponCode];
  
  if (coupon.type === 'percentage') {
    // Calculate percentage discount
    let discount = (cartTotal * coupon.value) / 100;
    return discount;
  } else if (coupon.type === 'flat') {
    // Return flat discount
    return coupon.value;
  }
  
  return 0;
}

// Apply discount and return final amount
export function applyDiscount(cartTotal, couponCode, cartItems) {
  // Step 1: Validate coupon
  let validation = validateCoupon(couponCode, cartTotal, cartItems);
  
  // Step 2: If invalid, return original total
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }
  
  // Step 3: Calculate discount
  let discountAmount = calculateDiscount(couponCode, cartTotal);
  
  // Step 4: Calculate final total
  let finalTotal = cartTotal - discountAmount;
  
  return {
    originalTotal: cartTotal,
    discount: discountAmount,
    finalTotal: finalTotal,
    message: validation.message
  };
}