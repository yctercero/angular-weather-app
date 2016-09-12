angular.module('app.services', [])
.factory('WeatherAPI', ['$http', '$location', function($http, $location){
  var getWeather = function(city){
    return $http({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&APPID=${window.APP_KEY}`
    })
    .then(function (response) {
      return response.data;
    });
  };

  return {
    weather: getWeather
  };
}]);