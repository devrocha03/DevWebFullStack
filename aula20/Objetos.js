/*
 * Para criar um objeto precisa abrir chaves {} e dentro adicionar os atributos
 * Abaixo várias formas de construir e manipular dados no formato de objeto

! 1. Objeto literal completo (com métodos)
const pessoa1 = {
  nome: "João",
  sobrenome: "Rocha",
  idade: 35,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade}`);
  },

  incrementarIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementarIdade();
pessoa1.fala();
pessoa1.incrementarIdade();
pessoa1.fala();
! --------------------------------------------------------------------------

! 2. Função fábrica (Factory Function)
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
} 

const pessoa1 = criaPessoa("João", "Rocha", 35);
const pessoa2 = criaPessoa("Maria", "James", 25);
const pessoa3 = criaPessoa("John", "Tatum", 88);
const pessoa4 = criaPessoa("Caio", "Wall", 55);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
! --------------------------------------------------------------------------


! 3. Objeto literal simples
const pessoa = { primeiroNome: "João", segundoNome: "Alexandre", idade: 35 };
! --------------------------------------------------------------------------


! 4. Criando objeto vazio e depois adicionando propriedades
const pessoas1 = {};
pessoas1.primeiroNome = "João";
pessoas1.segundoNome = "Alexandre"
pessoas1.idade = 35;
! -----------------------------------------------------------------------------
*/
