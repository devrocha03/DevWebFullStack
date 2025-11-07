/*
1. Tipo de Dados Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
  1.1 O valores primitivos são copiados quando passamos o valor dele para outra variável utilizando o sinal de atribuição '='

2. Dados por Referência (mutável) - arrays, objetc, function
  2.1 Valores por referência são criados pelo mesmo valor

*/

/*  
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
