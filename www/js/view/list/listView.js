'use strict';
/* global Dom7, define */

define(['hbs!js/view/list/contactListItem'],
  function(template) {
    var $ = Dom7;

    function render(params) {
      $('.contacts-list ul').html(template(params.model));
      $('.searchbar-cancel').click();
      bindEvents(params.bindings);
    }

    function reRender(params) {
      $('.contacts-list ul').html(template(params.model));
      $('.contacts-list-header').text(params.header);
      $('.searchbar-cancel').click();
    }

    function bindEvents(bindings) {
      for (var i in bindings) {
        if (bindings.hasOwnProperty(i)) {
          $(bindings[i].element).on(bindings[i].event, bindings[i].handler);
        }
      }
    }

    return {
      render: render,
      reRender: reRender
    };
  }
);