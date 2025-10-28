/* Aritméticos 

 -> (+) Adição e concatenação
 -> (-) Subtração
 -> (*) Multiplicação
 -> (/) Divisão
 -> (**) Exponenciação
 -> (%) Resto da divisão

 --> Precedência dos operadores
	  1. () 
		2. **
		3. * / %
		4. + -

  --> Incremento e Decremento
		1. Incremento = ++
			1.1 Pré-incremento e Pós-incremento

		2. Decremento = --
			2.1 Pré-decremento e Pós-decremento
*/

const num10 = 10;
const num20 = 3;
console.log(num10 % num20);

// Incremento
let contador1 = 1;
contador1++;
console.log(contador1);

// Operadores de atribuição
let contador2 = 3;
contador2 *= 2; // contador2 = contador2 * 2
console.log(contador2)

let contador3 = 5;
contador3 **= 3;
console.log(contador3) 

// NaN - Not a Number. Erro de cálculo. parseInt (inteiro) e parseFloat (decimal)
const num1 = 10;
const num2 = Number('Luiz');
console.log(num1 + num2); // NaN
console.log(typeof num2);