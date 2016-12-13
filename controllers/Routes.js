var Routes   = {},
    Pages    = require('./Pages.js'),
    keys     = require('../config/keys');

module.exports = function (app, passport) {
  app.get('/', Pages.index);
  app.get('/get-started', Routes.isAuth, Pages.getStarted);
  // app.get('/dashboard', Pages.dashboard);

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/get-started', // redirect to the secure profile section
    failureRedirect : '/fail', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));
};

Routes.isAuth = function (req, res, next) {
  if (req.user) next();
  else res.redirect('/');
};
