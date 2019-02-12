angular.module("app", ["ngRoute", "ngAnimate", "ngAria", "ngMaterial", "md.data.table"]);

angular.module("app").config(function ($mdThemingProvider, $mdIconProvider, $provide) {
    $mdIconProvider
        .icon("angular", "../assets/angular.svg", 128)

    $mdThemingProvider.theme("blue")
        .primaryPalette("blue")
        .accentPalette("red");

    $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.theme("purple")
        .primaryPalette("deep-purple")
        .accentPalette("red");
    
    $mdThemingProvider.theme("grey")
        .primaryPalette("blue-grey")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
});

angular.module("app").config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);
});