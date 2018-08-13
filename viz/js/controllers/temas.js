'use strict';

angular.module('initApp')
  .controller('temasController', function ($scope,$rootScope,$timeout, $routeParams, statsService) {
   
   $scope.produccion = $routeParams.name;

  statsService.loadAll(function(){
  	$scope.$apply(function(){

      var filtered = [];
      for (var i = 0; i < statsService.all.length; i++) {
        if (statsService.all[i].TITULO_PROYECTO == $scope.produccion){
          filtered.push(statsService.all[i]);
        }
      }
      $scope.temas = filtered;
     
  	});
  });
});