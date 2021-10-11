var notaPrimeiroBimestre = 7
var notaSegundoBimestre = 5.5
var notaTerceiroBimestre = 9.7
var notaQuartoBimestre = 10

var somaNotas = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre
var mediaNotas = somaNotas / 4
var mediaFixada = mediaNotas.toFixed(1)

if(mediaFixada = 6){
    console.log("\nVocê recebeu a média! Por pouco em... \nNOTA: "+ mediaFixada)
}else if(mediaFixada < 6){
    console.log("Você está de recuperação! Estude, estude e estude... \nNOTA: "+ mediaFixada)
}else if(mediaFixada > 6){
    console.log("Você passou! Parabéns! Até que estudar valeu a pena... \nNOTA: "+ mediaFixada)
}