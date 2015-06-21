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
              id: '123',
              name: 'Mario García',
              img: '/img/Mario.png'
            },
            {
              id: '234',
              name: 'Angel Lira',
              img: '/img/Angel.png'
            },
            {
              id: '345',
              name: 'Victor Haghen',
              img: '/img/Vic.png'
            }
          ]
        },
        {
          title: 'Niñeras',
          icon: '',
          users: [
            {
              id: '456',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            },
            {
              id: '567',
              name: 'Day Tellez',
              img: '/img/Day.png'
            },
            {
              id: '678',
              name: 'Areli Contreras',
              img: '/img/Aree.jpg'
            }
          ]
        },
        {
          title: 'Eventos',
          icon: '',
          users: [
            {
              id: '456',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            },
            {
              id: '123',
              name: 'Mario',
              img: '/img/Mario.jpg'
            },
            {
              id: '567',
              name: 'Day Tellez',
              img: '/img/Day.png'
            }
          ]
        },
      ]
    });
  });

};
