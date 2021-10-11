var rafa = {nome: "Rafa", image: "https://lh3.googleusercontent.com/vUKfxbdYozfxK1CTeWNbAAF0Oqe0LTLTsAkotj0d-qRgbEZzrR-shMHd3sR8YNjO-x9C=s85" , vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var paulo = {nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var gui = {nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var jogadores = [rafa, paulo, gui];

function calculaPontos(jogador) {
    var pontos = ((jogador.vitorias * 3) + jogador.empates) - jogador.derrotas;
    return pontos;
}

function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome +  jogadores[i].image + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;

}

exibeJogadoresNaTela(jogadores);

/*
function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias += 1;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores)
    for (var j = 0; j < jogadores.length; j++){
        if (jogadores[j] != jogadores[i]) {
            var outroJogador = jogadores[j];
        }
        outroJogador.derrotas += 1;
        outroJogador.pontos = calculaPontos(outroJogador);
        exibeJogadoresNaTela(jogadores);
    }
}

function adicionarEmpate() {
    for (var i = 0; i < jogadores.length; i++){
        var jogador = jogadores[i];
        jogador.empates += 1;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
    }
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas += 1;
    exibeJogadoresNaTela(jogadores)
    for (var j = 0; j < jogadores.length; j++){
        if (jogadores[j] != jogadores[i]) {
            var outroJogador = jogadores[j];
        }
        outroJogador.vitorias += 1;
        outroJogador.pontos = calculaPontos(outroJogador);
        exibeJogadoresNaTela(jogadores);
    }
}
*/


function adicionarJogador(){
    var nomeJogador = document.getElementById("nick").value;
    var perfilJogador = document.getElementById("perfil").value;
    var nick = {nome: nomeJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
    jogadores.push(nick)
    exibeJogadoresNaTela(jogadores)
}

function resetarTodosPontos(){
    for (var i = 0; i < jogadores.length; i++){
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0 
        jogadores[i].pontos = 0
    }
}