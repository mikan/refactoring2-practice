import { ClockWrapper } from "./clock-wrapper.js";

function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // 未払いの料金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録 (record due date)
  const today = ClockWrapper.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // 明細の印字 (print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

printOwing({ customer: "mikan", orders: [{ amount: 1 }] });
