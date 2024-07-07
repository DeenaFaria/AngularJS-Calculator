app.controller('myCtrl',
function($scope){
	$scope.display='';
	
	$scope.append=function(value){
		$scope.display+=value;
	};
	
	$scope.clear=function(){
		$scope.display='';
	};
	
	$scope.calculate=function(){
		$scope.display=eval($scope.display)
	};
});