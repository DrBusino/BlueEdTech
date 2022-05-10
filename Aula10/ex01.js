console.clear();

const prompt = require('prompt-sync')();


console.clear();
let primo = true;

console.log('digite um numero inteiro');


let num = +prompt();


for(let i = 2; i < num; i++){

    if(num % i == 0){
     primo = false;
     break;
    }

}
console.clear();
if(primo){
    console.log('este numero é primo');
    prompt();
    
}else{
    console.log(`O número ${num} não é primo`);
    prompt();
}

console.clear();