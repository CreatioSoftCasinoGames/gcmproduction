

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

        $scope.pushList = [{
            name: 'push1',
            deviceName: 'device1',
            totalPush: '1000',
            linkClicked: '700'
        },
        {
            name: 'ps2',
            deviceName: 'dv2',
            totalPush: '900',
            linkClicked: '800'
        }];
    }

    $scope.onSelectAppId = function(){
        var appId = $scope.appId;   
        console.log(appId);     
        $http.get("/appUser/"+appId)
        .success(function(res){
            console.log(res);
         }).error(function(err){
            console.log(err);
            alert("Unable to send push. Something went wrong");
        });
    }

     $scope.init();

}]);