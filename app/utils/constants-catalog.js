'use strict';

angular.module("app").constant("catalog", {
    menuCatalog: function () {
        return [
            { name: "Nuevo usuario", path: "newUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Consulta", path: "viewUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Modificar", path: "updateUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Configuración", path: "settings", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
        ]
    }
});