var numeroSecreto = 0;
var tentativas = 0;
var tentativ = 1;

function Reiniciar(){
    numeroSecreto = parseInt(Math.random() * 11);
}

function Enviar(){
    tentativas = document.getElementById("tentativas").value;    
}



function Chutar(){
    console.log("O numero secreto é " + numeroSecreto);
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log("Vc chutou o numero " + chute)
    console.log("Vo tem " + tentativas + " tentativas")

    if (chute == numeroSecreto){
        elementoResultado.innerHTML = "Parabéns, você acertou!";
    } else if (tentativas == -1){
        elementoResultado.innerHTML = "Você perdeu! O número secreto é " + numeroSecreto;
    } else if (chute < 0 || chute > 10){
        elementoResultado.innerHTML = "Apenas um número entre 0 e 10!";
        tentativas--;
    } else if(chute == ""){
        elementoResultado.innerHTML = "Digite um número entre 0 e 10";
        tentativas--;    
    } else if(chute > numeroSecreto){
        elementoResultado.innerHTML = "O número secreto é menor que " + chute;
        tentativas--;
    } else if(chute < numeroSecreto){
        elementoResultado.innerHTML = "O número secreto é maior que " + chute;
        tentativas--;
    }
        //elementoResultado.innerHTML = "Você perdeu! O número secreto é " + numeroSecreto;
        //elementoResultado.innerHTML = "Você errou!";
}
