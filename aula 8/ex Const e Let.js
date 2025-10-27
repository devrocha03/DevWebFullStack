const nome = "João Alexandre";
const sobrenome = "Rocha";
const idade = 35;
const peso = 71;
const altura = 1.80;
let imc; // imc = peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, possui ${altura}m de altura e seu IMC é de ${imc} e nasceu em ${anoNascimento}.`);



