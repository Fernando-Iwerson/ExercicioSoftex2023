
var num1, num2, operacao;

num1 = parseFloat(prompt("Informe o primeiro numero da operação: "));
num2 = parseFloat(prompt("Informe o segundo numero da operação: "));

operacao = prompt("Que operação você quer realizar? (+, -, /, * ): ");

function resultado(){
    
    if (operacao == "+"){
        return num1 + num2;
    }else if(operacao == "-"){
        return num1 - num2;
    }else if(operacao == "*"){
        return num1 * num2;
    }else if(operacao == "/"){
        return num1 / num2;
    }else{
        console.log("Operação inválida")
    }
    

}
console.log(`O resultado de ${num1} ${operacao} ${num2} = ${resultado()}`);