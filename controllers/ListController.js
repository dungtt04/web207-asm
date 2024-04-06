window.ListController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";

  $scope.getProducts = function () {
    // const page = $routeParams.page ? $routeParams : 1;
    // console.log(page);
    $http.get(apiUrl).then(function ($response) {
      //console.log($response.data);
      $scope.products = $response.data;
      $scope.begin = 0;
      $scope.pageCount = Math.ceil($scope.products.length / 6);
      // console.log($scope.pageCount);
      $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 6;
      };
      $scope.first = function () {
        $scope.begin = 0;
      };
      $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 6) {
          $scope.begin += 6;
        }
      };
      $scope.prev = function () {
        if ($scope.begin > 0) {
          $scope.begin -= 6;
        }
      };
      //  console.log($scope.products.length);
    });
  };

  $scope.getProducts();
  $scope.onDetail = function (id) {
    $location.path(`detail/${id}`);
  };
  $scope.onEdit = function (id) {
    $location.path(`edit/${id}`);
  };
  $scope.onDelete = function (id) {
    if (confirm("Delete?")) {
      $http.delete(`${apiUrl}/${id}`).then(function (res) {
        $scope.getProducts();
      });
    }
  };
};
