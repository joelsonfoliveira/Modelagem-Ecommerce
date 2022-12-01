"use strict";
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, desconto, valorTotal) {
        this.cliente = cliente;
        this.produto = produto;
        this.desconto = desconto;
        this.valorTotal = valorTotal;
    }
    return Pedido;
}());
var pedido = new Pedido(cliente, produto, 0, 4500);
console.log(pedido);
