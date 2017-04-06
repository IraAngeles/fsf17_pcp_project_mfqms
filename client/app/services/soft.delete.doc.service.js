// IIFE
(function(){
  angular
  .module("MyApp")
  .service("SoftDeleteDocService", SoftDeleteDocService);

  // DI
  SoftDeleteDocService.$inject = ['$http', '$q'];

  // service function
  function SoftDeleteDocService($http, $q) {
    var service = this;

    //expose service
    service.softdeleteDoc = softdeleteDoc;

    // fetch function
    function softdeleteDoc(doc) {
      var defer = $q.defer();
      $http.put("/api/softdeletedoc/", doc)
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