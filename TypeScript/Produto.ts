class Produto {
  codigo: number;
  descricao: string;
  quantidade: number;
  valor: number;
  ativo: boolean;

  constructor(
    codigo: number,
    descricao: string,
    quantidade: number,
    valor: number,
    ativo: boolean
  ) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.valor = valor;
    this.ativo = ativo;
  }
}

let produto = new Produto(1, "Mouse", 10, 5, true);
console.clear();
console.log("===== PRODUTO =====");
console.log("Código: " + produto.codigo);
console.log("Descrição: " + produto.descricao);
console.log("Quantidade: " + produto.quantidade);
console.log("Valor: R$" + produto.valor);
console.log("Situação: " + (produto.ativo ? "Ativado" : "Desativado"));
