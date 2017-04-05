(function(){
    angular
        .module("MyApp")
        .controller("UserProfileCtrl",UserProfileCtrl);

    UserProfileCtrl.$inject = ['$window','$state','MyService'];

    function UserProfileCtrl ($window,$state,MyService){
        var vm = this;

        var  findIndexInData = function (data, property, value) {
            for(var i = 0, l = data.length ; i < l ; i++) {
            if(data[i][property] === value) {
                return i;
            };
            };
            return -1;
        };

        vm.appname = "Manufacturing and Field Quality Management System";
        vm.name = "User Profile";
        vm.user = {};
        vm.acl = ["Admin","Reader","Author","Owner"];
        vm.user_status = ["Pending","Active","Revoke"];
        vm.tmpacl = "";
        vm.tmpstatus = "";
        vm.listuserprofiles = listuserprofiles;
        vm.cancelEdit = cancelEdit;
        vm.updateUserProfile = updateUserProfile;
        vm.deleteUserProfile = deleteUserProfile;


        console.log(vm.tmpacl);
        // if(vm.tmpacl)
        //     vm.user.access_control = vm.tmpacl;

        console.log("User Profile  Controller");

        listuserprofiles();

        // console.log();

        function listuserprofiles(){

            MyService
                .getUserProfiles()
                .then(function(result){
                    vm.user = result.data;
                    // vm.user.access_control : "Admin";
                    console.log(JSON.stringify(vm.user));
                })
                .catch(function(err){
                    console.log(err);
                });

        };


        function cancelEdit(){
            vm.tmpacl = "";
            console.log("cancel edit");
            $state.reload();
        }


        function updateUserProfile(index){


            var idx = findIndexInData(vm.user, "id",index);

            MyService
                .updateUserProfiles(vm.user[idx])
                .then(function(){
                    console.log("updated");
                    $state.reload();
                })
                .catch(function(err){
                    console.log(err);
                });

        }


        function deleteUserProfile(index){

            // var  findIndexInData = function (data, property, value) {
            //   for(var i = 0, l = data.length ; i < l ; i++) {
            //     if(data[i][property] === value) {
            //       return i;
            //     };
            //   };
            //   return -1;
            // };

            // var idx = findIndexInData(vm.user, "id",index);

            // vm.user[idx].status = "Revoke";
            // console.log(JSON.stringify(vm.user[idx]));
            console.log(index);
            
            MyService
                .deleteUserProfiles(index)
                .then(function(){
                    console.log("deleted");
                    $state.reload();
                })
                .catch(function(err){
                    console.log(err);
                });



        }



    };
    



})();