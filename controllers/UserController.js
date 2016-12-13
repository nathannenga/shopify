var Exports = module.exports = {},
    User    = require('../models/UserModel');

Exports.saveExtended = function (req, res) {
  // User.findById(req.user._id, function (err, user) {
  //   if (err) return res.status(404).send(err);
  //   user
  // })

  User.findByIdAndUpdate(req.user._id, { $set: req.body}, { new: true }, function (err, user) {
    if (err) return res.status(404).send(err);
    return res.json(user);
  });
};
