angular.module("app").config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/user', { template: "<user></user>" });

    $routeProvider.when('/settings', { template: "<settings></settings>" });

    $routeProvider.when('/menu', { template: "<menu></menu>" });

    $routeProvider.otherwise({ redirectTo: "/menu" });
});