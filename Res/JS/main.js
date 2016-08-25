/*Michael Mitchell*/
/*SD2670*/
/*25AUG16*/
/*Final Project*/
/*Prof. Asam Mahmood*/

angular.module("ligerApp", []).controller("ligerCtrl", function($scope) {
	$scope.stuff = ["Learn AngularJS", "Continue Unity project", "Continue Ionic/Firebase app"];
	$scope.addItem = function () {
		$scope.errortext = "";
		if (!$scope.addMe) {return;}
		if ($scope.stuff.indexOf(scope.addMe) == -1) {
			
		} else {
			$scope.errortext = "This is already on your list.";
		}
	}
	$scope.removeItem = function(x) {
		$scope.errortext = "";
		$scope.stuff.splice(x, 1);
	}
});