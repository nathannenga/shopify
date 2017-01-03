var mongoose = require('mongoose'),
    shortid  = require('shortid');

var ProductSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  owner         : { type: String, ref: 'User' },
  title         : String,
  description   : String,
  images        : [{ type: String, ref: 'Image' }],
  price         : Number,
  originalPrice : Number,
  sku           : String,
  barcode       : String,
  quantity      : Number
});

module.exports = mongoose.model('Product', ProductSchema);
