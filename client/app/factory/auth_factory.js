(function(){

    angular.module('MyApp')
           .factory('AuthFactory',AuthFactory);

   
   AuthFactory.$inject =  ['$q', '$timeout', '$http', 'Flash', '$state'];
        
    function AuthFactory ($q, $timeout, $http, Flash, $state) {

        const API_REGISTER_URI = "/register";

       return ({
            register: register

       });

        


        function register(data){

            var deferred = $q.defer();

            console.log("--->> " + JSON.stringify(data));

            // return deferred.promise;
            return $http({
                    method: 'POST',
                    url: API_REGISTER_URI,
                    data: data

                });         



        }





    };

})();