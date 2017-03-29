(function(){
    angular
        .module("MyApp")
        .controller("HomeCtrl",HomeCtrl);

    HomeCtrl.$inject = ['$window','MyService'];

    function HomeCtrl ($window,MyService){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        
        console.log("Home Controller");


    }
    



})();
