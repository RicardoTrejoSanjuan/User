'use strict';

function userCtrl(operator, memory) {

    var vm = this;

    vm.answer = null;
    vm.operator = null;
    vm.value = null;

    vm.$onInit = function () {
        vm.answer = '';
        vm.value = NaN;
        vm.operator = '';
        localStorage.setItem("memoryCal", 0);
    }

    vm.displayedColumns = ['position', 'name', 'weight', 'symbol'];

    vm.PeriodicElement = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];

      vm.selected = [];

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

    // resolver operacion
    vm.resolve = function () {
        if (vm.answer != "") {
            var result = operator.resolveOperation(vm.answer);
            if (result == "Infinity") {
                alert("Infinity");
                return 0
            } else if (result != null && result != "Infinity") {
                return result
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    vm.equals = function () {
        var result = vm.resolve();
        if (result != false) {
            vm.answer = result;
        } else {
            vm.answer = '';
        }
    }

    // Limpiar memoria
    this.memoryClear = function () {
        memory.memoryClear();
        vm.answer = '';
    }

    // Suma el número mostrado a otro número que se encuentre en memoria
    vm.memoryAdd = function () {
        var result = vm.resolve();
        if (result != false) {
            memory.memoryAdd(result);
        }
        vm.answer = ''
    }

    // Resta el número mostrado a otro número que se encuentre en memoria
    vm.memorySubtractions = function () {
        var result = vm.resolve();
        if (result != false) {
            memory.memorySubtractions(result);
        }
        vm.answer = '';
    }

    // Almacenar en memoria
    vm.memoryStorage = function () {
        var result = vm.resolve();
        if (result != false) {
            memory.memoryStorage(result);
        }
        vm.answer = '';
    }

    // Recuperar memoria    
    vm.memoryRecall = function () {
        vm.answer = memory.memoryRecall();
    }

    // Elimina el número mostrado
    vm.clearError = function () {
        vm.answer = '';
    }

    // Elimina todo el cálculo actual. 
    vm.clearFunction = function () {
        vm.answer = '';
    }

    // Eliminar
    vm.delete = function () {
        vm.answer = vm.answer.substring(0, vm.answer.length - 1);
    }

    vm.parseValue = function (num) {
        return parseFloat(num);
    }
}

angular.module("app").component("user", {
    bindings: {},
    templateUrl: "app/user/user.component.html",
    controller: userCtrl
});