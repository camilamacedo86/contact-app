'use strict';
/* global define */

define(['js/utils'],
  function(utils) {
    function Contact(values) {
      values = values || {};
      this._id = values['_id'] || utils.generateGUID();
      this.name = values['name'] || {first:"",last:"",tilte:""};
      this.phone = values['phone'] || '';
      this.email = values['email'] || '';
      this.location = values['location'] || {city:""};
      this.picture = values['picture'] || {medium:'',thumbnail:''};
    }

    /**
     * To set the values for the edition and save actions
     * @param inputValues
     */
    Contact.prototype.setValues = function(inputValues) {
      //TODO: Improve this point in order to be dynamic and don't need the switch(ugly solution)
      for (var i = 0, len = inputValues.length; i < len; i++) {
        var item = inputValues[i];
        switch (item.id) {
        case "first": {
          this.name.first = item.value;
          break;
        }
        case "last": {
          this.name.last = item.value;
          break;
        }
        case "title": {
          this.name.title = item.value;
          break;
        }
        case "city": {
          this.location.city = item.value;
          break;
        }
        default: this[item.id] = item.value;
        }
      }
    };

    /**
     * To validate the contact before save and edit it
     * @returns {*}
     */
    Contact.prototype.validate = function() {
      if ( !this.name.first ) {
        return "Inform the first name!";
      }
      if ( !this.name.last ) {
        return "Inform the last name!";
      }
    };

    return Contact;
  }
);