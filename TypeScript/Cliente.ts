class Cliente {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;

  constructor(id: number, nome: string, endereco: string, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

let cliente = new Cliente(1, "Joelson Freitas", "Rua 01", "(00) 00000-0000");
console.clear();
console.log("===== CLIENTE =====");
console.log("Identificador: " + cliente.id);
console.log("Nome: " + cliente.nome);
console.log("Endereço: " + cliente.endereco);
console.log("Telefone: " + cliente.telefone);
