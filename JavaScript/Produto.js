"use strict";
var Produto = /** @class */ (function () {
    function Produto(id, nome, codigo_barras, quantidade, preco, situacao) {
        this.id = id;
        this.nome = nome;
        this.codigo_barras = codigo_barras;
        this.quantidade = quantidade;
        this.preco = preco;
        this.situacao = situacao;
    }
    return Produto;
}());
var produto = new Produto(1, "Notebook Dell", "7800000000001", 1, 4500, true);
console.clear();
console.log("===== PRODUTO =====");
console.log("Identificador: " + produto.id);
console.log("Nome: " + produto.nome);
console.log("Código de Barras: " + produto.codigo_barras);
console.log("Quantidade: " + produto.quantidade);
console.log("Preço: R$" + produto.preco);
console.log("Situação: " + (produto.situacao ? "Novo" : "Usado"));
