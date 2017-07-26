angular
  .module("welpApp")
  .service("reviewService", function($http) {

    this.getReviews = function() {
      return $http.get("/api/reviews/")
    }

    this.getReviewById = function(id) {
      return $http.get("/api/reviews/" + id)
    }

    this.createReview = function() {
      return $http.post("/api/reviews/", {review: review})
    }

    this.updateReview = function(review) {
      return $http.put("/api/reviews/" + review.id, {review: review})
    }

    this.deleteReview = function(review) {
      return $http.delete("/api/reviews/" + review.id)
    }

  });
