(function(){

    angular
        .module("MyApp")
        .controller("Page4Ctrl",Page4Ctrl);

    Page4Ctrl.$inject = ['$window', '$state', 'MyService'];

    function Page4Ctrl ($window,$state,MyService){
        var vm = this;

        console.log("Page 4 Controller");

        vm.header = "Products Affected";

        vm.searchResults = {};

        vm.listProducts = listProducts;
        vm.updateProduct = updateProduct;
        vm.deleteProduct = deleteProduct;

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


        function updateProduct (index){

            // function go get index 
            var  findIndexInData = function (data, property, value) {
              for(var i = 0, l = data.length ; i < l ; i++) {
                if(data[i][property] === value) {
                  return i;
                };
              };
              return -1;
            };

            var idx = findIndexInData(vm.searchResults, "id",index);

            console.log("index " + index);
            console.log("data -->>> " + JSON.stringify(vm.searchResults[idx]) );

            MyService
                .updateProductsAffected(vm.searchResults[idx])
                .then(function(){
                    console.log("updated");
                })
                .catch(function(err){
                    console.log(err);
                });
        }

        function deleteProduct (index){

            MyService
                .deleteProductsAffected(index)
                .then(function(){
                    console.log("deleted");
                    $state.reload();
                })
                .catch(function(err){
                    console.log(err);
                });
        }




    }



})();