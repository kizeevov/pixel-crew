.PHONY: client

client-build:
	cd client; yarn build

client-browser:
	cd client; yarn start