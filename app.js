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
				$scope.myColor="red";
			}else if (clearMessage.length<=3){
				$scope.message="Enjoy!";
				$scope.myColor="green";
			}else if(clearMessage.length>3){
				$scope.message="Too Much!";
				$scope.myColor="green";
			}
			
		};
	}
})();