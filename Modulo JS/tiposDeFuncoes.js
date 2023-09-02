var num1,num2,resultadoSoma,resultadoMultiplicacao;

// Função tradicional sem parâmetro
function bemvindo(){
    console.log("Bem vindo a calculadora simples");
}

// Função com parâmetro e um retorno de valor
function somar(a,b){
    return a+b;
}

// Função arrow function com parâmetro e retorno de valor
const multiplicação = (a,b) => a*b;

bemvindo();

num1 = parseFloat(prompt("Informe o 1º número: "));
num2 = parseFloat(prompt("Informe o 2º número: "));


resultadoSoma = somar(num1,num2);
console.log(`A Soma de ${num1} + ${num2} = ${resultadoSoma}`);

resultadoMultiplicacao = multiplicação(num1,num2);
console.log(`A Multiplicação de ${num1} * ${num2} = ${resultadoMultiplicacao}`);