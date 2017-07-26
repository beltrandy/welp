angular
  .module("welpApp")
  .service("userService", function($http) {

    this.getUsers = function() {
      return $http.get("/users/")
    }

    this.getUserById = function(id, cb) {
      if(id == undefined || id == null || id == '') {
        var _user = {
          firstName: "",
          lastName: "",
          email: ""
        };
        cb(_user)
      }
      else {
        $http.get("/users/" + id)
          .then(function(response) {
            cb(response.data)
          },
          function(error) {
            console.log(error);
          })
      }
    }

    this.createUser = function(user) {
      return $http.post("/users/", user)
    }

    this.updateUser = function(user) {
      return $http.put("/users/" + user.id, user)
    }

    this.deleteUser = function(id) {
      return $http.delete("/users/" + id)
    }

  });
