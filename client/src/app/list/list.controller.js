

Classified.controller('ListController', ['$scope', '$http','$rootScope', function($scope, $http,$rootScope) {

    $scope.init = function(){

        $scope.appList = {};

        $http.get("/app")
            .success(function(res){
                $scope.appList = res;
            }).error(function(err){
                alert(err);
            });

        $scope.pushList = [];
    }

    $scope.onSelectAppId = function(){
        var appId = $scope.appId;   
        $http.get("/push/"+appId)
        .success(function(res){
             $scope.pushList = res;
         }).error(function(err){
            alert(err);
        });
    }

    $scope.delete = function(item){
        $http.delete("/push/"+item)
        .success(function(res){
            var appId = $scope.appId;   
            $http.get("/push/"+appId)
            .success(function(res){
                 $scope.pushList = res;
             }).error(function(err){
                alert(err);
            });
         }).error(function(err){
            alert(err);
        });
    }
    $scope.init();
}]);