Classified.controller('CreateController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {

    $scope.init = function(){      
        $scope.appList = {};

        $http.get("/app")
        .success(function(res){
            $scope.appList = res;
        }).error(function(err){
            console.log(err);
            alert("Opps something went wrong in loading web pages");
        });
    }



    $scope.create = function(){
        var data = $scope.data;   
        var obj = $scope.appList.filter(function ( obj ) {
            return obj.apiKey === data.apiKey;
        })[0];
        data.appId = obj.appId;
        $http.post("/sendPush", data)
        .success(function(res){
            alert(res);
            $scope.data = {};
        }).error(function(err){
            console.log(err);
            alert("Unable to send push. Something went wrong");
        });
    }

    $scope.init();

}]);