(function(){

  angular
    .module("MyApp")
    .controller("CreateDocCtrl",CreateDocCtrl);

  CreateDocCtrl.$inject = ['$window', '$state', 'CreateDocService'];

  function CreateDocCtrl ($window, $state, CreateDocService){
    var vm = this;

        // console.log("Page 3 Controller");

        // vm.header = "Page 3";

    vm.uploadDoc = uploadDoc;

    vm.doc = {
      title:"",
      owner:"",
      status:"",
      document_number:"",
      problem_description:"",
      problem_status:"",
      attr:"",
      brand:"",
      field_impact:""
    }

    vm.showsuccess = false;

    function uploadDoc() {
      console.log(vm.doc)
      CreateDocService
          .createDoc(vm.doc)
          .then(function (result) {
              console.log("result " + JSON.stringify(result));
              vm.showsuccess = true;
              $state.go('page1');
          })
          .catch(function (err) {
              console.log("error " + JSON.stringify(err));
          });
    };

  }

})();