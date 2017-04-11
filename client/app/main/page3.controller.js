(function(){

  angular
    .module("MyApp")
    .controller("Page3Ctrl",Page3Ctrl);

  Page3Ctrl.$inject = ['$window', '$state', 'CreateDocService'];

  function Page3Ctrl ($window, $state, CreateDocService){
    var vm = this;

        console.log("Page 3 Controller");

        vm.header = "Owners and Contacts";


  }

})();