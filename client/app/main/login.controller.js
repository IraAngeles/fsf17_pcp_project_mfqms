(function(){
    angular
        .module("MyApp")
        .controller("LoginCtrl",LoginCtrl);

    LoginCtrl.$inject = ['$window','MyService'];

    function LoginCtrl ($window,MyService){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        
        console.log("Login Controller");


    }
    



})();
