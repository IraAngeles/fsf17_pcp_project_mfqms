(function () {
    angular
        .module("MyApp")
        .config(myAppConfig);

    myAppConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function myAppConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('page1',{
                url : '/page1',
                templateUrl: "pages/page1.html",
                controller : 'Page1Ctrl',
                controllerAs : 'ctrl'
            })
            .state('page2',{
                url : '/page2',
                templateUrl: "pages/page2.html",
                controller : 'Page2Ctrl',
                controllerAs : 'ctrl'
            })
            .state('page3',{
                url : '/page3',
                templateUrl: "pages/page3.html",
                controller : 'Page3Ctrl',
                controllerAs : 'ctrl'
            })
            .state('page4',{
                url : '/page4',
                templateUrl: "pages/page4.html",
                controller : 'Page4Ctrl',
                controllerAs : 'ctrl'
            })
            .state('page5',{
                url : '/page5',
                templateUrl: "pages/page5.html",
                controller : 'Page5Ctrl',
                controllerAs : 'ctrl'
            })
            .state('login',{
                url : '/login',
                templateUrl: "pages/login.html",
                controller : 'LoginCtrl',
                controllerAs : 'ctrl'
            })
            .state('register',{
                url : '/register',
                templateUrl: "pages/register.html",
                controller : 'RegisterCtrl',
                controllerAs : 'ctrl'
            })
            .state('home',{
                url : '/home',
                templateUrl: "pages/home.html",
                controller : 'HomeCtrl',
                controllerAs : 'ctrl'
            })

         $urlRouterProvider.otherwise("/home");
    
    }

})();           