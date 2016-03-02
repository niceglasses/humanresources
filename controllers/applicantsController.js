(function() {

  var ApplicantsController = function($scope, applicantsFactory) {
    $scope.people = ['Bob', 'Tony', 'Sally'];
    // $scope.applicants = {};

   applicantsFactory.getApplicants()
        .success(function(applicants) {
            $scope.applicants = applicants;
        })
        .error(function(data,status,headers,config) {
            console.log("An error has occurred you idiot!");
        });
  };

  ApplicantsController.$inject = ['$scope', 'applicantsFactory'];

  angular.module('humanResourcesApp')
    .controller('ApplicantsController', ApplicantsController);


}());