(function(){

    angular
        .module("MyApp")
        .controller("Page4Ctrl",Page4Ctrl);

    Page4Ctrl.$inject = ['$window','MyService'];

    function Page4Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 4 Controller");

        vm.header = "Products Affected";

    }



})();