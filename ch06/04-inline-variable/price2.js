function isBasePriceMoreThan1k(anOrder) {
  return anOrder.basePrice > 1000;
}

console.log(isBasePriceMoreThan1k({ basePrice: 1001 }));
