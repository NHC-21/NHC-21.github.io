function Converter(moeda) {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealFloat = parseFloat(valor);
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = ""
    if(moeda == "DólarAmericano"){
      valorConvertido = "R$ " + valorEmRealFloat + " Convertido para Dólar Americano é U$" + (valorEmRealFloat * 0.19)  
    }else if(moeda == "Euro"){
      valorConvertido = "R$ " + valorEmRealFloat + " Convertido para Euro é U$" + (valorEmRealFloat * 0.16)
    }else if(moeda == "LibraEsterlina"){
      valorConvertido = "R$ " + valorEmRealFloat + " Convertido para Libra Esterlina é U$" + (valorEmRealFloat * 0.14)
    }else if(moeda == "Bitcoin"){
      valorConvertido = "R$ " + valorEmRealFloat + " Convertido para Bitcoin é U$" + (valorEmRealFloat * 0.0000040)
    }
    elementoValorConvertido.innerHTML = valorConvertido;
  }


function DolarAmericano(){
  Converter("DólarAmericano")
}

function Euro(){
  Converter("Euro")
}

function LibraEsterlina(){
  Converter("LibraEsterlina")
}
function Bitcoin(){
  Converter("Bitcoin")
}