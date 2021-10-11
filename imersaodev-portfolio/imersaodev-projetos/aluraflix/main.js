function Executar(){
    var nomeFilmes = [];
    var trailerFilmes = [];
    var imgFilmes = [];
    var select_option = document.getElementById("opcoesCategoria").value;

    if (select_option == "Adicionar") {
        Adicionar(nomeFilmes, trailerFilmes, imgFilmes);
    } else if (select_option == "Excluir") {
        Excluir(nomeFilmes, trailerFilmes, imgFilmes);
    }
}

function Adicionar(nomeFilmes, trailerFilmes, imgFilmes){
    var nome_filmes = nomeFilmes.push(document.getElementById("nome-filme").value);
    //var trailer_filmes = trailerFilmes.push(document.getElementById("trailer-filme").value);
    var img_filmes = imgFilmes.push(document.getElementById("img-filme").value);
    Mostrar(nome_filmes, img_filmes);
}

function Excluir(nomeFilmes, trailerFilmes, imgFilmes){
    for (i = 0; i < nomeFilmes.length; i++){
        if (nomeFilmes[i] == (document.getElementById("nome-filme").value)){
            var nome_filmes = nomeFilmes.splice(i, 1);
            // var trailer_filmes = trailerFilmes.splice(i, 1);
            var img_filmes = imgFilmes.splice(i, 1);
            Mostrar(nome_filmes, img_filmes);
        }
    }
}

function Mostrar(nomeFilmes, imgFilmes){
    for (i = 0; i < imgFilmes.length; i++){
        var listaFilmes = document.getElementById("listaFilmes");
        listaFilmes.innerHTML = listaFilmes.innerHTML + "<img src=" + imgFilmes + " id=img-filme><h3>" + nomeFilmes + "<h3>";
    }
}