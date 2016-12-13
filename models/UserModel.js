var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    shortid  = require('shortid');

var UserSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  email         : String,
  password      : String,
  firstName     : String,
  lastName      : String,
  address       : {
    streetAddress : String,
    number        : String,
    city          : String,
    zip           : Number,
    country       : String,
    state         : String
  },
  phoneNumber   : Number,
  websiteUrl    : String,
  created_date  : { type: Date, default: Date.now },
  storeName     : String
});

// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
