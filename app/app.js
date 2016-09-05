angular.module('app', [
  'ui.router',
  'app.displayWeather',
  'app.search'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/search');

  $stateProvider
  .state('search', {
    url: '/search',
    templateUrl: 'app/search.html',
    controller: 'SearchController'
  })
  .state('weather', {
    url: '/weather',
    templateUrl: 'app/displayWeather.html',
    controller: 'DisplayWeatherController'
  });

});