const prompt = require('prompt-sync')();



console.clear();



let candidato01 = 0;
let candidato02 = 0;
let candidato03 = 0;


console.log('Quantos eleitores participarão dessa eleição?')
let total = +prompt();


while(isNaN (total) || total == '' || total % 1 != 0 || total < 0){
    console.log('Quantos eleitores participarão dessa eleição?');
    total = +prompt();
}


for(let i = 0; i < total; i++){

    console.log(`Como o ${i +1}º eleitor irá votar?`)
    console.log(`[1] --> Candidato 1
[2] --> Candidato 2
[3] --> Candidato 3`)

    let voto = +prompt();

    while(isNaN (voto) || voto == '' || voto % 1 != 0 || voto < 1 || voto > 3){
        console.log(`Como o ${i +1}º eleitor irá votar?`);
        voto = +prompt();
    }

    if(voto == 1){
        candidato01 ++;
       
    }else if(voto == 2){
        candidato02++;
        
    }else if(voto == 3){
        candidato03++;
        
    }
    

}





console.log(`Resultado das eleições:
Candidato 1 ----> ${candidato01} votos
Candidato 2 ----> ${candidato02} votos
Candidato 3 ----> ${candidato03} votos`)
prompt();












console.clear();