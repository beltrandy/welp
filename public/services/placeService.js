angular
  .module("welpApp")
  .service("placeService", function($http) {

    this.getPlaces = function() {
      return $http.get("/api/places/")
    }

    this.getPlaceById = function(id) {
      return $http.get("/api/places/" + id)
    }

    this.createPlace = function() {
      return $http.post("/api/places/", {place: place})
    }

    this.updatePlace = function(place) {
      return $http.put("/api/places/" + place.id, {place: place})
    }

    this.deletePlace = function(place) {
      return $http.delete("/api/places/" + place.id)
    }

  });
