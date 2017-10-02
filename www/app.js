/* global define */

require.config({
  paths: {
      handlebars: "css/lib/handlebars",
      text: "css/lib/text",
      hbs: "css/lib/hbs"
  },
  shim: {
      handlebars: {
          exports: "Handlebars"
      }
  }
});

/**
 * To add values into the Local Storage database in order to test
 * this application without the need of call the REST Service
 * @param TestUtils
 * @param Contact
 */
function createFakeLocalStorageDatabase(TestUtils, Contact, Persistence) {
  Persistence.clearLocalDatabase();
  var contacts = [];
  TestUtils.getFakeUsers().forEach(item => {
    "use strict";
    var newItem = new Contact(item);
    contacts.push(newItem);
  });
  Persistence.setAllContacts(contacts);
}

/**
 * To initialize the application
 */
define('app', ['js/router', 'js/utils', 'js/model/contact', './test/users.js', 'js/persistence'],
  function(Router, Utils, Contact, TestUtils, Persistence) {
    //TODO: The create Fake Local Storage should be just called if is has a setup for it
    createFakeLocalStorageDatabase(TestUtils, Contact, Persistence);
    Router.init();
    var f7 = new Framework7({
      modalTitle: 'Alert!',
      swipePanel: 'left',
      animateNavBackIcon: true
    });
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: true
    });
    return {
      f7: f7,
      mainView: mainView,
      router: Router,
      utils: Utils
    };
  }
);
