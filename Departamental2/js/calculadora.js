
function sumaNumeros(){
    var resultado =parseInt(document.getElementById("numero1").value) + parseInt(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function restaNumeros(){
    var resultado =document.getElementById("numero1").value-document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function multiplicaNumeros(){
    var resultado =document.getElementById("numero1").value * document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function divideNumeros(){
    var resultado =document.getElementById("numero1").value / document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}
