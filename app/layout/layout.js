function layoutCtrl($mdSidenav, $rootScope, $scope) {
    var vm = this;

    this.$onInit = function () {
    }

    $rootScope.$on('$routeChangeStart', function (event) {
        $mdSidenav("left").close();
    });

    vm.menu = [
        { link: "user", title: "User", icon: "widgets" },
        { link: "settings", title: "Settings", icon: "settings" },
        { link: "menu", title: "menu", icon: "menu" }
    ];

    vm.currentTheme = "blue";
    $scope.$on('update-theme', function (event, args) {
        vm.currentTheme = args;
    });

    vm.toggleNav = function () {
        $mdSidenav("left").toggle();
    }
}

angular.module("app").component("layout", {
    templateUrl: "app/layout/layout.html",
    controller: layoutCtrl
});