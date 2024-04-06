window.EditController = function ($scope, $http, $routeParams,$location) {
    var apiUrl = "http://localhost:3000/products";
    var id = $routeParams.id;

  $scope.getDetail = function () {
    $http.get(`${apiUrl}/${id}`).then(function ($response) {
      // console.log($response);
      $scope.p = $response.data;//chi tiet
   
      $scope.inputValue = {
        name: $response.data.name,
        price: $response.data.price,
        description: $response.data.description,
        image: $response.data.image
      }
    });
  };
  
  $scope.getDetail();
  
  $scope.onUpdate = function(){
    // lay du lieu tu form
    var updateProduct = {
      ...$scope.inputValue
    }
    console.log(updateProduct);
    $http.put(
      `${apiUrl}/${id}`,
      updateProduct
    ).then(function(res){
      console.log(res);

      if(res.status == 200){
        $location.path("/admin");
      }
    })
  }
};
