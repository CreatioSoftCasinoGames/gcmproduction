

Classified.controller('ListController', ['$scope', '$http','$rootScope', function($scope, $http,$rootScope) {

    $scope.init = function(){

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

         $http.get("/post")
        .success(function(data){
            $scope.cars = data;
        }).error(function(err){

        })
    }

     $scope.search = function(data){
         $http.put("/post",data)
        .success(function(res){
            $scope.cars = res;
        }).error(function(err){

        })
    }



     $scope.init();

}]);