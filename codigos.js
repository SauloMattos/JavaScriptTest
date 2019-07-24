var player1 = null;
var player2 = null;
var resultado = null;

/* QUANDO O PLAYER1 SELECIONA SUA JOGADA */
function mudarImagem1(){
    document.getElementById('pedra').src='imagens/Pedra_ok.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    var player1 = "pedra";
    var player2 = document.getElementById('aleatorio').innerHTML
}

function mudarImagem2(){
    document.getElementById('papel').src='imagens/Papel_ok.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    var player1 = "papel";
    var player2 = document.getElementById('aleatorio').innerHTML
}

function mudarImagem3(){
    document.getElementById('tesoura').src='imagens/Tesoura_ok.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    var player1 = "tesoura";
    var player2 = document.getElementById('aleatorio').innerHTML
}

/* CALCULAR JOGADA DO PLAYER 1 COM PLAYER2 (WHO WINS?) */

if(player1 == "pedra" && player2 == 0){
    resultado = 'empate'
}else if(player1 == "pedra" && player2 == 1){
    resultado = 'derrota'
}else if(player1 == "pedra" && player2 == 2){
    resultado = 'vitória'
}

console.log(resultado)