var myApp = angular.module("myApp", []); 

myApp.service('MyService', function(){
  var items = [];
  this.add = function($scope){
    var item = {
      value: 0,
      txt:$scope.myLabel,
      color: $scope.myColor
    }
    $scope.items.push(item)
  }

});

myApp.controller('myCntrl', function($scope, MyService){
	$scope.isVisible = false;
	$scope.items = [];

	$scope.ShowDiv = function () {
    $scope.isVisible = true;
    $scope.addVisible = true;
  };

  $scope.SubmitValue = function()
  {
    var product = MyService.add($scope)
    Reset();
  }

    function Reset()
    {
      $scope.isVisible = false;
      $scope.myColor = '';
      $scope.myLabel = '';
      $scope.addVisible = false;
    }

});

myApp.directive('myDirective', function(){
  
	return{
        restrict: 'A',
      
        template:'<input type="button" value="-" ng-click="decreamentValue($index)"  style="background-color: {{ item.color }};"/>'+
                '<input type="button" value="{{item.value}} {{item.txt}}" ng-click="removeButton($index)" style="background-color: {{ item.color }};"/>'+
               '<input type="button" value="+" ng-click="increamentValue($index)" style="background-color: {{ item.color }};"/>',

        link: function($scope, element, attrs){
          $scope.increamentValue = function(index){
            $scope.items[index].value++;
          }
    
          $scope.decreamentValue = function(index){
            $scope.items[index].value--;
          }

          $scope.removeButton = function(index){
            $scope.items.splice(index, 1);
          }
        	
        }
    }
});