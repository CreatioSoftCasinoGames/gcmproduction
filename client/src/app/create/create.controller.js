Classified.controller('CreateController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {

    $scope.init = function(){      
        $scope.appList = {};

        $http.get("/app")
        .success(function(res){
            $scope.appList = res;
        }).error(function(err){
            alert(err);
        });
    }



    $scope.create = function(){
        var data = $scope.data;   
        data.apiKey = JSON.parse(data.apiKey);
        data.appId = data.apiKey.appId;
        data.apiKey = data.apiKey.apiKey;
        $http.post("/sendPush", data)
        .success(function(res){
            alert(res);
            $scope.data = {};
        }).error(function(err){
             alert(err);
        });
    }

    $scope.init();

}]);