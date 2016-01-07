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
        if($scope.data){
            if( !$scope.data.apiKey || !$scope.data.title || !$scope.data.subtitle || !$scope.data.link || !$scope.data.name ){
                alert("Please fill required field");
            }
            else{
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
        }
        else{
            alert("Please fill required field");
        }
        
    }
    $scope.init();

}]);