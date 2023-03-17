function isBasePriceMoreThan1k(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

console.log(isBasePriceMoreThan1k({ basePrice: 1001 }));
