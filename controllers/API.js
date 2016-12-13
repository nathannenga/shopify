var User          = require('./UserController');

module.exports = function (app) {
  app.put('/api/user-info', User.saveExtended);
};
