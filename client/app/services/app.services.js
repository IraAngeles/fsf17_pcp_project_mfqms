(function(){
    angular
        .module("MyApp")
        .service("MyService",MyService);

    MyService.$inject = ['$http'];

    function MyService($http){
        var service = this;

        console.log("service");

        service.page1Svc = page1Svc;

        function page1Svc(){
            console.log("service 1");

        }



    }



})();

