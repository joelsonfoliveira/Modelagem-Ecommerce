class PedidoProduto {
  pedido: Pedido;
  produtos: Array<Produto>;

  constructor(pedido: Pedido, produtos: Array<Produto>) {
    this.pedido = pedido;
    this.produtos = produtos;
  }
}
