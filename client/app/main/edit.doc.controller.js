(function(){

  angular
    .module("MyApp")
    .controller("EditDocCtrl",EditDocCtrl);

  EditDocCtrl.$inject = ['$window', '$state', '$stateParams', 'GetDocDetailsService', 'UpdateDocService', 'SoftDeleteDocService'];

  function EditDocCtrl ($window, $state, $stateParams, GetDocDetailsService, UpdateDocService, SoftDeleteDocService){
    
    var vm = this;
    console.log($stateParams.id);
    vm.singleDoc = "";
    vm.docUpdates = {};

    GetDocDetailsService
      .getdocDetails($stateParams.id)
      .then(function (result) {
          // console.log("result " + JSON.stringify(result));
          vm.singleDoc = result[0];
          console.log(vm.singleDoc);
      })
      .catch(function (err) {
          console.log("error " + JSON.stringify(err));
      });


    vm.updateDoc = function (){

      vm.docUpdates = {
        id : vm.singleDoc.id,
        owner: vm.singleDoc.owner,
        document_number : vm.singleDoc.document_number,
        title : vm.singleDoc.title,
        opened_date : vm.singleDoc.created_at,
        brand : vm.singleDoc.brand,
        status : vm.singleDoc.status,
        last_update: vm.singleDoc.updated_at       
      }
      console.log(vm.docUpdates)
      UpdateDocService
        .updateDoc(vm.docUpdates)
        .then(function (result) {
            console.log("result " + JSON.stringify(result));          
        })
        .catch(function (err) {
            console.log("error " + JSON.stringify(err));
        });
      $state.go('page1', {}, {reload: true});
    };

    vm.cancel = function(){
      $state.go('page1', {}, {reload: true});
    };

    vm.remove = function (){
      var deleteDoc = {id: $stateParams.id}
      SoftDeleteDocService
        .softdeleteDoc(deleteDoc)
        .then(function (result) {
            console.log("result " + JSON.stringify(result));          
        })
        .catch(function (err) {
            console.log("error " + JSON.stringify(err));
        });
      $state.go('page1', {}, {reload: true});
    };

  };

})();