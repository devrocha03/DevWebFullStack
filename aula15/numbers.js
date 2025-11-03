// IEEE 754-2008 / É um padrão aritmético que não arredonda o número com ponto flutuante 

let num1 = 0.7;
let num2 = 0.1;

// console.log(num1.toString() + num2); // --> toString serve para transformar/parecer um número em string, mas não afeta a variável <--
    
// num1 = num1.toString(); // --> transforma a variável em string <--

// console.log(num1.toString(2)); // mostra o valor da varíavel em números binários

// console.log(num1.toFixed(2)); // mostra o valor da quantidade de casas decimais

// console.log(Number.isInteger(num1)); // saber se o número é inteiro ou não

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));







    
    