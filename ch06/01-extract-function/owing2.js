function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

function printBanner() {
  console.log("-----");
}

function calculateOutstanding() {
  return 1;
}

printOwing({ customer: "mikan" });
