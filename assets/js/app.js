// Angular
var acmeApp = angular.module('acmeApp', []);
acmeApp.constant('moment', moment);

acmeApp.controller('appController', ['$scope', '$http', 'moment', function($scope, $http, moment) {

    $http({method: 'GET', url: 'assets/data/orderHistory.json'}).then(function(response){
        $scope.orderHistory = response.data;
    });
}]);



