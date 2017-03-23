(function(){

    angular
        .module("MyApp")
        .controller("Page4Ctrl",Page4Ctrl);

    Page4Ctrl.$inject = ['$window','MyService'];

    function Page4Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 4 Controller");

        vm.header = "Products Affected";

        vm.searchResults = [];

        vm.listProducts = listProducts;


        listProducts();

        function listProducts (){

            console.log ("list products affected");

            MyService
                .page4Svc()
                .then(function(result){
                    vm.searchResults = result.data;
                    console.log("page 5")
                    console.log(JSON.stringify(result));
                })
                .catch(function(){
                    console.log("error");
                });


        }





    }



})();