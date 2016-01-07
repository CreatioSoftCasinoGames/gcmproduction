Classified.controller('RegisterController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {
    $scope.create = function(){
        if(!$scope.data) alert("Please fill required field");
        else{
            var data = $scope.data;
            if( !data.appId || !data.apiKey || !data.appName || !data.appVersion ){
                    alert("Please fill required field");
            }
            else{        
                $http.post("/app", data)
                .success(function(res){
                    alert("App successfully registered");
                    $scope.data = {};
                }).error(function(err){
                    alert(err);
                });   
            }
        }
    }
}]);