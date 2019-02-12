'use strict';

function usersCtrl(catalog, operator, $filter) {
    var vm = this;

    vm.columns = [];
    vm.lock = false;
    vm.new = false;
    vm.newUser = {};

    vm.$onInit = function () {
        vm.columns = catalog.getColums();
        vm.listStatus = catalog.getStatus();
        vm.listSexo = catalog.getSexo();

        // vm.newUser = catalog.newUser();

        vm.getUsers();

        // localStorage.setItem("memoryCal", 0);
    }

    vm.getUsers = () => {
        vm.data = [
            { 'id': 1, 'email': 'ricardo@gmail.com', 'user': 'Ricardo', 'status': true, 'sexo': 1, 'date': '09/01/1994', 'update': false },
            { 'id': 2, 'email': 'ely@gmail.com', 'user': 'Ely', 'status': false, 'sexo': 2, 'date': '09-01-1994', 'update': false },
        ];
    };

    vm.returnSexo = (id) => {
        let element = vm.listSexo.find((item) => {
            return item.id == id;
        });
        return element.name;
    }

    vm.returnStatus= (id) => {
        let element = vm.listStatus.find((item) => {
            return item.id == id;
        });
        return element.name;
    }

    vm.addUser = () => {
        vm.new = true;
        vm.lock = true;
    }

    vm.updateItem = (item) => {
        item.update = true;
    };

    vm.editItem = (item) => {
        item.update = true;
        vm.lock = true;
    };

    vm.saveUpdate = (item) => {
        item.update = false;
        vm.lock = false;
    };

    vm.cancelEdit = (item) => {
        item.update = false;
        vm.lock = false;
    };

    vm.saveNewUser = () => {
        
        vm.newUser.email

        // let valid = vm.ValidateInfo(vm.newUser);

        let valid = true;

        if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(vm.newUser.email))){
            valid = false;
        }
        if (!(/^[a-zA-Z0-9]{7,}$/i.test(vm.newUser.user))) {
            valid = false;
        }
        if (vm.newUser.sexo == null) {
            valid = false;
        }
        if (vm.newUser.status  == null) {
            valid = false;
        }
        
        // password
        // if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{10,}*$/i.test(vm.newUser.user))) {
            
        // }

        // if (re.test($ctrl.newUser.user)) {
        //     valid = false;
        // }
            // alert("La dirección de email " + vm.newUser.email + " es correcta!.");
        // } else {
            // alert("La dirección de email es incorrecta!.");
            
        // }
        vm.new = false;
    };

    // vm.cancelNewUser = () => {
    //     vm.newUser = {
    //         'id': null,
    //         'email': '',
    //         'user': '',
    //         'status': null,
    //         'sexo': null,
    //         'date': '',
    //         'update': null
    //     };
    //     vm.new = false;
    //     vm.lock = false;
    // };




    vm.myDate = new Date();







      vm.selected = [];

    

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

    ///operaciones calcu

    // Eliminar
    vm.delete = function () {
        vm.answer = vm.answer.substring(0, vm.answer.length - 1);
    }

    vm.parseValue = function (num) {
        return parseFloat(num);
    }
}

angular.module("app").component("users", {
    bindings: {},
    templateUrl: "app/users/users.component.html",
    controller: usersCtrl
});