var Exports = module.exports = {},
    AWS     = require('aws-sdk'),
    Product = require('../models/ProductModel'),
    Image   = require('../models/ImageModel'),
    keys    = require('../config/keys.js').amazon;

AWS.config.update({
    accessKeyId: keys.amazonAccess
  , secretAccessKey: keys.amazonSecret
  , region: keys.amazonRegion
});

var s3 = new AWS.S3();

Exports.save = function (req, res) {
  // if (req.user || req.user.email) return res.status(401).send('Please log in first');

  buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  // var bucketName = keys.amazonBucket + '/' + req.user && req.user.email;
  var bucketName = keys.amazonBucket + '/jose@jose.com';
  var params = {
      Bucket: bucketName
    , Key: req.body.imageName
    , Body: buf
    , ContentType: 'image/' + req.body.imageExtension
    , ACL: 'public-read'
  };
  s3.upload(params, function (err, data) {
    if (err) return res.status(500).send(err);

    var newImage = new Image(data);
    newImage.save(function (err, result) {
      if (err) return res.status(500).send(err);
      return res.json(result);
    })
  });
};
