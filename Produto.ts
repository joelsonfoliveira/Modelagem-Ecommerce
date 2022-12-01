class Produto {
  codigo: number;
  descricao: string;
  valor: number;
  ativo: boolean;

  constructor(
    codigo: number,
    descricao: string,
    valor: number,
    ativo: boolean
  ) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.valor = valor;
    this.ativo = ativo;
  }
}
