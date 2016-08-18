namespace Day24 {

    angular.module('Day24', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: Day24.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: Day24.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: Day24.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: Day24.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: Day24.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: Day24.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: '/ngApp/views/categories.html',
                controller: Day24.Controllers.CategoryController,
                controllerAs: 'controller'
            })
            .state('categoriesCreate', {
                url: '/categories/create',
                templateUrl: '/ngApp/views/categoriesCreate.html',
                controller: Day24.Controllers.CategoryCreateController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url: '/movies/:categoryId',
                templateUrl: '/ngApp/views/movies.html',
                controller: Day24.Controllers.MovieController,
                controllerAs: 'controller'
            })
            .state('moviesCreate', {
                url: '/movies/create/:categoryId',
                templateUrl: '/ngApp/views/moviesCreate.html',
                controller: Day24.Controllers.MovieCreateController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('Day24').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('Day24').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
