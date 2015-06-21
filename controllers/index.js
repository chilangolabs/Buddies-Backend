'use strict';

var mdwIsAuthenticated = require('../lib/passport').isAuthenticated;

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    res.format({
      json: function() {
        res.json(req.user.toObject());
      },
      html: function() {
        //res.locals.isAuthenticated = req.isAuthenticated();
        //res.locals.user = req.user;
        res.render('landing');
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
              id: '5586f7fe4b25b529002023e0',
              name: 'Mario García',
              img: '/img/Mario.png'
            },
            {
              id: '5586f8304b25b529002023e1',
              name: 'Angel Lira',
              img: '/img/Angel.png'
            },
            {
              id: '5586f8454b25b529002023e2',
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
              id: '5586f8784b25b529002023e3',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            },
            {
              id: '5586f88e4b25b529002023e4',
              name: 'Day Tellez',
              img: '/img/Day.png'
            },
            {
              id: '5586f8b64b25b529002023e5',
              name: 'Areli Contreras',
              img: '/img/Aree.png'
            }
          ]
        },
        {
          title: 'Eventos',
          icon: '',
          users: [
            {
              id: '5586f7fe4b25b529002023e0',
              name: 'Mario',
              img: '/img/Mario.png'
            },
            {
              id: '5586f88e4b25b529002023e4',
              name: 'Day Tellez',
              img: '/img/Day.png'
            },
            {
              id: '5586f8784b25b529002023e3',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            }
          ]
        },
      ]
    });
  });

};
