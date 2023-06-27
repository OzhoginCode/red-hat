install:
	npm ci
	make build

lint:
	npx eslint .

lintfix:
	npx eslint . --fix

play:
	node bin/red-hat.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

build:
	node ./src/create-top-list.js