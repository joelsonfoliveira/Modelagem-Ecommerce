"use strict";
class Cliente {
    constructor(nome, CPF) {
        this.nome = nome;
        this.CPF = CPF;
    }
}
let cliente = new Cliente("Paulo", "05524230412");
console.log("Nome: " + cliente.nome);
console.log("CPF: " + cliente.CPF);
