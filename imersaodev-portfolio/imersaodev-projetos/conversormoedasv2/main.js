function Converter(){
    var tipoValor1 = document.getElementById("tipoValor1").value;
    var tipoValor2 = document.getElementById("tipoValor2").value;
    var valor = document.getElementById("valor").value;

    if (tipoValor1 == "real") {
        if (tipoValor2 == "dolarAmericano") {
            RealDolar(valor);
        } else if (tipoValor2 == "euro") {
            RealEuro(valor);
        }
    } else if (tipoValor1 == "dolarAmericano") {
        if (tipoValor2 == "real") {
            DolarReal(valor);
        } else if (tipoValor2 == "euro") {
            DolarEuro(valor);
        }

    } else if ( tipoValor1 == "euro") {
        if (tipoValor2 == "dolarAmericano") {
            EuroDolar(valor);
        } else if (tipoValor2 == "real") {
            EuroReal(valor);
        }
    }
}

function RealDolar(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 0.19;
    resultadoElemento.innerHTML = valorConvertido;
}

function RealEuro(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 0.16;
    resultadoElemento.innerHTML = valorConvertido;
}

function DolarReal(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 5.29;
    resultadoElemento.innerHTML = valorConvertido;
}

function DolarEuro(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 0.85;
    resultadoElemento.innerHTML = valorConvertido;
}

function EuroDolar(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 1.17;
    resultadoElemento.innerHTML = valorConvertido;
}

function EuroReal(valor){
    var resultadoElemento = document.getElementById("resultado");
    var valorConvertido = valor * 6.20;
    resultadoElemento.innerHTML = valorConvertido;
}
