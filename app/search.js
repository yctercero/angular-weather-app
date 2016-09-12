angular.module('app.search', [])
.controller('SearchController', ['$scope', '$location', 'WeatherAPI', function($scope, $location, WeatherAPI){
    $scope.city;

    $scope.search = function(){
        WeatherAPI.getWeather($scope.city)
            .then(function(data){
                WeatherAPI.weather = data;
                $location.path('/weather');
            })
    }
}]);