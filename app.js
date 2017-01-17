var app = angular.module('TicTacToe',['ngRoute', 'ngResource']);
    app.controller('FormController',function($scope,$http){	
    $scope.createuser=function(){		
    $http.post("insert.php", {
		'UserName':$scope.UserName,
		'Pword':$scope.Pword})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
    });
        }
         });