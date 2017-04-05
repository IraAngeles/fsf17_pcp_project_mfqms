(function(){
    angular
        .module("MyApp")
        .controller("HomeCtrl",HomeCtrl);

    HomeCtrl.$inject = [ '$q', '$window', '$state',  'AuthFactory' ];

    function HomeCtrl ( $q, $window, $state, AuthFactory){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        vm.logout = logout;

        console.log("Home Controller");


        function logout(){
            console.log("logout");
            // var deferred = $q.defer();

            AuthFactory
                .logoutApp()
                .then(function(){
                    // deferred.resolve();
                    $state.go("login");
                })
                .catch(function(){
                    console.log("error");
                    // $state.reload();
                });

            // return deferred.promise;

 
        }



    }
    



})();
