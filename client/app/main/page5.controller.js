(function(){

    angular
        .module("MyApp")
        .controller("Page5Ctrl",Page5Ctrl);

    Page5Ctrl.$inject = ['$window','MyService'];

    function Page5Ctrl ($window,MyService){
        var vm = this;
        
        console.log("Page 5 Controller");

        vm.header = "Select Products";
        vm.searchResults = [];

        vm.listProducts = listProducts;
        vm.updateProduct = updateProduct;

        listProducts();

        function listProducts (){

            console.log ("list products");

            MyService
                .page5Svc()
                .then(function(result){
                    vm.searchResults = result.data;
                    console.log("page 5")
                    console.log(JSON.stringify(result));
                })
                .catch(function(){
                    console.log("error");
                });


        }



        function updateProduct (index){
            console.log ("index: " + index) ;           


        }


    }



})();