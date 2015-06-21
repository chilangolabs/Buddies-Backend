'use strict';

var twilio = require('twilio');

var twilioLib = function() {
  var client;
  return {
    initialize: function(sid, authkey) {
      client = twilio(sid, authkey);
    },
    sendCode: function() {
      var code = 0; // Todo
      // 
      return code;
    }
  };
};

module.exports = new twilioLib();
