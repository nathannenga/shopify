var Pages    = require('./Pages.js'),
    keys     = require('../config/keys');

module.exports = function (app, passport) {
  app.get('/', Pages.index);

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/dashboard', // redirect to the secure profile section
    failureRedirect : '/fail', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));
};
