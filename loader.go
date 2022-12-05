package refactoring2

import (
	"encoding/json"
	"log"
	"os"
)

// MustLoadJSON は filename で指定した JSON ファイルを読み込んで out に書き込みます。
// 失敗した場合は panic します。
func MustLoadJSON(filename string, out any) {
	content, err := os.ReadFile(filename)
	if err != nil {
		log.Fatalf("failed to read %s: %v", filename, err)
	}
	if err := json.Unmarshal(content, &out); err != nil {
		log.Fatalf("failed to unmarshal %s: %v", filename, err)
	}
}
