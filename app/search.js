angular.module('app.search', [])
.controller('SearchController', ['$scope', '$location', 'WeatherAPI', function($scope, $location, WeatherAPI){
    $scope.city;

    $scope.search = function(){
        WeatherAPI.getWeather($scope.city)
            .then(function(data){
                console.log(data);
                WeatherAPI.weather = data;
                $location.path('/weather');
            })
    }
}]);