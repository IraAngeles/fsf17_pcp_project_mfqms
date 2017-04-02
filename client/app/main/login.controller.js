(function(){
    angular
        .module("MyApp")
        .controller("LoginCtrl",LoginCtrl);

    LoginCtrl.$inject = ['$window','AuthFactory','Flash', '$state'];

    function LoginCtrl ($window,AuthFactory,Flash,$state){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        vm.login = login;
        vm.emailAddress = "";
        vm.password = "";

        console.log("Login Controller");



        // AuthFactory
        //     .isLoggedIn()
        //     .then(function(){
        //         // vm.emailAddress = "";
        //         // vm.password = "";
        //         console.log("login - redirect");
        //         $state.go("home");                
        //     });

        if(AuthFactory.isLoggedIn()){
            vm.emailAddress = "";
            vm.password = "";
            console.log("login");
            $state.go("home");
        };


        function login(){
            AuthFactory
                .login(vm.user)
                .then (function (result){
                    console.log("login result --->> "+JSON.stringify(result));
                    $state.go("home");
                    // if(AuthFactory.isLoggedIn()){
                    //     vm.emailAddress = "";
                    //     vm.password = "";
                    //     console.log("login");
                    //     $state.go("home");
                    // }else{
                    //     Flash.create('danger', "Ooops having issue logging in!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                    //     vm.progressbar.stop();
                    //     // $state.go("login");                       
                    // }

                })
                .catch (function(error){
                    // console.log("Login error -- " + JSON.stringify(error));
                });


        };


    };
    



})();
