(function () {
    angular
        .module("MyApp")
        .config(myAppConfig);

    myAppConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function myAppConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{
                url : '/login',
                templateUrl: "pages/login.html",
                controller : 'LoginCtrl',
                controllerAs : 'ctrl',
                access: {restricted: false}
            })
            .state('register',{
                url : '/register',
                templateUrl: "pages/register.html",
                controller : 'RegisterCtrl',
                controllerAs : 'ctrl',
                access: {restricted: false}
            })
            .state('page1',{
                url : '/page1',
                templateUrl: "pages/page1.html",
                controller : 'Page1Ctrl',
                controllerAs : 'ctrl',
                access: {restricted: true}
            })
            .state("page2", {
                url: "/page2",
                templateUrl:  "pages/page2.html",
                controller: 'Page2Ctrl',
                controllerAs: 'ctrl',
                access: {restricted: true},
                params: {id: null}
            })
            .state('summary',{
                url : '/summary',
                templateUrl: "pages/summary.html",
                controller : 'SummaryCtrl',
                controllerAs : 'ctrl',
                access: {restricted: true}
            })            
            .state('page3',{
                url : '/page3',
                templateUrl: "pages/page3.html",
                controller : 'Page3Ctrl',
                controllerAs : 'ctrl',
                access: {restricted: true},
                params: {id: null}
            })
            .state('page4',{
                url : '/page4',
                templateUrl: "pages/page4.html",
                controller : 'Page4Ctrl',
                controllerAs : 'ctrl',
                access: {restricted: true}
            })
            .state('page5',{
                url : '/page5',
                templateUrl: "pages/page5.html",
                controller : 'Page5Ctrl',
                controllerAs : 'ctrl',
                access: {restricted: true}
            })
            .state("home", {
                url: "/home",
                templateUrl:  "pages/home.html",
                controller: 'HomeCtrl',
                controllerAs: 'ctrl',
                access: {restricted: true}
            })
            .state('userprofile',{
                url : '/userprofile',
                templateUrl: "pages/user_profile.html",
                controller : 'UserProfileCtrl',
                controllerAs : 'ctrl',
                access: {restricted: true}
            })
            .state('editdoc',{
                url : '/editdoc',
                templateUrl: "pages/editdoc.html",
                controller : 'EditDocCtrl',
                controllerAs : 'ctrl',
                params: {id: null}
            })
            .state('pivottable',{
                url : '/pivottable',
                templateUrl: "pages/pivottable.html",
                controller : 'PivotTableCtrl',
                controllerAs : 'ctrl'
            })

         $urlRouterProvider.otherwise("/login");
    
    }

})();   

(function(){

    angular
        .module("MyApp")
        .run(registerEventHandler);

    registerEventHandler.$inject = ['$rootScope', '$state', 'AuthFactory'];  


    function registerEventHandler($rootScope,$state,AuthFactory ){

        $rootScope.$on('$stateChangeStart', 
            function (event, next, current) {

                AuthFactory
                    .getUserStatus( function(user){
                        console.log(JSON.stringify(user));
                        if(user.status == 200){
                            if (next.access.restricted && !AuthFactory.isLoggedIn()){
                                // $location.path('/login');
                                $state.go('login');
                            }
                        }
                    })


        });

    }



})();

