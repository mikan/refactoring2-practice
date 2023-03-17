import { ClockWrapper } from "./clockWrapper.js";

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払いの料金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録 (record due date)
  const today = ClockWrapper.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetails();

  function printDetails() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

printOwing({ customer: "mikan", orders: [{ amount: 1 }] });
