var app = angular.module("myapp",[]);
var res = document.getElementById('result');
app.controller('control',function($scope){
$scope.title = "Simple Interest Calculator";
$scope.inputData = {};
$scope.calculate = function(){
  x = $scope.inputData;
  amount = Number(x.amount);
  rate = Number(x.rate);
  time = Number(x.time);
  ans = (amount*time*rate)/100;
  if(!isNaN(ans))
	res.innerHTML = "The Simple Interest for the given Principal amount is " + parseInt(ans) + "/- rupees only";
};
});
        
