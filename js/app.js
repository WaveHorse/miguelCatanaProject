(function () {
'use strict';

angular.module('indexPage', [])
.controller('FooterController', FooterController)

FooterController.$inject = ['$scope'];
function FooterController($scope) {
  $scope.copyYear = new Date().getFullYear()
}

})();
