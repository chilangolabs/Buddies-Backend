'use strict';

var twilio = require('twilio');

var twilioLib = function() {
  var client;
  return {
    initialize: function(sid, authkey) {
      client = twilio(sid, authkey);
    },
    sendCode: function(req, res, next) {
      var code = Date.now().toString().substring(8, 12);

      client.messages.create({
        to: req.user.phoneNumber,
        from: '+16674014381',
        body: 'Ingrese el siguiente código de verificación en Buddies: ' + code
      }, function(err, message) {
        if (err) {
          console.error(err);
          return res.sendStatus(500);
        }
        req.user.smsCode = code;
        req.user.save(function(err, user) {
          if (err) {
            return res.sendStatus(500);
          }
          console.log('SMS enviado correctamente');
          res.sendStatus(200);
        });
      });
    }
  };
};

module.exports = new twilioLib();
