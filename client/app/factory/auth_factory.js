(function(){

    angular.module('MyApp')
           .factory('AuthFactory',AuthFactory);

   
   AuthFactory.$inject =  ['$q', '$timeout', '$http', 'Flash', '$state'];
        
    function AuthFactory ($q, $timeout, $http, Flash, $state) {

        const API_USER_PROFILES_URI = "/api/userprofiles";
        const API_LOGIN_URI = "/login"; 
        var user = null;

       return ({
            isLoggedIn :isLoggedIn,
            isAdmin : isAdmin,
            register: register,
            login : login,
            getUserStatus : getUserStatus,
            logoutApp : logoutApp
       });

        // function isLoggedIn() {

        //     getUserStatus(function(user){
        //         if(user) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     });

        // }

        function isLoggedIn() {

            if(user) {
                return true;
            } else {
                return false;
            }
        }



        function isAdmin() {
            console.log(user);
        }


        function getUserStatus(callback) {
            $http.get('/status/user')
            // handle success
                .then(function (data) {
                    var authResult = JSON.stringify(data);
                    console.log("get user ->>> " + authResult);
                    if(data["data"] != ''){
                        user = true;
                        callback(data);
                    } else {
                        user = false;
                        callback(data);
                    }
                });
        }

        
        function register(data){

            var deferred = $q.defer();

            console.log("--->> " + JSON.stringify(data));

            // return deferred.promise;
            return $http({
                    method: 'POST',
                    url: API_USER_PROFILES_URI,
                    data: data

                });         

        }


        function login(userdata){
            var deferred = $q.defer();

            console.log("login --->> " + JSON.stringify(userdata));

            // return $http({
            //         method: 'POST',
            //         url: API_LOGIN_URI,
            //         data: userdata

            //     }); 
            $http.post(API_LOGIN_URI, userdata)
            // handle success
                .then(function (data) {
                    var status = data.status;
                    if(status == 200){
                        console.log("redirect to home");
                        user = true;
                        deferred.resolve();
                        $state.go("home");
                    }else{
                        deferred.reject();
                        $state.go("login");
                    }
                })
                // handle error
                .catch(function (data) {
                    console.log("error");
                    user = false;
                    deferred.reject();

                });

            // return promise object
            return deferred.promise;


        }




        function logoutApp() {

            // create a new instance of deferred
            var deferred = $q.defer();

            // send a get request to the server
            $http.get('/logout')
            // handle success
                .then(function (data) {
                    user = false;
                    deferred.resolve();
                })
                // handle error
                .catch(function (data) {
                    user = false;
                    deferred.reject();
                });

            // return promise object
            return deferred.promise;

        }




    };

})();