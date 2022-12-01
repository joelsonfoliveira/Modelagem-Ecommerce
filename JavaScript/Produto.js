"use strict";
var Produto = /** @class */ (function () {
    function Produto(codigo, descricao, quantidade, valor, ativo) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
        this.ativo = ativo;
    }
    return Produto;
}());
var produto = new Produto(1, "Mouse", 10, 5, false);
console.clear();
console.log("===== PRODUTO =====");
console.log("Código: " + produto.codigo);
console.log("Descrição: " + produto.descricao);
console.log("Quantidade: " + produto.quantidade);
console.log("Valor: R$" + produto.valor);
console.log("Situação: " + (produto.ativo ? "Ativado" : "Desativado"));
