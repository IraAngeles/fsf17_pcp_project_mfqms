(function(){

  angular
    .module("MyApp")
    .controller("Page1Ctrl",Page1Ctrl);

  Page1Ctrl.$inject = ['$window','$state', '$stateParams', 'GetDocsService'];

  function Page1Ctrl ($window, $state, $stateParams, GetDocsService){

    var vm = this;

    console.log("Page 1 Controller");

    vm.documents = [];
    vm.searchFilter = "";
    vm.createDoc = createDoc;
  
    GetDocsService
      .getDocs()
      .then(function(results){
        // console.log("results" + JSON.stringify(results.data));
        results.data.forEach(function(arrayItem, i){
          vm.documents[i] = {
            id : arrayItem.id,
            owner: arrayItem.owner,
            document_number : arrayItem.document_number,
            title : arrayItem.title,
            opened_date : arrayItem.created_at,
            brand : arrayItem.brand,
            status : arrayItem.status,
            last_update: arrayItem.updated_at
          }
        })
        // to map all objects
        // vm.documents = results.data.map(function(obj) {
        //   return Object.keys(obj).map(function(key) { 
        //     return obj[key];
        //   });
        // });
        console.log(vm.documents);
      })
      .catch(function(err){
        console.log("error " + JSON.stringify(err));
          // console.log("Error in service 1");
      })

      function createDoc() {
        // console.log('here!')
        $state.go('page3');
      };

      vm.viewdocId = function(id) {
        console.log(id);
        $state.go('page2', {'id':id});
      };

      vm.editdocId = function(id) {
        console.log(id);
        $state.go('editdoc', {'id':id});
      };


        // vm.header = "Page 1";
        // vm.message = "test";

        // vm.page1Submit = page1Submit;

        // function page1Submit (){

        //     MyService
        //         .page1Svc()
        //         .then(function(){
        //             vm.message = "Form submitted, thank you!"
        //             console.log("Service 1 complete");
        //         })
        //         .catch(function(){
        //             console.log("Error in service 1");
        //         })


        // }

  }

})();