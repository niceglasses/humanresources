(function() {

  var applicantsFactory = function($http) {

    var factory = {};

    factory.getApplicants = function() {
      return $http.get('http://api.randomuser.me/?results=50', {cache: true});
    }





    return factory;
  };


  applicantsFactory.$inject = ['$http'];


  angular.module('humanResourcesApp').factory('applicantsFactory', applicantsFactory);

}());


// http://api.randomuser.me/?results=5