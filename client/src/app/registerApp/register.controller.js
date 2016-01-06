Classified.controller('RegisterController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {


    $scope.create = function(){

        console.log($scope.data);
        var data = $scope.data;        
        $http.post("/app", data)
        .success(function(res){
            alert("App successfully registered");
            $scope.data = {};
        }).error(function(err){

        });     
        
    }

}]);