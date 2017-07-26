var app = angular.module('welpApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("places", {
      url: "/places",
      templateUrl: "./views/places.html",
      controller: "placeController"
    })
      .state("newPlace", {
        url: "/places/new",
        templateUrl: "./views/place-form.html",
        controller: "placeController"
      })
      .state("place", {
        url: "/places/:id",
        templateUrl: "./views/place.html",
        controller: "placeController"
      })
      .state("editPlace", {
        url: "/places/:id/edit",
        templateUrl: "./views/place-form.html",
        controller: "placeController"
      })



    .state("users", {
      url: "/users",
      templateUrl: "./views/users.html",
      controller: "userController"
    })
      .state("newUser", {
        url: "/users/new",
        templateUrl: "./views/user-form.html",
        controller: "userController"
      })
      .state("user", {
        url: "/users/:id",
        templateUrl: "./views/user.html",
        controller: "userController"
      })
      .state("editUser", {
        url: "/users/:id/edit",
        templateUrl: "./views/user-form.html",
        controller: "userController"
      })

});
