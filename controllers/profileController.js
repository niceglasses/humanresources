(function() {

  var ProfileController = function($scope, $routeParams, applicantsFactory) {
    var profileName = $routeParams.profileName;

    // $scope.applicants = {};

    

    applicantsFactory.getApplicants()
        .success(function(applicants) {
            for (var i = 0; i < applicants.results.length; i++) {
              if (applicants.results[i].user.username == profileName) {
                  $scope.profile = applicants.results[i];

             

              }
            }
        });
  };

  ProfileController.$inject = ['$scope', '$routeParams' ,'applicantsFactory'];

  angular.module('humanResourcesApp')
    .controller('ProfileController', ProfileController);

}());