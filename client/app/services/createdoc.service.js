// IIFE
(function(){
  angular
  .module("MyApp")
  .service("CreateDocService", CreateDocService);

  // DI
  CreateDocService.$inject = ['$http', '$q'];

  // service function
  function CreateDocService($http, $q) {
    var service = this;

    //expose service
    service.createDoc = createDoc;

    // fetch function
    function createDoc(doc) {
      var defer = $q.defer();

      $http.post("api/createdoc", doc)
        .then(function (result) {
          defer.resolve(result);

        })
        .catch(function (err) {
          defer.reject(err);
        });
      return defer.promise;
      console.log(defer.promise);

    }

  }

})();