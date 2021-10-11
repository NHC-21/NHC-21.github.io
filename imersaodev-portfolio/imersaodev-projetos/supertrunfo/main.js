var carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10;

var boloCartasJogador = [
    carta1 = {
        nome: "Alfa Romeo 2000 Spider",
        image: "images/carta1.jpeg",
        atributos: {
            "km/h         ": 198,
            "0-100 km/h   ": 11,
            "kg           ": 1045,
        }
    },
    
    carta2 = {
        nome: "Mercedes 450 SL",
        image: "images/carta2.jpeg",
        atributos: {
            "km/h         ": 215,
            "0-100 km/h   ": 9,
            "kg           ": 1580,
        }
    },
    
    carta3 = {
        nome: "Panther J 72 V 12",
        image: "images/carta3.jpeg",
        atributos: {
            "km/h         ": 220,
            "0-100 km/h   ": 6,
            "kg           ": 1350,
        }
    },
    
    carta4 = {
        nome: "Monteverdi Palm Beach",
        image: "images/carta4.jpeg",
        atributos: {
            "km/h         ": 240,
            "0-100 km/h   ": 6,
            "kg           ": 1430,
        }
    },
    
    carta5 = {
        nome: "Buick Century",
        image: "images/carta5.jpeg",
        atributos: {
            "km/h         ": 170,
            "0-100 km/h   ": 12,
            "kg           ": 1860,
        }
    }
]
var boloCartasMaquina = [
    carta6 = {
        nome: "Pontiac Firebird Formula",
        image: "images/carta6.jpeg",
        atributos: {
            "km/h         ": 200,
            "0-100 km/h   ": 10,
            "kg           ": 1745,
        }
    },

    carta7 = {
        nome: "Lancia Beta Montecarlo",
        image: "images/carta7.jpeg",
        atributos: {
            "km/h         ": 190,
            "0-100 km/h   ": 9,
            "kg           ": 1040,
        }
    },

    carta8 = {
        nome: "Morgan Plus 8",
        image: "images/carta8.jpeg",
        atributos: {
            "km/h         ": 205,
            "0-100 km/h   ": 8,
            "kg           ": 850,
        }
    },

    carta9 = {
        nome: "Lamborghini Countach",
        image: "images/carta9.jpeg",
        atributos: {
            "km/h         ": 310,
            "0-100 km/h   ": 5,
            "kg           ": 1100,
        }
    },
,
]

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if () {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if () {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
        "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
