let nomes = ["Nando","Gustavao","Luan","Laura","Davi","Lucas","Flávio","Lilia","Diogo","João"];
let idade = [33,15,3,5,38,29,37,54,41,9];
let coresFavoritas = ["Vermelho","Verde","Azul","Amarelo","Roxo","Violeta","Marrom","Laranja","preto","Rosa"];

console.log(` Nomes: ${nomes}\n Suas Idades: ${idade}\n Cores Favoritas: ${coresFavoritas}`);

coresFavoritas.splice(3,1,"Pink");
idade.splice(0,1,40);

console.log(` Nomes: ${nomes}\n Suas Idades: ${idade}\n Cores Favoritas: ${coresFavoritas}`);

