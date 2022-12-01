"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, endereco, telefone) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    return Cliente;
}());
var cliente = new Cliente(1, "Joelson Freitas", "Rua 01", "(00) 00000-0000");
console.clear();
console.log("===== CLIENTE =====");
console.log("Identificador: " + cliente.id);
console.log("Nome: " + cliente.nome);
console.log("Endereço: " + cliente.endereco);
console.log("Telefone: " + cliente.telefone);
