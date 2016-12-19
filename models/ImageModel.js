var mongoose = require('mongoose'),
    shortid  = require('shortid');

var ImageSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  Etag          : String,
  Location      : String,
  Key           : String,
  Bucket        : String,
  order         : Number
});

module.exports = mongoose.model('Image', ImageSchema);
