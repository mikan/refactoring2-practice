lint:
	npm run fmt:check
	npm run lint

fmt:
	npm run fmt
	npm run lint:fix

.PHONY: test
test:
	npm run test

ch01s01:
	cd ch01/01-the-starting-point && node statement.js
ch01s01go:
	cd ch01/01-the-starting-point && go run statement.go
ch01s04:
	cd ch01/04-decomposing-the-statement-function && node statement.js
ch01s06:
	cd ch01/06-splitting-the-phases && node statement.js
	open ch01/06-splitting-the-phases/result.html
ch01s08:
	cd ch01/08-reorganizing-the-calculations-by-type && node statement.js
ch06s01:
	node ch06/01-extract-function/owing.js
ch06s01v2:
	node ch06/01-extract-function/owing2.js
ch06s01v3:
	node ch06/01-extract-function/owing3.js
ch06s01v4:
	node ch06/01-extract-function/owing4.js
ch06s01v5:
	node ch06/01-extract-function/owing5.js
ch06s01v6:
	node ch06/01-extract-function/owing6.js
ch06s02:
	node ch06/02-inline-function/rating.js
ch06s02v2:
	node ch06/02-inline-function/rating2.js
ch06s02v3:
	node ch06/02-inline-function/rating3.js
ch06s02v4:
	node ch06/02-inline-function/rating4.js
ch06s02v5:
	node ch06/02-inline-function/reportLines.js
ch06s02v6:
	node ch06/02-inline-function/reportLines2.js
ch06s03:
	node ch06/03-extract-variable/price.js
