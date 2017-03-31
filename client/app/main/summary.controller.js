(function(){

    angular
        .module("MyApp")
        .controller("SummaryCtrl",SummaryCtrl);

    SummaryCtrl.$inject = ['$window','MyService'];

    function SummaryCtrl ($window,MyService){
        var vm = this;

        console.log("Summary Controller");

        vm.header = "Summary";

    }



})();