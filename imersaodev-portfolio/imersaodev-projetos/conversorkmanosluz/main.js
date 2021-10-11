function distanciaDoPlaneta(planet){
    var distancia_media = ""
    if (planet == "MERCÚRIO"){
        distancia_media = "57.910.000";
    }
    else if(planet == "VÊNUS"){
        distancia_media = "108.200.000";
    }
    else if(planet == "TERRA"){
        distancia_media = "149.600.000";
    }
    else if(planet == "MARTE"){
        distancia_media = "227.940.000";
    }
    else if(planet == "JÚPITER"){
        distancia_media = "778.330.000";
    }
    else if(planet == "SATURNO"){
        distancia_media = "1.429.400.000";
    }
    else if(planet == "URANO"){
        distancia_media = "2.870.990.000";
    }
    else if(planet == "NETUNO"){
        distancia_media = "4.504.300.000";
    }

    return distancia_media;
}

function Calcular() {
    var planetaElemento = document.getElementById("planeta");
    var planeta = planetaElemento.value;
    // var valorEmDolarNumerico = parseFloat(valor);
    // var valorEmReal = valorEmDolarNumerico * 5;
    var distancia_media = distanciaDoPlaneta(planeta.toUpperCase())
    var elementoDistanciaPlaneta = document.getElementById("distancia");
    var distanciaPlaneta = "A distância em anos luz do planeta " + planeta + " para a estrela Sol é " + distancia_media + " km. \n Convertido para anos luz o resultado aproximado é " + (parseFloat(distancia_media) / 9.461000000000000);
    elementoDistanciaPlaneta.innerHTML = distanciaPlaneta;
}