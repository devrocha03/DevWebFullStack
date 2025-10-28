// Tipos de dados primitivos em JavaScript (string, number, undefined, null, boolean)

const nome = "João"; // string
const nome1 = 'Maria'; // string
const nome2 = `Pedro`; // string
const num1 = 10; // number
const num2 = 12.33; // number
let nomeAluno; // undefined -> não aponta para nenhum local na memória, pois não foi inicializada
const sobrenomeAluno = null; // nulo -> não aponta para nenhum local na memória
const aprovado = true; // boolean -> true ou false

console.log(typeof nome, nome); // -> mostra o tipo da variável e o valor

let a = 2;
const b = a; // b recebe uma cópia do valor de a
console.log(a ,b);

a = 3; // alterando o valor de a
console.log(a, b); // b permanece com o valor antigo