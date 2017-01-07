(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope){
		$scope.text="";

		$scope.check=function(){
			var message=$scope.text;
			var clearMessage = message.split(",");
			if($scope.text=="" ){
				$scope.message="Please enter data first";
			}else if (clearMessage.length<=3){
				$scope.message="Enjoy!";
			}else if(clearMessage.length>3){
				$scope.message="Too Much!";
			}
			
		};
	}
})();