'use strict';
/* global define */

define(function() {
  function generateGUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var random = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c === 'x' ? random : (random&0x7|0x8)).toString(16);
    });
    return uuid;
  }

  return {
    generateGUID: generateGUID
  };
});
