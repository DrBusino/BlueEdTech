
console.clear();

const prompt = require('prompt-sync')();
let sim = 0;
let nao = 0;
let resposta = '';
let novoJogo = true;


while(novoJogo == true){

    novoJogo = false;
    console.clear();
    console.log('Você passou por vários desafios nessa sua missão até aqui...');
    prompt('[ENTER]');
    console.clear();
    console.log('Desertos escaldantes...');
    prompt('[ENTER]');
    console.clear();
    console.log('Florestas tortuosas...');
    prompt('[ENTER]');
    console.clear();
    console.log('Pântanos intermináveis...');
    prompt('[ENTER]');
    console.clear();
    console.log('Enfrentou inimigos poderosos...');
    prompt('[ENTER]');
    console.clear();
    console.log('Gigantes de pedra, dragões flamejantes e feras disformes...');
    prompt('[ENTER]');
    console.clear();
    console.log('Mas o maior dos seus desafios começa agora...');
    prompt('[ENTER]');
    console.clear();
    console.log('Você descobriu a caverna, escura e desolada, era esse o covil do terrível mago de gelo...');
    prompt('[ENTER]');
    console.clear();
    console.log('E sim...');
    prompt('[ENTER]');
    console.clear();
    console.log('Ele estava lá, claro, com todos os seus minions...');
    prompt('[ENTER]');
    console.clear();
    console.log('Com seu cajado fumegante e olhos cintilantes...');
    prompt('[ENTER]');
    console.clear();
    console.log('Começa a luta épica...');
    prompt('[ENTER]');
    console.clear();
    console.log('Mas antes eu preciso saber se você estava preparado para esse embate...');
    prompt('[ENTER]');


    console.clear();
    console.log('Você lemborou de afiar sua espada na última estalagem? [S/N] ');
    resposta = prompt().toUpperCase();


    if (resposta == 'S'){
        sim = sim + 1;
    }else if ( resposta == 'N'){
        nao = nao + 1;
    }else{
        while(resposta != 'S' && resposta != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('Você lemborou de afiar sua espada na última estalagem? [S/N]');
            resposta = prompt().toUpperCase();
            
            
            if (resposta == 'S'){
                sim = sim + 1;
                
            }else if ( resposta == 'N'){
                nao = nao + 1;
                
            }
        }
    }


    console.clear();
    console.log('Você ainda tem alguma poção de vida? S/N');
    resposta = prompt().toUpperCase();

    if (resposta == 'S'){
        sim = sim + 1;
    }else if ( resposta == 'N'){
        nao = nao + 1;
    }else{
        while(resposta != 'S' && resposta != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('Você ainda tem alguma poção de vida? S/N');
            resposta = prompt().toUpperCase();
            
            
            if (resposta == 'S'){
                sim = sim + 1;
                
            }else if ( resposta == 'N'){
                nao = nao + 1;
                
            }
        }
    }


    console.clear();
    console.log('Você consertou seu escudo depois da luta contra o rato da masmorra? S/N');
    resposta = prompt().toUpperCase();

    if (resposta == 'S'){
        sim = sim + 1;
    }else if ( resposta == 'N'){
        nao = nao + 1;
    }else{
        while(resposta != 'S' && resposta != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('Você consertou seu escudo depois da luta contra o rato da masmorra? S/N');
            resposta = prompt().toUpperCase();
        
            
            if (resposta == 'S'){
                sim = sim + 1;
                
            }else if ( resposta == 'N'){
                nao = nao + 1;
                
            }
        }
    }


    console.clear();
    console.log('Você tomou o antídoto contra a peste verde do norte? S/N ');
    resposta = prompt().toUpperCase();

    if (resposta == 'S'){
        sim = sim + 1;
    }else if ( resposta == 'N'){
        nao = nao + 1;
    }else{
        while(resposta != 'S' && resposta != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('Você tomou o antídoto contra a peste verde do norte? S/N');
            resposta = prompt().toUpperCase();
            
            
            if (resposta == 'S'){
                sim = sim + 1;
                
            }else if ( resposta == 'N'){
                nao = nao + 1;
                
            }
        }
    }


    console.clear();
    console.log('Sua mãe disse para você levar o casaquinho, você está com ele? S/N');
    resposta = prompt().toUpperCase();
    if (resposta == 'S'){
        sim = sim + 1;
    }else if ( resposta == 'N'){
        nao = nao + 1;
    }else{
        while(resposta != 'S' && resposta != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('Sua mãe disse para você levar o casaquinho, você está com ele? S/N');
            resposta = prompt().toUpperCase();
            
            if (resposta == 'S'){
                sim = sim + 1;
                
            }else if ( resposta == 'N'){
                nao = nao + 1;
                
            }
        }
    }
    console.clear();
    if(sim == 0){
        console.log('Você falha miseravelmente!...')
        prompt('[ENTER]');
        console.clear();
        console.log('Claramente você não se preparou para essa batalha...');
        prompt('[ENTER]');
        console.clear();
        console.log('Todos os minios do senhor das trevas riram quando você tentou atacar o primeiro deles e sua espada não fez nada além de um som seco e inútil...')
        prompt('[ENTER]');
        console.clear();
        console.log('Na primeira pedra atirada por eles o seu escudo foi reduzido a cacos...');
        prompt('[ENTER]');
        console.clear();
        console.log('Seus potos de vida reduziam-se sem que você pudesse fazer algo...');
        prompt('[ENTER]');
        console.clear();
        console.log('Sua lentidão agravou-se pela peste que ainda lhe afligia...');
        prompt('[ENTER]');
        console.clear();
        prompt('[ENTER]');
        console.log('Enquanto a magia de gelo do mago o fêz desfalecer lentamente...');
        prompt('[ENTER]');
        console.clear();
        prompt('GAME OVER!')
        prompt('[ENTER]');
        console.clear();
        let resp = prompt('New Game? S/N').toUpperCase();

        if(resp == 'S'){
            novoJogo = true;
        }else if(resp == 'N'){
            novoJogo = false;
        }
        while(resp != 'S' && resp != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('New Game? S/N');
            resposta = prompt().toUpperCase();
        }
        

    }else if(sim <= 2){
        console.log('Você falha, mas ainda consegue fugir da situação...');
        prompt('[ENTER]');
        console.clear()
        console.log('Quase tudo deu Errado...')
        prompt('[ENTER]');
        console.clear();
        console.log('Você não se preparou o suficiente...');
        prompt('[ENTER]');
        console.clear()
        console.log('Você perdeu a batalha mas consegue fugir dali...');
        prompt('[ENTER]');
        console.clear()
        console.log('Mesmo que bem ferido... ');
        prompt('[ENTER]');
        console.clear()
        prompt('MISSION FAIL!');
        prompt('[ENTER]');
        console.clear();
        let resp = prompt('New Game? S/N').toUpperCase();

        if(resp == 'S'){
            novoJogo = true;
        }else if(resp == 'N'){
            novoJogo = false;
        }
        while(resp != 'S' && resp != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('New Game? S/N');
            resp = prompt().toUpperCase();
        }

    }else if(sim == 3){
        console.log(' Você fez tudo quase certo...');
        prompt('[ENTER]');
        console.clear();
        console.log('Mas a derrota está nos detalhes');
        prompt('[ENTER]');
        console.clear();
        console.log('Um último golpe seria necessário pra a vitória');
        prompt('[ENTER]');
        console.clear();
        console.log('Mas você não tem mais energia e precisa recuar');
        prompt('[ENTER]');
        console.clear();
        prompt('PEGAMOS ELE DA PRÓXIMA VEZ!')
        prompt('[ENTER]');
        console.clear();
        let resp = prompt('New Game? S/N').toUpperCase();

        if(resp == 'S'){
            novoJogo = true;
        }else if(resp == 'N'){
            novoJogo = false;
        }
        while(resp != 'S' && resp != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('New Game? S/N');
            resp = prompt().toUpperCase();
        }
    }else if(sim == 4){
        console.log('VITÓRIA!...');
        prompt('[ENTER]');
        console.clear();
        console.log('Não foi perfeita...');
        prompt('[ENTER]');
        console.clear();
        console.log('Mas quem é?');
        prompt('[ENTER]');
        console.clear();
        console.log('Você será lembrado como aquele que passou na média...');
        prompt('[ENTER]');
        console.clear();
        console.log('Mas passou...');
        prompt('[ENTER]');
        console.clear();
        console.log('VITÓRIA PIRRICA!')
        prompt('[ENTER]');
        console.clear();
        let resp = prompt('New Game? S/N').toUpperCase();

        if(resp == 'S'){
            novoJogo = true;
        }else if(resp == 'N'){
            novoJogo = false;
        }
        while(resp != 'S' && resp != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('New Game? S/N');
            resp = prompt().toUpperCase();
        }

    }else if(sim == 5){
        console.log('VITÓRIAAAAAAAA!...');
        prompt('[ENTER]');
        console.clear();
        console.log('Tudo perfeito!...');
        prompt('[ENTER]');
        console.clear();
        console.log('Você venceu todos os mínion com uma cutilada só...');
        prompt('[ENTER]');
        console.clear();
        console.log('Na vez do mago de gelo também não foi diferente...');
        prompt('[ENTER]');
        console.clear();
        console.log('Você não foi nem tocado por suas magias e seu escudo foi seu maior aliado...');
        prompt('[ENTER]');
        console.clear();
        console.log('No final você arremeçou sua poção de vida bem na testa do mago, só para mostrar que ela nao era necessária...');
        prompt('[ENTER]');
        console.clear();
        console.log('Você é uma lenda, Um verdadeiro heroi!...');
        prompt('[ENTER]');
        console.clear();
        console.log('Sua vitória será cantada por milhares de gerações.');
        prompt('[ENTER]');
        console.clear();
        console.log('HERÓI ETERNO!');
        prompt('[ENTER]');
        console.clear();
        let resp = prompt('New Game? S/N').toUpperCase();

        if(resp == 'S'){
            novoJogo = true;
        }else if(resp == 'N'){
            novoJogo = false;
        }
        while(resp != 'S' && resp != 'N'){
            console.clear();
            console.log('Digite "s" para SIM e "n" para NÃO e depois aperte "ENTER"');
            console.log('New Game? S/N');
            resp = prompt().toUpperCase();
        }
       



    }else{
        console.clear()
        prompt('ERROR 01')
        novoJogo = false;
    }
}






//console.log(sim, nao); ---> espécie de debug, caso necessário;
//'Error 01' ---> caso os a quantidade de 'sim' for discrepante, erro claro no sistema.



