(function () {
	'use strict';

	function HomeCtrl ($scope, dataService) {

		dataService.getData().then(function(response) {
			console.log(response + 'home response');
			$scope.alert = response;
			var alertData = $scope.alert.data.value;

			$scope.filterSecId = function() {
				var result = {};
				angular.forEach(alertData, function(value, key) {
					if (!value.hasOwnProperty('secId')) {
							if(value.Display !== false){
						 		result[key] = value;
						 	}
						}
				});
				return result;
			};
		});
	}

	angular.module('myApp').controller('HomeCtrl', ['$scope','dataService', HomeCtrl]);
}());