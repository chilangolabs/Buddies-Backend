'use strict';

var twilio = require('twilio');

var twilioLib = function() {
  var client;
  return {
    initialize: function(sid, authkey) {
      client = twilio(sid, authkey);
    },
    sendCode: function(msisdn) {
      var code = Date.now().toString().substring(8, 12);

      client.messages.create({
        to: msisdn,
        from: '+16674014381',
        body: 'Ingrese el siguiente código de verificación en Buddies: ' + code
      }, function(err, message) {
        if (err) {
          console.error(err);
        }

        console.log('SMS enviado correctamente');
      });
    }
  };
};

module.exports = new twilioLib();
