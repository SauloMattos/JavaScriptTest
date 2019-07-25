/* QUANDO O PLAYER1 SELECIONA SUA JOGADA */
var p1 = 0;
var p2 = 0;

function mudarImagem1(){
    document.getElementById('pedra').src='imagens/Pedra_ok.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "pedra";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p2 == 0){
        console.log("Empate")
    }else if(p2 == 1){
        console.log("Derrota")
    }else if(p2 == 2){
        console.log("Vitoria")
}

}

function mudarImagem2(){
    document.getElementById('papel').src='imagens/Papel_ok.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "papel";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p2 == 0){
        console.log("Vitoria")
    }else if(p2 == 1){
        console.log("Empate")
    }else if(p2 == 2){
        console.log("Derrota")
    }
}

function mudarImagem3(){
    document.getElementById('tesoura').src='imagens/Tesoura_ok.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "tesoura";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p2 == 0){
        console.log("Derrota")
    }else if(p2 == 1){
        console.log("Vitoria")
    }else if(p2 == 2){
        console.log("Empate")
    }
}

/* CALCULAR JOGADA DO PLAYER 1 COM PLAYER2 (WHO WINS?) */
