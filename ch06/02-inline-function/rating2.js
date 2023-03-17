function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

console.log(getRating({ numberOfLateDeliveries: 10 }));
