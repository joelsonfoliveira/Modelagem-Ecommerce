class Cliente {
  nome: string;
  CPF: string;

  constructor(nome: string, CPF: string) {
    this.nome = nome;
    this.CPF = CPF;
  }
}

let cliente = new Cliente("Paulo", "05524230412");
console.log("Nome: " + cliente.nome);
console.log("CPF: " + cliente.CPF);
