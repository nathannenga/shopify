var Routes      = module.exports = {};
    // UserCtrl    = require('./UserController');

Routes.index = function (req, res) {
  if (req.user && req.user._id) return res.redirect('/get-started');
  return res.render('index'); //res.redirect('/home');
};

Routes.home = function (req, res) {
  // TODO: Consider deprecating this route
  return res.render('index');
};

Routes.getStarted = function (req, res) {
  return res.render('get-started');
};

Routes.admin = function (req, res) {
  return res.render('admin');
};
