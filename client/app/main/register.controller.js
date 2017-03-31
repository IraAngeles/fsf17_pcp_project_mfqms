(function(){
    angular
        .module("MyApp")
        .controller("RegisterCtrl",RegisterCtrl);

    RegisterCtrl.$inject = [ "$sanitize", "$state", "AuthFactory", "Flash"];

    function RegisterCtrl ($sanitize,$state, AuthFactory, Flash){
        var vm = this;

        vm.user = {};
        vm.appname = "Manufacturing and Field Quality Management System";
        vm.heading = "Registration";
        vm.registermsg = true;

        vm.emailAddress = "";
        vm.firstName = "";
        vm.lastName = "";
        vm.password = "";
        vm.confirmpassword = "";


        vm.register = register;
        vm.cancel = cancel;

        console.log("Register Controller");

        function register(){
            vm.user = {
                email: $sanitize(vm.emailAddress), 
                password: $sanitize(vm.password), 
                first_name: $sanitize(vm.firstName), 
                last_name: $sanitize(vm.lastName)
            };
            console.log(JSON.stringify(vm.user));

            AuthFactory
                .register(vm.user)
                .then(function(result){
                    console.log("done");
                })
                .catch(function(error){
                    console.log("error");
                });

        };


        function cancel(){
            $state.go("home");


        };

    }
    





})();


