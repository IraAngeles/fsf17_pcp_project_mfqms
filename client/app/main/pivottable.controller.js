(function(){

  angular
    .module("MyApp")
    .controller("PivotTableCtrl",PivotTableCtrl);

  PivotTableCtrl.$inject = ['$window','$state', '$stateParams', 'GetDocsService'];

  function PivotTableCtrl ($window, $state, $stateParams, GetDocsService){

    var vm = this;

    console.log("Page 1 Controller");

    vm.documents = [];
    vm.searchFilter = "";
  
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
        pivotUi(vm.documents);
      })
      .catch(function(err){
        console.log("error " + JSON.stringify(err));
          // console.log("Error in service 1");
      })

      // invoke pivot table
      function pivotUi(data) {
          var derivers = $.extend($.pivotUtilities.renderers, $.pivotUtilities.gchart_renderers, $.pivotUtilities.d3_renderers);
          $("#docsPivotTableOutput").pivotUI(data, {
              rows: ["owner"],
              cols: ["status"],
              rendererName: "Table"
          });
      };      
      // $("#output").pivotUI(
      //   $.pivotUtilities.vm.documents, {
      //     rows: ["owner"],
      //     cols: ["status"]
      //   });

  }

})();