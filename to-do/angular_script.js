var appX = angular.module('mainApp', []);


appX.controller('app', function($scope){

$scope.tasks = [];

var taskData = localStorage['taskList'];
if(taskData != undefined){
	$scope.tasks = JSON.parse(taskData);
}
	$scope.searchEnter = function(){
		if((event.which == 13 || event.keyCode == 13)  && $scope.task !="" && $scope.task !=null){
			$scope.addTask();
		}

	};

	$scope.addEdited = function(msg){
		localStorage['taskList'] = JSON.stringify($scope.tasks);

	};


	$scope.addTask = function(){
		$scope.tasks.push({'taskMessage':$scope.task, 'status':false});
		console.log($scope.tasks);
		$scope.task = '';
		localStorage['taskList'] = JSON.stringify($scope.tasks);
		console.log(localStorage);
	};

	$scope.contentEdit = function(msg){

		for (var i = 0; i < $scope.tasks.length; i++) {
			if($scope.tasks[i].taskMessage == msg){
				$scope.tasks[i].taskMessage = event.target.innerText;
			}
		}

		localStorage['taskList'] = JSON.stringify($scope.tasks);

		event.target.contentEditable = event.target.contentEditable  == "false" ? "true" : "false";
		console.log(event.target.contentEditable);
		console.log(event.target);
	};


	$scope.enterAgain = function(msg){
		console.log('up here');
		console.log('the msg is ' +msg);
		console.log('here');
	

		 if((event.which == 13 || event.keyCode == 13) && (msg !="" || msg !=null)){
				$scope.contentEdit(msg);
				console.log('inside here');
		}
		console.log(event.which);

	};

});