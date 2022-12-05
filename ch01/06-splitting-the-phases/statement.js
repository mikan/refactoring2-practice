import createStatementData from "./createStatementData.js";

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

import fs from "fs";

const plays = JSON.parse(fs.readFileSync("../01-the-starting-point/plays.json", "utf-8"));
const invoices = JSON.parse(fs.readFileSync("../01-the-starting-point/invoices.json", "utf-8"));

for (const invoice of invoices) {
  console.log(statement(invoice, plays));
}
