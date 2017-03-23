(function(){

    angular
        .module("MyApp")
        .controller("Page5Ctrl",Page5Ctrl);

    Page5Ctrl.$inject = ['$window','MyService'];

    function Page5Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 5 Controller");

        vm.header = "Select Products";




    }



})();