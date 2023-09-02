var nome,salario,idade,possuiDiploma = true;

nome = prompt("Informe seu nome: ");
salario = parseFloat(prompt("Informe o seu salário: "));
idade = parseInt(prompt("Informe sua idade: "));

let diploma = possuiDiploma ? "Possuo Diploma" : "Não possuo Diploma"
    

console.log(`Meu nome é ${nome} - Meu salário é R$ ${salario} - tenho ${idade} anos e ${diploma}`)

