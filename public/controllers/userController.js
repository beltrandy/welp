angular
  .module("welpApp")
  .controller("userController", function($scope, $state, $stateParams, userService) {

    userService.getUsers()
      .then(function(response) {
        $scope.users = response.data;
        console.log($scope.users);
      });

    if($stateParams.id == undefined || $stateParams.id == null || $stateParams.id == '') {
      $scope.submitButton = true;
      $scope.header = "Create A New User"
      userService.getUserById($stateParams.id, function(response) {
        console.log(response);
        $scope.user = response
      })
    }
    else {
      $scope.submitButton = false;
      $scope.header = "Update User"
      userService.getUserById($stateParams.id, function(response) {
        console.log(response);
        $scope.user = response
      })
    }

    $scope.addUser = function() {
      console.log($scope.user);
      userService.createUser($scope.user)
        .then(function(response) {
          $state.go("users")
        },
        function(error) {
          console.log(error);
        })
    }

    $scope.updateUser = function() {
      $state.go("editUser", {id: $stateParams.id})
    }

    $scope.saveUser = function() {
      userService.updateUser($scope.user)
        .then(function(response) {
          $state.go("users")
        },
        function(error) {
          console.log(error);
        })
    }

    $scope.deleteUser = function() {
      userService.deleteUser($stateParams.id)
        .then(function(response) {
          $state.go("users")
        },
        function(error) {
          console.log(error);
        })
    }

  })
