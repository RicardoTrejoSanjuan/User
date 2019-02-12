function settingsCtrl($rootScope) {
    var vm = this;

    vm.theme;
    vm.themes = ["blue", "green", "purple", "grey"];

    this.$onInit = function () {
        vm.theme = localStorage.getItem("theme") || "blue";
        vm.updateTheme();
    }

    vm.updateTheme = function () {
        console.warn("update theme");
        $rootScope.$broadcast("update-theme", vm.theme);
        localStorage.setItem("theme", vm.theme);
    }
}

angular.module("app").component("settings", {
    bindings: {},
    templateUrl: "app/settings/settings.html",
    controller: settingsCtrl
});