const prompt = require('prompt-sync')();

let diasDeIdade  = prompt ('Dias de idade: \n');

let anos  =   (diasDeIdade - (diasDeIdade % 365)) / 365;
let diasMeses = diasDeIdade % 365;
let meses = 0;
let dias = 0;


if( diasMeses === 0){

    meses = 0;

}
else if  (diasMeses < 30){

    meses = 0;
    dias = diasMeses;

}
else{
    if (diasMeses % 30  === 0){
        meses = diasMeses / 30;
        dias = 0;
    }

    else{
        let resto = diasMeses % 30;
        meses = (diasMeses - resto) / 30;
        dias = resto;
    }
}
    

console.log (anos , 'anos' , meses , 'meses', dias ,'dias');


