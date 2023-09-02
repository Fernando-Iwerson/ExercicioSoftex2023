var nota, media, mensagem, notaMinima;

media = 0;

for (let i = 1; i <= 2; i++) {
    nota = parseFloat(prompt(`Informe a ${i}ª nota: `));
    media += nota;
}

notaMinima = (7 * 3 - (media));

if (notaMinima > 10) {
    console.log(`Infellizmente você não tem mais chance de ser aprovado, você precisaria de no mínimo ${notaMinima}`)
}else{
    console.log(`Você precisa tira pelos menos ${notaMinima} pra passar com a média 7!!`)
}

