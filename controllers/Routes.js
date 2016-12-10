var Pages    = require('./Pages.js'),
    UserCtrl = require('./UserController'),
    keys     = require('../config/keys');

module.exports = function (app, passport) {
  app.get('/', Pages.index);
};
