class Pedido {
  cliente: Cliente;
  produtos: Array<Produto>;
  desconto: number;
  valorTotal: number;

  constructor(
    cliente: Cliente,
    produtos: Array<Produto>,
    desconto: number,
    valorTotal: number
  ) {
    this.cliente = cliente;
    this.produtos = produtos;
    this.desconto = desconto;
    this.valorTotal = valorTotal;
  }
}
