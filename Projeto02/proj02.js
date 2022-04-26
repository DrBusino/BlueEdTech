
console.clear();

const prompt = require('prompt-sync')();

console.clear();







let pedra = 'Lança e escudo';
let papel = 'Machado de duas mãos';
let tesoura = 'Arco e Flecha';
let contWin = 0;
let contLse = 0;
let contDrw = 0;
let lista = [pedra, papel, tesoura];
let totalPartidas = 1;
let newGame = true;




while(newGame == true){
    newGame == false;
    console.clear();
    console.log('O jogo é bem simples:');
    console.log('Você escolhe uma arma e seu inimigo também');
    console.log('O Jogo é baseado na sorte mas é importante saber qual arma vence outra');
    console.log('Vamos lá');
    prompt('ENTER');
    console.log('A Lança e escudo vence o Arco e Flecha');
    console.log('O Machado de suas mãos vence a Lança e escudo');
    console.log('E finalmente...')
    console.log('O Arco e Flecha vence o Machado de duas mãos')
    prompt('ENTER');
    console.log('Gostaria que eu repita as regras?[S/N]')
    let resp1 = prompt().toUpperCase();

    while(resp1 != 'S' && resp1 != 'N'){

        console.clear();
        console.log('Gostaria que eu repita as regras?[S/N]');
        console.log('Digite [S] para sim e [N] para não')
        resp1 = prompt().toUpperCase();


    }while(resp1 == 'S'){
        console.log('Vamos lá ');
        prompt('ENTER');
        console.log('A Lança e escudo vence o Arco e Flecha');
        console.log('O Machado de suas mãos vence a Lança e escudo');
        console.log('E finalmente...')
        console.log('O Arco e Flecha vence o Machado de duas mãos')
        prompt('ENTER');
        console.clear();
        console.log('Gostaria que eu repita as regras?[S/N]');
        console.log('Digite [S] para sim e [N] para não');
        resp1 = prompt().toUpperCase();
    }



    console.log('Prepare-se para a grande batalha');
    console.log('O jogo já começou!');
    prompt('ENTER');
    console.clear();
    console.log('Quantas rodadadas o jogo deve ter?');
    totalPartidas = prompt();

    while(isNaN(totalPartidas) || totalPartidas % 1 != 0 || totalPartidas <= 0){
        console.clear();
        console.log('Digite um número inteiro e positivo');
        console.log('Quantas rodadadas o jogo deve ter?');
    }

    console.log(`Você jogará ${totalPartidas} partidas`);
    prompt('ENTER');


    for(let i = 0; i < totalPartidas; i++){
        console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
        console.log('---------------------------------');
        console.log();
        console.log('Escolha suas armas: ');
        console.log(`[0] --> ${pedra}`);
        console.log(`[1] --> ${papel}`);
        console.log(`[2] --> ${tesoura}`);


        let resp = prompt();
        console.clear();

        while(isNaN(resp) || resp > 3 || resp < 0 || resp % 1 != 0){
            console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
            console.log('---------------------------------');
            console.log();
            console.log('escolha um número entre [0] e [2]');
            console.log();
            console.log('O que você escolhe?');
            console.log(`[0] --> ${pedra}`);
            console.log(`[1] --> ${papel}`);
            console.log(`[2] --> ${tesoura}`);
            resp = prompt();
            console.clear();
        
        }

        let randomNum = Math.floor(Math.random()*3);

        if (randomNum == resp ){
            contDrw ++;
            console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
            console.log('---------------------------------');
            console.log();
            console.log(`Você escolheu ${lista[resp]}`); 
            console.log(`Seu adversário escolheu ${lista[randomNum]}
            EMPATE `)
            prompt();
            console.clear();
        }else if ((randomNum == 0 && resp == 1) || (randomNum == 1 && resp == 2 ) || (randomNum == 2 && resp == 0 )){
            contWin ++;
            console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
            console.log('---------------------------------');
            console.log();
            console.log(`Você escolheu ${lista[resp]}`); 
            console.log(`Seu adversário escolheu ${lista[randomNum]}
            VITÓRIA `)
            prompt();
            console.clear();

        }else if ((randomNum == 1 && resp == 0) || (randomNum == 2 && resp == 1 ) || (randomNum == 0 && resp == 2 )){
            contLse ++;
            console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
            console.log('---------------------------------');
            console.log();
            console.log(`Você escolheu ${lista[resp]}`);
            console.log(`Seu adversário escolheu ${lista[randomNum]}
            DERROTA `)
            prompt();
            console.clear();
        }

    }


    if(contWin > contLse){
        console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
        console.log('Vitória!!')
        prompt();
    }else if(contLse > contWin){
        console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
        console.log('Derrota!!');
        prompt();
    }else{
        console.log(`V => ${contWin}    E => ${contDrw}    D => ${contLse}`);
        console.log('Empate!!!');
        prompt();
    }

    console.log('Gostaria de Jogar mais uma vez? [S/N]');
    let resposta = prompt().toUpperCase();
    while(resposta != 'S' && resposta != 'N'){

        console.clear();
        console.log('Gostaria de Jogar mais uma vez? [S/N]');
        console.log('Digite [S] para sim e [N] para não')
        resposta = prompt().toUpperCase();


    }
    if(resposta == 'S'){
        newGame = true;
    }else if(resposta == 'N'){
        newGame = false;
    }
    contWin = 0;
    contLse = 0;
    contDrw = 0;

}








