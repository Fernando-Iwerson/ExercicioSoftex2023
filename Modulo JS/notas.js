const prompt = require('prompt-sync')();

var nota,media,mensagem;

media = 0;

for(let i = 1; i <= 3; i++){
    nota = parseFloat(prompt(`Informe a ${i}ª nota: `));
    media += nota
}
 media /= 3;

 mensagem = media >= 7? "Aprovado" : "Reprovado";

 console.log(`sua média foi: ${media.toFixed(2)} então você está: ${mensagem}` );

 