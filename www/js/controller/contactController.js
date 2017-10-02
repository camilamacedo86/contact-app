'use strict';
/* global _ , define */

define(["../../app","../view/contact/contactView", "../model/contact", "js/persistence"],
  function(app, ContactView, Contact, Persistence) {

    var contact = null;

    /**
     * Loading edit mode view - view/contactEdit/contactEditView
     */
    function loadEditView() {
      app.router.load('contactEdit', {id: contact._id });
    }

    /**
     * Binding the link the edit view
     * @type {*[]}
     */
    var bindings = [{element: '.contact-edit-link',
      event: 'click',
      handler: loadEditView
    }];

    /**
     * Find the contact by the id
     * @param query
     * @param contacts
     */
    function findContactByQueryId(query, contacts) {
      if (query && query.id) {
        contact = new Contact(_.find(contacts, {_id: query.id}));
      }
    }

    /**
     * To render the contact view '../view/contact/contactView'
     */
    function toRenderContactView() {
      ContactView.render({
        model: contact,
        bindings: bindings
      });
    }

    /**
     * To initialize this controller
     * @param query {id}
     */
    function init(query) {
      var contacts = Persistence.getAllContacts();
      findContactByQueryId(query, contacts);
      toRenderContactView();
    }

    return {
      init: init
    };
  }
);