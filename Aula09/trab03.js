const prompt = require('prompt-sync')();

console.clear();


const lista = [];

let lenLista = 0;
let num;
let soma = 0;

console.log('Qunatos números pretende inserir?');
lenLista = +prompt();


while(isNaN (lenLista) || lenLista == '' || lenLista % 1 != 0 || lenLista < 0){
    console.log('Qunatos números pretende inserir?');
    lenLista = +prompt();
}


for(let i = 0; i < lenLista; i++){

    console.log('Insira um número: ');
    num = +prompt();
    lista.push(num);
    soma = soma + num;
 

    while(isNaN(num)){
        console.log('Insira um NÚMERO: ');
        num = +prompt();
    }
 
    console.log(`Número ${num} inserido com sucesso`);


}



lista.sort();
menorNum = lista[0];
maiorNum = lista[lista.length - 1];




/*
let maiorNum = lista[0];
let menorNum = lista[0];
for ( numero of lista){
    if (numero <= menorNum){
        menorNum = numero;
        
    }else if(numero >= maiorNum){
        maiorNum = numero;
        
    }

}
*/


console.log(lista);
console.log(`O menor número é o ${menorNum} --- ${typeof(menorNum)}`);
console.log(`O maior número é o ${maiorNum} --- ${typeof(maiorNum)}`);
console.log(`A soma dos números é ${soma}`);
prompt();
console.clear();

