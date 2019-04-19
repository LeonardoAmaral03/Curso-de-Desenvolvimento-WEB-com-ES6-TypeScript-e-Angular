"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (obeject) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (obeject) {
        console.log('lógica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
