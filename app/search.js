angular.module('app.search', [])
.controller('SearchController', function($scope, $location){
    $scope.city;

    $scope.search = function(){
        // some function that sends request to api
    }
});