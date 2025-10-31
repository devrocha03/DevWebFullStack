// String são indexaveis
//            01234567
let string = "O rato roeu a roupa do rei de roma";


console.log(string.indexOf('a', 1));
console.log(string.lastIndexOf('t', 0));
console.log(string.replace(/r/g, '#')); // replace substitui os valores. Usar as barras são Expressões Regulares, pode usar a flag 'g' depois da barra.
console.log(string.length); // length serve para saber o tamanho da string
console.log(string.slice(2, 6)); // slice serve para fazer uma busca específica na string. Para pegar a palavra toda, precisa adicionar um índice a mais
console.log(string.split(' ', 3)); // Split serve para dividir uma string
console.log(string.toUpperCase()); // serve para colocar toda string em letra maiusculas
console.log(string.toLowerCase()); // serve para colocar toda string em letra minúsculas







// Formas de concatenar Strings
/* 
console.log(string[4]);
console.log(string.concat(' em um lindo dia!'));
console.log(string + ' em um lindo dia!');
console.log(`${string} em um lindo dia!`);
 */

/* 
let string = "Um \"texto\""; // Se quiser colocar um texto com aspas duplas dentro de aspas duplas não irá funcionar, mas pode usar as barra invertida (\) para "escapar"
 */

