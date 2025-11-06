
// Um jeito bem mais simplificado para executar function
const raiz1 = n => n ** 0.5;
console.log(raiz1(81));


// --------------------------------------------------------------------------
// --> Um jeito mais moderno de usar uma Function é usar Arrow function "=>"
const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// --------------------------------------------------------------------------

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 9));

// ---------------------------------------------------------------------------

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('João');
console.log(variavel);


/* Obs.: É mais viável criar várias funçoes pequenas para cada especialidade 
ao invés de criar uma funcão com inúmeros códigos que executam várias coisas */