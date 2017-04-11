(function(){

    angular
        .module("MyApp")
        .controller("Page5Ctrl",Page5Ctrl);

    Page5Ctrl.$inject = ['$window', '$state','MyService'];

    function Page5Ctrl ($window,$state,MyService){
        var vm = this;
        
        console.log("Page 5 Controller");

        vm.header = "Select Products";
        vm.searchResults = [];
        vm.message = "";

        vm.listProducts = listProducts;
        vm.addProduct = addProduct;


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



        function addProduct (object){
            console.log ("index: " + JSON.stringify(object)) ;           

            MyService
                .createProductsAffected({
                    part_number : object.part_number,
                    part_number_code : object.part_number_code,
                    model_type_number : object.model_type_number,
                    fru_part_number : object.fru_part_number
                })
                .then(function(){
                    vm.message = "Part number: " + object.part_number + " added."
                    console.log("created");
                })
                .catch(function(err){
                    console.log(err);
                })
        }


    }



})();