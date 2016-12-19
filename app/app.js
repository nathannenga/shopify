angular.module('Shopify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('products', {
        url: '/products',
        resolve: {
          userProducts: function (apiService, $state) {
            return apiService.getUserProducts()
            .then(function (response) {
              if (!response.data || !response.data.length) {
                $state.go('products-welcome');
              };
              return response.data;
            })
            .catch(function (err) {
              console.error(err);
              return null;
            })
          }
        },
        templateUrl: '/templates/products.html',
        controller: 'AdminProductsController'
      })
      .state('edit-product', {
        url: '/product/:productId',
        resolve: {
          editableProduct: function (apiService, $stateParams) {
            return apiService.getEditableProduct($stateParams.productId)
            .then(function (response) {
              return response.data;
            })
            .catch(function (err) {
              console.error(err);
              return null;
            })
          }
        },
        templateUrl: '/templates/products.edit.html',
        controller: 'EditProductController'
      })
      .state('new-products', {
        url: '/products/new',
        resolve: {
          editableProduct:  function() {
            return null;
         }
        },
        templateUrl: '/templates/products.edit.html',
        controller: 'EditProductController'
      })
      .state('products-welcome', {
        url: '/products/welcome',
        templateUrl: '/templates/products.placeholder.html'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: '/templates/orders.html'
      })
});
