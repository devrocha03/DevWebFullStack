//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']; 


console.log(alunos.slice(0, 4)); // --> fatiar para acessar a array. Inicia no indice 0 até o índice desejado


console.log(alunos[50]); // --> acessar um item que não tem na lista será undefined


delete alunos[1]; // --> deleta o índice desejado, porém fica 1 item vazio


alunos.shift(); // --> remove o primeiro da lista


alunos.pop(); // --> .pop remove o último da lista


alunos.unshift('Luiza'); // --> .unshift adiciona ao início da array


alunos.push('Luiza', 'Lia');  // --> .push adiciona um item ao final da lista
alunos.push('Otávio');


alunos[0] = 'Eduardo'; // --> altera na array porque o índice 0 já existe
alunos[3] = 'Luiza'; // --> adicionando na array porque na array não tem índice 3


console.log(alunos[]); // --> Acessa todos da Array
console.log(alunos[0]); // --> Acessando o indice 0
console.log(alunos[2]); // --> Acessando o indice 2
