angular.module('app.displayWeather', [])
.controller('DisplayWeatherController', ['$scope', '$location', 'WeatherAPI', function($scope, $location, WeatherAPI){
    $scope.weather = WeatherAPI.weather;

    $scope.farenheit = function(K){
        var f = (K-273.15)*1.8000 + 32;
        return Math.round(f);
    };

    $scope.getDay = function(d) {
        var day = new Date(d * 1000);
        var numDay = day.getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[numDay];
    }

    $scope.makeUrl = function(url){
        return "http://openweathermap.org/img/w/" + url + ".png";
    }
}]);