// Main modules used by Angular in this app
var foodlyApp = angular.module('foodlyApp', [
    'foodlyAppControllers'
]);

// Angular configuring all routes on app
foodlyApp.config(['$routeProvider',
                  function($routeProvider) {
                      $routeProvider.
                      when('/restaurants', {
                          templateUrl: 'partials/restaurantlist.html',
                          controller: 'RestaurantListCtrl'
                      }).
                      when('/restaurants/:restaurantid', {
                          templateUrl: 'partials/restaurantdetail.html',
                          controller: 'RestaurantDetailCtrl'
                      }).
                      when('/home', {
                          templateUrl: 'partials/map.html',
                          controller: 'MapCtrl'
                      }).
                      otherwise({
                          redirectTo: '/home'
                      });
                  }]);