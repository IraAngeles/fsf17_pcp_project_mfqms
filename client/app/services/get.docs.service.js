// IIFE
(function(){
  angular
  .module("MyApp")
  .service("GetDocsService", GetDocsService);

  // DI
  GetDocsService.$inject = ['$http', '$q'];

  // service function
  function GetDocsService($http, $q) {
    var service = this;

    //expose service
    service.getDocs = getDocs;

    // fetch function
    function getDocs() {
      var defer = $q.defer();

      $http.get("api/documents")
        .then(function (result) {
          defer.resolve(result);

        })
        .catch(function (err) {
          defer.reject(err);
        });
      return defer.promise;
      console.log(defer.promise);
      // return $http({
      //   method: 'GET'
      //   , url: 'api/documents'
      // });
    }

  }

})();