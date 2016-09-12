angular.module('app', [
  'ui.router',
  'app.displayWeather',
  'app.search',
  'app.services'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/search');

  $stateProvider
  .state('search', {
    url: '/search',
    templateUrl: 'app/searchForm.html',
    controller: 'SearchController'
  })
  .state('weather', {
    url: '/weather',
    templateUrl: 'app/displayWeather.html',
    controller: 'DisplayWeatherController'
  });

});