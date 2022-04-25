const prompt = require('prompt-sync')();

console.clear();

console.log('Digite um número inteiro e positivo, diferente de 0');
let num = +prompt();



while(isNaN(num) || num < 1 || num == '' || num % 1 != 0 ){
    console.clear();
    console.log('Digite um número positivo, diferente de 0');
    num = +prompt();
}

console.clear();
console.log('Sequência:')

for(let i = 1; i <= num; i++){

    if(i % 2 == 1){
        
        console.log(i);
    }

}
prompt();
console.clear();


