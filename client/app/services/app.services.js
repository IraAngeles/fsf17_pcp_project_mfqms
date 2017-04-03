(function(){
    angular
        .module("MyApp")
        .service("MyService",MyService);

    MyService.$inject = ['$http'];

    function MyService($http){
        var service = this;
        const API_PRODUCTS_ENDPOINT = "/api/products";
        const API_PRODUCTS_AFFECTED_URI = "/api/productsaffected";
        const API_USER_PROFILES_URI = "/api/userprofiles";

        console.log("service");

        service.page1Svc = page1Svc;
        service.page4Svc = page4Svc;
        service.page5Svc = page5Svc;

        service.updateProductsAffected = updateProductsAffected;
        service.deleteProductsAffected = deleteProductsAffected;
        service.createProductsAffected = createProductsAffected;

        service.getUserProfiles = getUserProfiles;


        function page1Svc(){
            console.log("service 1");
            return;
        }


        function page4Svc(){
            console.log("service 4");
            return $http({
                    method: 'GET'
                    , url: API_PRODUCTS_AFFECTED_URI                

            });

        }

        function page5Svc(){
            console.log("service 5");
            return $http({
                    method: 'GET'
                    , url: API_PRODUCTS_ENDPOINT                

            });

        }


// Products Affected

        function createProductsAffected(dataObject){
            return $http({
                    method: 'POST'
                    , url: API_PRODUCTS_AFFECTED_URI
                    , data: dataObject
            });


        }


        function updateProductsAffected(dataObject){
            return $http({
                    method: 'PUT'
                    , url: API_PRODUCTS_AFFECTED_URI + "/" + dataObject.id
                    , data: dataObject
            });

        }


        function deleteProductsAffected(index){
            return $http({
                    method: 'DELETE'
                    , url: API_PRODUCTS_AFFECTED_URI + "/" + index
            });

        }



// User Profiles   

        function getUserProfiles(){
            return $http({
                method: "GET"
                , url: API_USER_PROFILES_URI
            });







        }

    }



})();

