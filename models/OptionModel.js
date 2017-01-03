var mongoose = require('mongoose'),
    shortid  = require('shortid');

var OptionSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  product       : { type: String, ref: 'Product' },
  name          : String,
  values        : [String],
  variants      : [{ type: String, ref: 'Variant' }]
});

module.exports = mongoose.model('Option', OptionSchema);
