lint:
	npm run fmt:check
	npm run lint
fmt:
	npm run fmt
	npm run lint:fix
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
