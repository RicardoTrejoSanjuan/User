'use strict';

function menuCtrl(catalog) {

    var vm = this;
    vm.lstMenu = [];

    vm.$onInit = function () {
        vm.lstMenu = catalog.menuCatalog();
    }
}

angular.module("app").component("menu", {
    bindings: {},
    templateUrl: "app/menu/menu.component.html",
    controller: menuCtrl
});