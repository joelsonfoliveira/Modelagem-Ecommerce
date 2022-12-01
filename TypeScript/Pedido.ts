class Pedido {
  cliente: Cliente;
  produto: Produto;
  desconto: number;
  valorTotal: number;

  constructor(
    cliente: Cliente,
    produto: Produto,
    desconto: number,
    valorTotal: number
  ) {
    this.cliente = cliente;
    this.produto = produto;
    this.desconto = desconto;
    this.valorTotal = valorTotal;
  }
}

let pedido = new Pedido(cliente, produto, 2, 20);
console.log(pedido);
