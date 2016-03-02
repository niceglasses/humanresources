(function() {

  var humanResourcesApp = angular.module('humanResourcesApp', ['ngRoute', 'ngAnimate']);

  humanResourcesApp.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        controller: 'ApplicantsController',
        templateUrl: 'views/applicants.html'
      })
      .when('/profile/:profileName', {
        controller: 'ProfileController',
        templateUrl: 'views/profile.html'
      })      
      .otherwise({ redirectTo: '/' });
  });


}());