(function(){

    angular
        .module("MyApp")
        .controller("Page3Ctrl",Page3Ctrl);

    Page3Ctrl.$inject = ['$window','MyService'];

    function Page3Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 3 Controller");

        vm.header = "Page 3";

    }



})();