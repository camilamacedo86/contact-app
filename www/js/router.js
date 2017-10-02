'use strict';
/* global define, document, Dom7 */
define(
  function() {
    var $ = Dom7;

    /**
     * To initialize the controller and inform the query paramaters
     */
    function init() {
      $(document).on('pageBeforeInit', event => {
        var page = event.detail.page;
        loadController(page.name, page.query);
      });
    }

    /**
     * To load the controller into the path 'js/controller/<controllerName>Controller'
     * @param controllerName - ( Eg for the listController the will be "list" )
     * @param query - ( data info used to render the controller E.g id paramater or model object )
     */
    function loadController(controllerName, query) {
      require(['js/controller/' + controllerName + 'Controller'], controller => {
        controller.init(query);
      });
    }

    return {
      init: init,
      load: loadController
    };
  }
);