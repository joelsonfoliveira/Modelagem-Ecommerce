"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(nome, CPF) {
        this.nome = nome;
        this.CPF = CPF;
    }
    return Cliente;
}());
var cliente = new Cliente("Paulo", "05524230412");
console.log("Nome: " + cliente.nome);
console.log("CPF: " + cliente.CPF);
