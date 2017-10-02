'use strict';
/* global _ , define */

define(["../../app", "../model/contact","js/view/list/listView", "js/persistence"],
  function(app, Contact, ListView, Persistence) {

    /**
     * To binding events into the view
     * @type {*[]}
     */
    var bindings = [{
      element: '.contact-add-link',
      event: 'click',
      handler: openAddPopup
    }, {
      element: '.list-panel-all',
      event: 'click',
      handler: showAll
    }];

    /**
     * To initialize this controller
     */
    function init() {
      var contacts = loadContacts();
      ListView.render({
        bindings: bindings,
        model: contacts
      });
    }

    /**
     * To open the view/edit page of the contact
     */
    function openAddPopup() {
      app.router.load('contactEdit');
    }

    /**
     * Render all contacts
     */
    function showAll() {
      var contacts = loadContacts();
      ListView.reRender({ model: contacts, header: "Contacts" });
    }

    /**
     * To load all contacts of the list
     * @param filter
     */
    function loadContacts(filter) {
      var contacts = Persistence.getAllContacts();
      contacts = filterContacts(filter, contacts);
      contacts = organizeContacts(contacts);
      return contacts;
    }

    /**
     * Filter contacts - Used by the search bar
     * @param filter
     * @param contacts
     * @returns {*}
     */
    function filterContacts(filter, contacts) {
      if (filter) {
        contacts = _.filter(contacts, filter);
      }
      return contacts;
    }

    /**
     * To organize contacts group by the First lastter of the first name
     * @param contacts
     * @returns {*}
     */
    function organizeContacts(contacts) {
      contacts.sort(sortFirstLastName);
      contacts = groupByFirstLatter(contacts);
      contacts = mapValuesByLetter(contacts);
      return contacts;
    }

    /**
     * Group by all contacts by the first latter
     * @param contacts
     * @returns {*}
     */
    function groupByFirstLatter(contacts) {
      contacts = _.groupBy(contacts, function(contact) {
        return contact.name.first.charAt(0).toUpperCase();
      });
      return contacts;
    }

    /**
     * To map the values by the first letter {'letter': key, 'list': value}
     * @param contacts
     * @returns {Array}
     */
    function mapValuesByLetter(contacts) {
      return _.toArray(_.mapValues(contacts, function(value, key) {
        return {'letter': key, 'list': value};
      }));
    }

    /**
     * To order by first Name and second Name
     * @param a - {contact}
     * @param b - {contact}
     * @returns {number}
     */
    function sortFirstLastName(a, b) {
      if (a.name.first > b.name.first) {
        return 1;
      } else if (a.name.first === b.name.first && a.name.last >= b.name.last) {
        return 1;
      }
      return -1;
    }

    return {
      init: init
    };
  }
);