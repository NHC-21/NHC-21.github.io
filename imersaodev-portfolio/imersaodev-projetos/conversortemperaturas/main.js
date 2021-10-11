function Converter(temp) {
    var valorTemperatura = document.getElementById("temperatura");
    var temperatura = valorTemperatura.value;
    var valorEmCelsiusFloat = parseFloat(temperatura);
    
    var fahrenheit = (valorEmCelsiusFloat * (9/5)) + 32;
    var kelvin = valorEmCelsiusFloat + 273.15;
    var elementoTemperaturaConvertida = document.getElementById("temperaturaConvertida");
    var temperaturaConvertida = ""
    if (temp == "fahrenheit"){
        temperaturaConvertida = "A temperatura convertida para " + temp + " é " + fahrenheit;
    } else if (temp == "kelvin"){
        temperaturaConvertida = "A temperatura convertida para " + temp + " é " + kelvin;
    }
    elementoTemperaturaConvertida.innerHTML = temperaturaConvertida;
  }

function Fahrenheit(){
    Converter("fahrenheit")
}

function Kelvin(){
    Converter("kelvin")
}
