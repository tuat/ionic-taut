all:
	@echo "make install"

install:
	npm install

	sudo npm install -g ionic
	sudo npm install -g cordova

	ionic plugin add cordova-plugin-whitelist

	cordova plugin add com.ionic.keyboard
	cordova plugin add cordova-plugin-splashscreen

release:
	ionic build --release android

build:
	ionic build

run:
	ionic run

server:
	ionic serve
