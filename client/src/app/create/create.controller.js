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
        alert($scope.data);
        // var data = $scope.cars;
        // if(data && data.model && data.maker && data.year && data.price.sellingPrice && data.price.currency){
        //     $http.post("/post", data)
        //     .success(function(res){
        //         alert("Post successfully created. Your reference id is "+res.refId);
        //         window.location="http://localhost:8000";
        //     }).error(function(err){

        //     })
        // }
        // else{
        //     alert("Please fill the required field");
        // }
        
    }

    $scope.preview = function(){
        $scope.showPreview = 1;
    }

    $scope.addImage = function(){
        window.open('http://localhost:8000/uploadfile', '_blank');
    }

    $scope.init();

}]);