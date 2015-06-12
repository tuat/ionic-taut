all:
	@echo "make install"

install:
	npm install

	sudo npm install -g ionic
	sudo npm install -g cordova

	ionic plugin add cordova-plugin-whitelist

	cordova plugin add com.ionic.keyboard
	cordova plugin add cordova-plugin-splashscreen
	cordova plugin add cordova-plugin-inappbrowser

release:
	ionic build --release android

build:
	ionic build

run:
	node_modules/.bin/gulp remove-proxy
	ionic run

server:
	node_modules/.bin/gulp add-proxy
	ionic serve
