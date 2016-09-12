angular.module('app.services', [])
.factory('WeatherAPI', ['$http', '$location', function($http, $location){

  var weather;

  var getWeather = function(city){
    return $http({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&APPID=${window.API_KEY}`
    })
    .then(function (response) {
      return response.data;
    });
  };

  return {
    getWeather: getWeather,
    weather: weather
  };
}]);