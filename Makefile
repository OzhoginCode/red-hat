install:
	npm ci

lint:
	npx eslint .

lintfix:
	npx eslint . --fix

play:
	node bin/red-hat.js