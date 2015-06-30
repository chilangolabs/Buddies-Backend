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
              id: '5592ef9f6f5ab62900468151',
              name: 'Mario García',
              img: '/img/Mario.png'
            },
            {
              id: '5592efca6f5ab62900468152',
              name: 'Angel Lira',
              img: '/img/Angel.png'
            },
            {
              id: '5592f0196f5ab62900468156',
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
              id: '5592f0086f5ab62900468155',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            },
            {
              id: '5592eff86f5ab62900468154',
              name: 'Day Tellez',
              img: '/img/Day.png'
            },
            {
              id: '5592efe56f5ab62900468153',
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
              id: '5592ef9f6f5ab62900468151',
              name: 'Mario García',
              img: '/img/Mario.png'
            },
            {
              id: '5592eff86f5ab62900468154',
              name: 'Day Tellez',
              img: '/img/Day.png'
            },
            {
              id: '5592f0086f5ab62900468155',
              name: 'Vivis Rosano',
              img: '/img/Vivis.png'
            }
          ]
        },
      ]
    });
  });

};
