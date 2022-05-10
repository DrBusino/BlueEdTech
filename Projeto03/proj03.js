


const prompt = require('prompt-sync')();


console.clear();

let novoCiclo = true;
let resp = '';
let parque = 'parque da cidade';
let praia = 'praia';
let casa = 'casa';
let mercado = 'mercadinho';
let olhoVidroNaBolsa = false;
let lagrimaCaoNaBolsa = false;
let areiaNaBolsa = false;

const listaLocais = [parque, praia, mercado];
const listaItens = ['Olho de vidro', 'Lágrima de Cachorro', 'Areia da Praia', [olhoVidroNaBolsa  ,lagrimaCaoNaBolsa ,areiaNaBolsa]];
 

const player = {

    sono : 0,
    horas : 10,
    dias : 1,
    local : casa,

};


   

function pegarIngrediente (item){
    console.log(`Pegar ${listaItens[item]}?`);
    resp = prompt().toLowerCase();
    while(resp != 's' && resp != 'n'){
        console.log('Digite "s" ou "n" para responder');
        resp = prompt().toLowerCase();
    };
    if(resp == 's'){

        listaItens[3][item] = true;
        console.log(`Você adicionou o ingrediente ${listaItens[item]} à sua bolsa`);

    }else if(resp == 'n' ){
        console.log(`Você não adicionou o ingrediente ${listaItens[item]} à sua bolsa`);
    };
};
 
function sairCasa(localIr, horaAtual){

    if((localIr == parque || localIr == mercado) && horaAtual >= 18){
        tela();
        console.log(`O ${listaLocais[localIr]} já está fechado`);
        
    }else{
        player.local = localIr;
        horaPassa();
        console.log(`Você chegou ao ${listaLocais[localIr]}`);
    }

};





function tela (){
    console.log('--------------------------------');
    console.log(`Sono: ${player.sono}
ingredientes:
Olho de vidro  -->${listaItens[3][0]}
Lágrima de Cão -->${listaItens[3][1]}
Areia da praia -->${listaItens[3][2]}

Horas: ${player.horas}H    Dia: ${player.dias}
Local: ${player.local}`);

    console.log('-------------------------------');
    console.log('sair');
    resp = prompt().toLowerCase();
    if(resp == 's'){
        novoCiclo = false;
    }

}

function dormir(localAtual){

    if(localAtual == casa){
        console.log(`Você está muito cansado e foi dormir`);
        prompt();
        player.horas = 10;
        player.dias++;
        player.sono = 0;
        
    }else{
        console.log(`Você está muito cansado e foi para casa dormir`);
        prompt();
        player.local = casa;
        player.horas = 10;
        player.dias++;
        player.sono = 0;
        
    };

}



function horaPassa(){
    console.clear();
    tela();
    player.horas++;
    player.sono++;
    
    if(player.sono > 12){
        dormir(player.local);
    }


};

function inicio (){
    console.log(`Assim que você acordou percebeu que não era um dia comum.
Talvez seja a temperatura, mesmo sendo verão o tempo estava um pouco mais frio que de costume.
Pode ser também o travesseiro novo, ainda estava muito duro.
Ou talvez, sem sabe, seja poque UM HOMEM ESTRANHO VESTIDO DE GANDALF COLORIDO ESTAVA TE OLHANDO EM FRENTE A SUA CAMA!`);
    prompt();
    console.log(`Olá, meu jovem.
Eu tenho uma missão para você.
Eu preciso muito fazer uma poção e estou sem tempo.
Você será muito bem recompensado!
Eu precisarei de três ingredientes:
AREIA DA PRAIA
LÁGRIMAS DE UM CACHORRO (não importa a raça)
UM OLHO DE VIDRO (vou precisar de apenas um mesmo)`);
    prompt();
    console.log(`Você aceitou a missão, você quer muito uma aventura!`);
    prompt();
    console.log(`Ah! já ia esquecendo...
Você tem apenas UM dia para completar essa missão.
Mas você tem sorte, vou jogar um feitiço que faz esse dia se repetir 5 vezes.
Ah, e aqui está uma sacola,
nela você poderá colocar um ingrediente por dia e ele ficará por lá até o fim do jog... err, quer dizer, da missão`);
    prompt();
    console.clear();
        
        
}









while(novoCiclo){
    
    if(player.dias == 1){
        inicio();
    }
    tela();  
    console.log(`Você saiu da cama
Para onde você vai agora?`);
    console.log(`[0] Para o parque da cidade
[1] Para a praia
[2] Para o mercadinho
[3] Ficar em casa`);

    resp = +prompt();

    while(resp == isNaN || resp > 2 || resp < 0){
        console.log(`responda [0], [1], [2] ou [3]`)
        resp = +prompt();
    }


    


   

   

    if(player.dias >= 5){
        novoCiclo = false;
        prompt('Você Perdeu')
        prompt();
    };
    

}