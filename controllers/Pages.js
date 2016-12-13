var Routes      = module.exports = {};
    // UserCtrl    = require('./UserController');

Routes.index = function (req, res) {
  if (req.user && req.user._id) return res.redirect('/dashboard');
  return res.render('index'); //res.redirect('/home');
};

Routes.home = function (req, res) {
  // TODO: Consider deprecating this route
  return res.render('index');
};
