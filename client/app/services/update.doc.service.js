// IIFE
(function(){
  angular
  .module("MyApp")
  .service("UpdateDocService", UpdateDocService);

  // DI
  UpdateDocService.$inject = ['$http', '$q'];

  // service function
  function UpdateDocService($http, $q) {
    var service = this;

    //expose service
    service.updateDoc = updateDoc;

    // fetch function
    function updateDoc(doc) {
      console.log(doc);
      var defer = $q.defer();
      $http.put("/api/updatedoc/", doc)
        .then(function (result) {
            defer.resolve(result.data);
        })
        .catch(function (err) {
            defer.reject(err);
        });
      return defer.promise;
    }

  }

})();