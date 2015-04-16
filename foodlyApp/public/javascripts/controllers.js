// Setting Angular App controllers
var foodlyAppControllers = angular.module('foodlyAppControllers', []);

// Controller for Restaurant List
foodlyAppControllers.controller('RestaurantListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/restaurantsJSON.json').success(function(data) {
            $scope.restaurants = data;
        });
        $scope.orderProp = 'id';
    }
]);

foodlyAppControllers.controller('RestaurantDetailCtrl', ['$scope', '$routeParams', '$http',
     function($scope, $routeParams, $http) {
         $http.get('data/restaurantsJSON.json').success(function(data) {
             $scope.restaurants = data;
             $scope.thisRestaurant = data[$routeParams.restaurantid - 1];
         });
     }
]);
                                                             

// Controller for Map
foodlyAppControllers.controller('MapCtrl', [
    function() {
}]);
