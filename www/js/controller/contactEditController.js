'use strict';
/* global _ , define */

define(["../../app", "../model/contact", "../view/contactEdit/contactEditView", "js/persistence"],
  function(app, Contact, View, Persistence) {
    var contact = null;

    /**
     * To inform if the router if is to edit or create a new contact
     * @type {{isNew: boolean}}
     */
    var state = {
      isNew: false
    };

    /**
     * To binding the events into the view
     * @type {*[]}
     */
    var bindings = [{
      element: '.contact-delete-button',
      event: 'click',
      handler: deleteContact
    }];

    /**
     * To initialize this controller
     * @param query {id}
     */
    function init(query) {
      if (query && query.id ) {
        var contacts = Persistence.getAllContacts();
        contact = new Contact(_.find(contacts, { _id: query.id }));
        state.isNew = false;
      } else {
        contact = new Contact({});
        state.isNew = true;
      }
      View.render({ model: contact, bindings: bindings, state: state, doneCallback: saveContact });
    }

    /**
     * To delete the contact
     */
    function deleteContact() {
      app.f7.actions([[{
        text: 'Delete Contact',
        red: true,
        onClick: function() {
          var contacts = Persistence.getAllContacts();
          _.remove(contacts, { _id: contact._id });
          Persistence.setAllContacts(contacts);
          app.router.load('list'); // reRender main page view
          app.mainView.goBack("../index.html", false);
          app.f7.closeModal();
        }
      }],
      [{
        text: 'Cancel',
        bold: true
      }]]);
    }

    /**
     * Render contact list view
     */
    function renderContactListView() {
      app.router.load('list');
    }

    /**
     * To save the contact
     * @param inputValues
     */
    function saveContact(inputValues) {
      contact.setValues(inputValues);
      var validation = contact.validate();
      if (validation) {
        app.f7.alert(validation);
        return;
      }
      var contacts = Persistence.getAllContacts();
      if (!state.isNew) {
        _.remove(contacts, { _id: contact._id });
      }
      contacts.push(contact);
      Persistence.setAllContacts(contacts);
      renderContactListView();
      closePage();
    }

    /**
     * To close the edit/view page
     */
    function closePage() {
      if (!state.isNew) {
        app.router.load('contact', {id: contact._id});
      } else {
        app.mainView.loadPage('www/html/contact.html?id=' + contact._id, false);
      }
      app.f7.closeModal();
    }

    return {
      init: init
    };
  }
);