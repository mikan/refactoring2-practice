function getRating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

console.log(getRating({ numberOfLateDeliveries: 10 }));
