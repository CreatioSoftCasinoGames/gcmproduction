Classified.controller('RegisterController', ['$scope', '$http','$rootScope',  function($scope, $http,$rootScope) {


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

}]);