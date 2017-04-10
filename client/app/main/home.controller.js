(function(){
  angular
    .module("MyApp")
    .controller("HomeCtrl",HomeCtrl);

    HomeCtrl.$inject = [ '$q', '$window', '$state',  'AuthFactory', 'GetDocsService', '$scope'];

    function HomeCtrl ( $q, $window, $state, AuthFactory, GetDocsService, $scope){
      var vm = this;

      vm.appname = "Manufacturing and Field Quality Management System";
      vm.logout = logout;

      console.log("Home Controller");
      // console.log(authenticated);

      function logout(){
          console.log("logout");
          var deferred = $q.defer();

            AuthFactory
                .logoutApp()
                .then(function(){
                    deferred.resolve();
                    $state.reload();
                    $state.go("login");
                })
                .catch(function(){
                    console.log("error");
                    $state.reload();
                });


          return deferred.promise;
      }

      vm.documents = [];
      GetDocsService
        .getDocs()
        .then(function(results){
          // console.log("results" + JSON.stringify(results.data));
          results.data.forEach(function(arrayItem, i){
            vm.documents[i] = {
              id : arrayItem.id,
              owner: arrayItem.owner,
              document_number : arrayItem.document_number,
              title : arrayItem.title,
              opened_date : arrayItem.created_at,
              brand : arrayItem.brand,
              status : arrayItem.status,
              last_update: arrayItem.updated_at
            }
          })
          console.log(vm.documents);
        })
        .catch(function(err){
          console.log("error " + JSON.stringify(err));
            // console.log("Error in service 1");
        })

  $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                width: 800,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Status'
                },
                yAxis: {
                    axisLabel: 'Count',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Open" ,
                        "value" : 3
                    } ,
                    {
                        "label" : "Closed" ,
                        "value" : 31
                    }
                ]
            }
        ]


    };
    
})();
