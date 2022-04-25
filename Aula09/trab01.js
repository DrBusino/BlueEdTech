console.clear();

const prompt = require('prompt-sync')();

console.clear();


const lista = [];

console.log('Digite um número:');
let num1 = +prompt();

while(isNaN(num1) || num1 == '' || num1 % 1 != 0){
    console.log('Digite um NÚMERO:');
    num1 = +prompt();
}

console.log('Digite outro número:');
let num2 = +prompt();


while(isNaN (num2) || num2 == '' || num2 % 1 != 0){
    console.log('Digite outro NÚMERO:');
    num2 = +prompt();
}


if(num2 > num1){

    for(let i = 0; i <= num2 - num1 ; i++){
        lista.push(num1 + i);
    }
}else if (num1 > num2){
    for(let i = 0; i <= num1 - num2 ; i++){
        lista.push(num1 - i);
    }
}else if (num1 == num2){
    lista.push(num1);
}





console.log(lista);

