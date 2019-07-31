/* QUANDO O PLAYER1 SELECIONA SUA JOGADA */
p1 = 0;
p2 = 0;
result = 0;

function mudarImagem1(){
    document.getElementById('pedra').src='imagens/Pedra_ok.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "pedra";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p1 == "pedra" && p2 == 0){
        result = "Empate"
        document.getElementById('resultado').value = result
    }else if(p1 == "pedra" && p2 == 1){
        result = "Derrota"
        document.getElementById('resultado').value = result
    }else if(p1 == "pedra" && p2 == 2){
        result = "Vitoria"
        document.getElementById('resultado').value = result
    }
}

function mudarImagem2(){
    document.getElementById('papel').src='imagens/Papel_ok.jpg'
    document.getElementById('tesoura').src='imagens/Tesoura.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "papel";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p1 == "papel" && p2 == 0){
        result = "Vitoria"
        document.getElementById('resultado').value = result
    }else if(p1 == "papel" && p2 == 1){
        result = "Empate"
        document.getElementById('resultado').value = result
    }else if(p1 == "papel" && p2 == 2){
        result = "Derrota"
        document.getElementById('resultado').value = result
    }    
}

function mudarImagem3(){
    document.getElementById('tesoura').src='imagens/Tesoura_ok.jpg'
    document.getElementById('pedra').src='imagens/Pedra.jpg'
    document.getElementById('papel').src='imagens/Papel.jpg'
    document.getElementById('aleatorio').innerHTML = Math.floor(Math.random() * 3);

    p1 = "tesoura";
    p2 = document.getElementById('aleatorio').innerHTML

    if(p1 == "tesoura" && p2 == 0){
        result = "Derrota"
        document.getElementById('resultado').value = result
    }else if(p1 == "tesoura" && p2 == 1){
        result = "Vitoria"
        document.getElementById('resultado').value = result
    }else if(p1 == "tesoura" && p2 == 2){
        result = "Empate"
        document.getElementById('resultado').value = result
    }
}

/* CALCULAR JOGADA DO PLAYER 1 COM PLAYER2 (WHO WINS?) */

function jokenpo(){
    document.getElementById('resultado').innerHTML
    
    if(result == "Vitoria"){
        alert("Voce Ganhou!")
    }else if(result == "Empate"){
        alert("Voces empataram!")
    }else if(result == "Derrota"){
        alert("Voce Perdeu!")
    }
}