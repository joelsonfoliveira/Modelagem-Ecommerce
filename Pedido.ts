class Pedido {
  CPFCliente: string;
  produtos: Array<Produto>;
  desconto: number;
  valorTotal: number;

  constructor(
    CPFCliente: string,
    produtos: Array<Produto>,
    desconto: number,
    valorTotal: number
  ) {
    this.CPFCliente = CPFCliente;
    this.produtos = produtos;
    this.desconto = desconto;
    this.valorTotal = valorTotal;
  }
}
