Classified.controller('RegisterController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {


    $scope.create = function(){
        var data = $scope.data;        
        $http.post("/app", data)
        .success(function(res){
            alert("App successfully registered");
            $scope.data = {};
        }).error(function(err){
            alert(err);
        });     
        
    }

}]);