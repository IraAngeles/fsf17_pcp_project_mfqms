(function(){
    angular
        .module("MyApp")
        .service("MyService",MyService);

    MyService.$inject = ['$http'];

    function MyService($http){
        var service = this;
        const API_GET_PRODUCTS_ENDPOINT = "/api/products";
        const API_GET_PRODUCTS_AFFECTED_URI = "/api/productsaffected";

        console.log("service");

        service.page1Svc = page1Svc;
        service.page4Svc = page4Svc;
        service.page5Svc = page5Svc;
        service.updateProductsAffected = updateProductsAffected;
        service.deleteProductsAffected = deleteProductsAffected;
        
        function page1Svc(){
            console.log("service 1");
            return;
        }


        function page4Svc(){
            console.log("service 4");
            return $http({
                    method: 'GET'
                    , url: API_GET_PRODUCTS_AFFECTED_URI                

            });

        }

        function page5Svc(){
            console.log("service 5");
            return $http({
                    method: 'GET'
                    , url: API_GET_PRODUCTS_ENDPOINT                

            });

        }

        // function createProductsAffected(){
        //     return $http({
        //             method: 'POST'
        //             , url: 
        //     });


        // }


        function updateProductsAffected(dataObject){
            return $http({
                    method: 'PUT'
                    , url: API_GET_PRODUCTS_AFFECTED_URI + "/" + dataObject.id
                    , data: dataObject
            });

        }


        function deleteProductsAffected(index){
            return $http({
                    method: 'DELETE'
                    , url: API_GET_PRODUCTS_AFFECTED_URI + "/" + index
            });

        }



    }



})();

