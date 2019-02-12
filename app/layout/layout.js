function layoutCtrl($mdSidenav, $rootScope, $scope) {
    var vm = this;

    this.$onInit = function () {
    }

    $rootScope.$on('$routeChangeStart', function (event) {
        $mdSidenav("left").close();
    });

    vm.menu = [
        { link: "newuser", title: "Alta Usuarios", icon: "widgets" },
        { link: "users", title: "Lista de Usuarios", icon: "widgets" },
        { link: "settings", title: "Configuración", icon: "settings" },
        // { link: "menu", title: "menu", icon: "menu" }
    ];

    vm.currentTheme = localStorage.getItem("theme") || "blue";
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