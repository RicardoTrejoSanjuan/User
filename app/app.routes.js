angular.module("app").config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/users', { template: "<users></users>" });
    
    $routeProvider.when('/newuser', { template: "<newuser></newuser>" });

    $routeProvider.when('/settings', { template: "<settings></settings>" });

    $routeProvider.when('/menu', { template: "<menu></menu>" });

    $routeProvider.otherwise({ redirectTo: "/users" });
});