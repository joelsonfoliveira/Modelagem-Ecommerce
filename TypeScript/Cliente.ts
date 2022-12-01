class Cliente {
  nome: string;
  endereco: string;
  telefone: string;

  constructor(nome: string, endereco: string, telefone: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

let cliente = new Cliente("Joelson Freitas", "Rua 01", "(00) 00000-0000");
console.log("Nome: " + cliente.nome);
console.log("CPF: " + cliente.endereco);
console.log("CPF: " + cliente.telefone);
