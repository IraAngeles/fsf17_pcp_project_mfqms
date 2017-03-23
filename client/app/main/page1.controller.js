(function(){

    angular
        .module("MyApp")
        .controller("Page1Ctrl",Page1Ctrl);

    Page1Ctrl.$inject = ['$window','MyService'];

    function Page1Ctrl ($window,MyService){
        var vm = this;

        console.log("Page 1 Controller");

        vm.header = "Page 1";
        vm.message = "test";

        vm.page1Submit = page1Submit;

        function page1Submit (){

            MyService
                .page1Svc()
                .then(function(){
                    vm.message = "Form submitted, thank you!"
                    console.log("Service 1 complete");
                })
                .catch(function(){
                    console.log("Error in service 1");
                })


        }



    }



})();