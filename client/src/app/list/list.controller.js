

Classified.controller('ListController', ['$scope', '$http','$rootScope', function($scope, $http,$rootScope) {

    $scope.init = function(){

        $scope.appList = {};

        $http.get("/app")
            .success(function(res){
                $scope.appList = res;
            }).error(function(err){
                console.log(err);
                alert("Opps something went wrong in loading web pages");
            });

        $scope.pushList = [];
    }

    $scope.onSelectAppId = function(){
        var appId = $scope.appId;   
        console.log(appId);     
        $http.get("/push/"+appId)
        .success(function(res){
             $scope.pushList = res;
         }).error(function(err){
            console.log(err);
            alert("Unable to get list of push for selected app");
        });
    }

     $scope.init();

}]);