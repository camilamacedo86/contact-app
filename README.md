# Contact List App

It is a sample cordova client application built using JavaScript/Node.js<sup>1</sup>, Framework7<sup>2</sup>, Handlebars<sup>3</sup> `{{myValue}} for the templates, RequireJS<sup>4</sup> to loading async the modules. Also,
it was designed to connect and use the REST service API user-api<sup>5</sup>.

## Platforms Supported

- iOS
- Android

## Pre-requisites

To get started, you'll need to have the following requirements installed

- Git
- Node.js<sup>1</sup>
- npm
- Grunt-cli<sup>6</sup>
- Cordova<sup>7</sup>

## Getting started

	$git clone <this repo>
	$npm install
	$npm install grunt-cli -g  # To install the grunt-cli
	$npm install -g cordova    # To install cordova
	$cordova plataform add ios # OR cordova plataform add <android> to run/emulate it for android
	$cordova build             # To build all added platforms
	$cordova run ios           # OR cordova run android

## Documentation

### Wireframes

See https://github.com/camilamacedo86/contact-app/wireframes.pdf

### Screenshots

Check the screenshots of this application working into : https://github.com/camilamacedo86/contact-app/docs/screenshots/


## Running tests

```
$grunt test
```

## Debugging

### iOS

$cordova plataform add ios
$cordova emulate ios

Enable the remote debug with Safari. See https://dev4devs.com/2017/10/01/nodejs-cordova-how-to-debug-ios-emulations/ to know how to do it.

### Android

$cordova plataform add android
$cordova emulate android

Enable to remote debug into Chrome. See https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3 to get further information.
Also, see : https://dev4devs.com/2016/08/31/android-how-to-setup-remote-debugging-for-chrome-on-android-devices-with-a-mac/

## Commands

| Command       | Description                                                                 |
| ------------- |:---------------------------------------------------------------------------:|
| grunt test    | Check style and run all tests                                               |


## App Structure


	docs           # docs - wireframe.pdf
	www
	  css          # All css files.
	  html         # html pages
	  img          # images used into the project
	  js
	    controller # controller of the routers
	    model      # Model of objects (E.g contact )
	    view       # views definitions with handlebars
	    persistence.js  # centralize the implementation to persist/manage the data
	    router.js  # initialize pages and load the controllers
	    utils.js   # utilities functions for the app
	  app.js       # Startup configuration
	  tests        # To add the tests of this application
	    users.js   # To mock up data for local dev and tests


**Notes:**

* Router.init(): To initialize router. It is using the Framework7 page events. See http://framework7.io/docs/pages.html#page-events
* Router.load(`<NameController>, <query>`): It will loading the controller informed. The <query> parameter is optional and is used in order to inform data for the controller as for example the id of the contact that need be loaded to render the page.


## Links

- <sup>1</sup>See https://nodejs.org/en/
- <sup>2</sup>See https://framework7.io/
- <sup>3</sup>See http://handlebarsjs.com/
- <sup>4</sup>See http://requirejs.org/
- <sup>5</sup>See https://github.com/camilamacedo86/users-api
- <sup>6</sup>See https://www.npmjs.com/package/grunt-cli for installation guide
- <sup>7</sup>See https://cordova.apache.org/ for installation guide


**Note:**
The layout of this application was based on into the demo templates of Framework7<sup>2</sup>
