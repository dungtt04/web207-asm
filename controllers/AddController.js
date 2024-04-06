window.AddController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";
  $scope.onSubmit = function () {
    //khoi tao bien de kiem tra du lieu hop le
    var valid = true;
    //kiem tra truong name
    if (
      !$scope.inputValue || // kiem tra ton tai
      !$scope.inputValue.name || // trong
      $scope.inputValue.name.length < 1 || // nho hon 1
      $scope.inputValue.name.length > 200 //lon hon 200
    ) {
      valid = false;
    }
    //kiem tra truong price
    if (
      !$scope.inputValue ||
      !$scope.inputValue.price || //required
      isNaN($scope.inputValue.price) || // kiem tra kieu so
      $scope.inputValue.price < 0 // so am
    ) {
      valid = false;
    }
    //kiem tra truong des
    if (!$scope.inputValue || !$scope.inputValue.description) {
      valid = false;
    }
     //kiem tra anh
     if (!$scope.inputValue || !$scope.inputValue.image) {
        valid = false;
      }
    if (valid) {
      var newProduct = {
        ...$scope.inputValue,
      };
      $http.post(apiUrl, newProduct).then(
        function ($response) {
          // console.log($response);
          if ($response.status == 201) {
            $location.path("/admin");
          }
        },
        function (errors) {
          console.log(errors);
        }
      );
    } else {
      alert("Dữ liệu không hợp lệ!");
    }
    // console.log(newProduct);
  };
};
