var head=angular.module("header",[ ]);//,'ui.bootstrap'

head.controller("headerControl",function($scope){//,userService,sessionService
    $scope.heading="Tic Tac Toe";
    $scope.userName="Welcome, Players";
    $scope.imgURL={};
    $scope.played= {11:false,12:false,13:false,
			    	21:false,22:false,23:false,
			    	31:false,32:false,33:false};
    $scope.count=0;
    $scope.checkBoard=function(tile){
    	$scope.count=$scope.count+1
    	if ($scope.count%2==0){
    		if (!$scope.played[tile]){
				$scope.imgURL[tile]='cross';
				$scope.played[tile]=true;
    		}
    	}
    	else{
    		if (!$scope.played[tile]){
				$scope.imgURL[tile]='circle';
				$scope.played[tile]=true;
    		}
    	}
    };

});