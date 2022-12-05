package main

import (
	"fmt"
	"math"

	"github.com/mikan/refactoring2-practice"
)

func statement(invoice Invoice, plays map[string]Play) string {
	totalAmount := 0.0
	volumeCredits := 0.0
	result := fmt.Sprintf("Statement for %s\n", invoice.Customer)
	format := func(s float64) string {
		return fmt.Sprintf("$%.2f", s)
	}
	for _, perf := range invoice.Performances {
		play := plays[perf.PlayID]
		thisAmount := 0.0
		switch play.Type {
		case "tragedy":
			thisAmount = 40000
			if perf.Audience > 30 {
				thisAmount += float64(1000 * (perf.Audience - 30))
			}
		case "comedy":
			thisAmount = 30000
			if perf.Audience > 20 {
				thisAmount += float64(10000 + 500*(perf.Audience-20))
			}
			thisAmount += float64(300 * perf.Audience)
		default:
			panic("Unknown type:" + play.Type)
		}
		// ボリューム特典のポイントを加算
		volumeCredits += math.Max(float64(perf.Audience-30), 0)
		// 喜劇のときは 10 人につき、さらにポイントを加算
		if play.Type == "comedy" {
			volumeCredits += math.Floor(float64(perf.Audience / 5))
		}
		// 注文の内訳を出力
		result += fmt.Sprintf("  %s: %s (%d seats)\n", play.Name, format(thisAmount/100), perf.Audience)
		totalAmount += thisAmount
	}
	result += fmt.Sprintf("Amount owed is %s\n", format(totalAmount/100))
	result += fmt.Sprintf("You earned %.0f credits\n", volumeCredits)
	return result
}

// Invoice は invoices.json の各要素のデータ形式を定義します。
type Invoice struct {
	Customer     string `json:"customer"`
	Performances []struct {
		PlayID   string `json:"playID"`
		Audience int    `json:"audience"`
	} `json:"performances"`
}

// Play は plays.json の各要素のデータ形式を定義します。
type Play struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

func main() {
	var invoices []Invoice
	refactoring2.MustLoadJSON("invoices.json", &invoices)
	var plays map[string]Play
	refactoring2.MustLoadJSON("plays.json", &plays)
	for _, invoice := range invoices {
		fmt.Println(statement(invoice, plays))
	}
}
