console.clear();

const prompt = require('prompt-sync')();

console.clear();


let sinergia = 50;






const jurado01 = {
    nome : 'paulinho da força',
    tecnicaJur : 0.2,
    intensidadeJur : 0.5,


}

const bateria = {
    tecnica : 70,
    estetica : 50 ,
    intensidade :76,
    inovaçao : 80,
}

let valorBatInt = bateria.intensidade + bateria.intensidade * sinergia/100;

let notaFinal = valorBatInt * jurado01.intensidadeJur + valorBatInt;

console.log(jurado01.nome + ' \n ' + notaFinal);


