'use strict';

angular.module("app").constant("catalog", {
    getColums: () => {
        return [
            { key: 'id', name: 'Id' },
            { key: 'user', name: 'Usuario' },
            { key: 'email', name: 'Correo Electrónico' },
            { key: 'sexo', name: 'Sexo' },
            { key: 'status', name: 'Estatus' },
            // { key: 'date', name: 'Fecha de Creación' },
            { key: 'operations', name: 'Operaciones' }
        ]
    },
    getStatus: () => {
        return [
            { 'id': true, 'name': 'Activo' },
            { 'id': false, 'name': 'Inactivo' }
        ];
    },
    getSexo: () => {
        return [
            { 'id': 1, 'name': 'Masculino' },
            { 'id': 2, 'name': 'Femenino' }
        ];
    },
    newUser: () => {
        return {
            'id': null,
            'email': '',
            'user': '',
            'status': null,
            'sexo': null,
            'date': '',
            'update': null
        }
    },
    menuCatalog: function () {
        return [
            { name: "Nuevo usuario", path: "newUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Consulta", path: "viewUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Modificar", path: "updateUser", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
            { name: "Configuración", path: "settings", color: "blue", imagen: "", claseFondo: "", claseIcono: "" },
        ]
    }
});