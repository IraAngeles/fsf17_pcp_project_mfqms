(function(){
    angular
        .module("MyApp")
        .controller("UserProfileCtrl",UserProfileCtrl);

    UserProfileCtrl.$inject = ['$window','MyService'];

    function UserProfileCtrl ($window,MyService){
        var vm = this;

        vm.appname = "Manufacturing and Field Quality Management System";
        vm.name = "User Profile";
        vm.listuserprofiles = listuserprofiles;


        console.log("User Profile  Controller");

        listuserprofiles();

        function listuserprofiles(){

            MyService
                .getUserProfiles()
                .then(function(result){
                    console.log(JSON.stringify(result));
                })
                .catch(function(err){
                    console.log(err);
                });

        };



    };
    



})();