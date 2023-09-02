const prompt = require('prompt-sync')();

var nomeComp,anoNascimento,idade,anoAtual;

anoAtual = 2022

function validarAnoNascimento(anoNascimento){

    if(anoNascimento >= 1922 && anoNascimento < anoAtual){
        return true;
    }else{
        console.log("Ano só pode ser entre 1922 e 2021 ");
        return false;
    }
    
}
nomeComp = prompt("Diga seu nome Completo: " );
anoNascimento = parseInt(prompt("Diga o ano que você nasceu: "));

while(validarAnoNascimento(anoNascimento) == false){
    
    anoNascimento = parseInt(prompt("Diga o ano que você nasceu: "));
    continue;
                 
        }

   
console.log("Seu nome é:",nomeComp);
console.log("voce nasceu em: ",anoNascimento);
idade = anoAtual - anoNascimento;
console.log("Você completou ou Completará: ",idade);



