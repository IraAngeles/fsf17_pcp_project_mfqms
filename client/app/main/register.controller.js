(function(){
    angular
        .module("MyApp")
        .controller("RegisterCtrl",RegisterCtrl);

    RegisterCtrl.$inject = ['$window','MyService'];

    function RegisterCtrl ($window,MyService){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        vm.heading = "Register";
        
        console.log("Register Controller");


    }
    



})();
