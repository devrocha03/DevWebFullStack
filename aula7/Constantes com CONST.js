// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não podemos começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase para nomear constantes com mais de uma palavra
// constantes são case-sensitive (diferenciam maiúsculas de minúsculas)
// Não podemos modificar o valor de uma constante
// Não utilize VAR para declarar constantes, UTILIZE CONST!

const nome = "Joao";
console.log(nome);

const primeroNumero = 5;
const segundoNumero = 10;
const resultado = primeroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5; // cuidado com a retribuição
console.log(resultadoTriplicado);

// usar o typeof para saber o tipo de dado da constante

console.log(typeof (primeroNumero + segundoNumero)); // fechado com parenteses para priorizar a soma

