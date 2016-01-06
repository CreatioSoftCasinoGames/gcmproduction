Classified.controller('CreateController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {

    $scope.init = function(){

        $scope.showPreview = 0;        
        $scope.appList = ['app1','app2','app3','app4','app5','app6','app7'];
        $scope.users = [{
            name: 'gaurav',
            email: 'gauravgupta@creatiosoft.com',
            model: 'Nokia X',
            version: 'v1'
        },
        {
            name: 'nishank',
            email: 'nishank@creatiosoft.com',
            model: 'I phone',
            version: 'v1'
        }];

    }

    $scope.create = function(){
        console.log($scope.data);
        var data = $scope.data;
        
        $http.post("/sendPush", data)
        .success(function(res){
            alert(res);
        }).error(function(err){
            console.log(err);
            alert("Unable to send push. Something went wrong");
        })
       
        
    }

    $scope.init();

}]);