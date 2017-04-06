// IIFE
(function(){
  angular
  .module("MyApp")
  .service("GetDocDetailsService", GetDocDetailsService);

  // DI
  GetDocDetailsService.$inject = ['$http', '$q'];

  // service function
  function GetDocDetailsService($http, $q) {
    var service = this;

    //expose service
    service.getdocDetails = getdocDetails;

    // fetch function
    function getdocDetails(id) {
      var defer = $q.defer();

      $http.get("api/documentsdetails/", {params:{id:id}})
        .then(function (result) {
          defer.resolve(result.data);
        })
        .catch(function (err) {
          defer.reject(err);
        });
      return defer.promise;
      // console.log(defer.promise);

    }

  }

})();