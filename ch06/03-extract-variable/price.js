function price(order) {
  // price = base price - quantity discount + shipping
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

console.log(price({ quantity: 3, itemPrice: 100 }));
