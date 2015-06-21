'use strict';

module.exports = function(router) {

  router.get('/', function(req, res) {
    res.format({
      json: function() {
        res.status(400);
      },
      html: function() {
        res.status(400).render('error');
      }
    });
  });

};
