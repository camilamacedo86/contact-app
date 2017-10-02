'use strict';
/* global define, localStorage */

define(function() {

  /**
   * Load all contacts into JSON format from the data saved into the local storage
   */
  function getAllContacts() {
    return JSON.parse(localStorage.getItem("localContact"));
  }

  /**
   * To set all contacts
   * @param contacts
   */
  function setAllContacts(contacts) {
    localStorage.setItem("localContact", JSON.stringify(contacts));
  }

  /**
   * Remove all data of the local database
   */
  function clearLocalDatabase() {
    localStorage.clear();
  }

  return {
    getAllContacts: getAllContacts,
    setAllContacts: setAllContacts,
    clearLocalDatabase: clearLocalDatabase
  };
});
