(function(){

  angular
    .module("MyApp")
    .controller("Page2Ctrl",Page2Ctrl);

  Page2Ctrl.$inject = ['$window', '$state', '$stateParams', 'GetDocDetailsService'];

  function Page2Ctrl ($window, $state, $stateParams, GetDocDetailsService){
    var vm = this;
    vm.singleDoc = "";
    console.log("Page 2 Controller");
    console.log($stateParams.id)

      // vm.navheader = "Stop Ship";
    vm.header = "Document details";

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

  }

})();