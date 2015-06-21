'use strict';

var mdwIsAuthenticated = require('../lib/passport').isAuthenticated;

module.exports = function(router) {

  router.get('/', mdwIsAuthenticated, function(req, res, next) {
    res.format({
      json: function() {
        res.json(req.user.toObject());
      },
      html: function() {
        res.locals.isAuthenticated = req.isAuthenticated();
        res.locals.user = req.user;
        res.render('index');
      }
    });
  });

  router.get('/explore', function(req, res, next) {
    res.json({categories:
      [
        {
          title: 'Tutores',
          icon: '',
          users: [
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            }
          ]
        },
        {
          title: 'Niñeras',
          icon: '',
          users: [
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            }
          ]
        },
        {
          title: 'Limpieza',
          icon: '',
          users: [
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            },
            {
              id: '213',
              name: 'Mario',
              img: '/img/213.jpg'
            }
          ]
        },
      ]
    });
  });

};
