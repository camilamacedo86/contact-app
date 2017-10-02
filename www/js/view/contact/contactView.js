'use strict';
/* global define */
define(['../../model/contact', 'hbs!js/view/contact/contact'],
  function(Contact, viewTemplate) {
    var $ = Dom7; //eslint-disable-line no-undef

    function render(params) {
      $('.contact-page').html(viewTemplate({ model: params.model }));
      bindEvents(params.bindings);
    }

    function bindEvents(bindings) {
      for (var i in bindings) {
        if (bindings.hasOwnProperty(i)) {
          $(bindings[i].element).on(bindings[i].event, bindings[i].handler);
        }
      }
    }

    return {
      render: render
    };
  }
);