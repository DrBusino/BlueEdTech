
console.clear();

const prompt = require('prompt-sync')();

console.clear();



let pedra = 'Lança e escudo';
let papel = 'Machado de duas mãos';
let tesoura = 'Arco e Flecha';
let contWin = 0;
let contLse = 0;
let lista = [pedra, papel, tesoura];


console.log('quais armas deverão ser utilizadas?');
pedra = prompt('primeira arma: ');
papel = prompt ('segunda arma: ');
tesoura = prompt('terceira arma: ');

console.log('O que você escolhe?');
console.log(`[0] --> ${pedra}`);
console.log(`[1] --> ${papel}`);
console.log(`[2] --> ${tesoura}`);
let randomNum = Math.floor(Math.random()*3);

let resp = prompt('> ');

if (randomNum == resp ){
    prompt(`${randomNum} x ${resp} --- empate`);
}else if ((randomNum == 0 && resp == 1) || (randomNum == 1 && resp == 2 ) || (randomNum == 2 && resp == 0 )){
    prompt(`${randomNum} x ${resp} --- vitória`);

}else if ((randomNum == 1 && resp == 0) || (randomNum == 2 && resp == 1 ) || (randomNum == 0 && resp == 2 )){
    prompt(`${randomNum} x ${resp}--- derrota`);
}else {
    prompt('fazer um while aqui')


    
}



