'use strict';
/* global define, Dom7 */
define(['../../../app', '../../model/contact', 'hbs!js/view/contactEdit/contactEdit'],
  function(app, Contact, editTemplate) {
    var $ = Dom7;

    function render(params) {
      var template = editTemplate({ model: params.model, state: params.state });
      app.f7.popup(template);
      bindEvents(params.bindings);
      bindSaveEvent(params.doneCallback);
    }

    function bindEvents(bindings) {
      for (var i in bindings) {
        if (bindings.hasOwnProperty(i)) {
          $(bindings[i].element).on(bindings[i].event, bindings[i].handler);
        }
      }
    }

    function bindSaveEvent(doneCallback) {
      $('.contact-save-link').on('click', function() {
        var inputValues = $('.contact-edit-form input');
        doneCallback(inputValues);
      });
    }

    return {
      render: render
    };
  }
);