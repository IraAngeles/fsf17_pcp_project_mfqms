(function(){

    angular
        .module("MyApp")
        .controller("Page2Ctrl",Page2Ctrl);

    Page2Ctrl.$inject = ['$window','MyService'];

    function Page2Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 2 Controller");

        vm.header = "Page 2";

    }



})();