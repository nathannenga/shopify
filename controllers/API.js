var User          = require('./UserController'),
    Product       = require('./ProductController'),
    Image         = require('./ImageController'),
    App           = require('./AppController');

module.exports = function (app) {
  app.put('/api/user-info', User.saveExtended);

  app.put('/api/product/:productId', Product.edit);
  app.post('/api/product', Product.save);
  app.post('/api/new-image', Image.save);

  app.get('/api/user-products', Product.getUserProducts);
  app.get('/api/product/:productId', Product.getProduct);

  // APP
  app.get('/api/app/products', App.getProducts);
};
