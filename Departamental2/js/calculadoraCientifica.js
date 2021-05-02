function clickDigito(digito){
    var display=document.getElementById("display"); 
    display.value=display.value+digito;
}

function presLimp(){
    var display=document.getElementById("display");
    display.value=0;
}

function presMas(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}

function presMenos(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}

function presMulti(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}

function presDiv(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}


function presEntreuno(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}

function presEntredos(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}
function presPunto(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}

function presIgual(){
    var display=document.getElementById("display");
    display.value=eval(display.value);
}

function presRaiz(){
    //Obtiene expresion
    var display=document.getElementById("display");
    //Evalua la expresion=genera un numero
    var numero=eval(display.value);
    //Calcular la raiz
    var raiz=Math.sqrt(numero);
    //Desplegar el resultado del calculo
    display.value=raiz;
}

function presln(){
    var display=document.getElementById("display");
    var numero=eval(display.value);
    var log=Math.log(numero);
    display.value=log;
}

function preslog(){
    var display=document.getElementById("display");
    var numero=eval(display.value);
    var loga=Math.log10(numero);
    display.value=loga;
}

function presPorce(){
    var display=document.getElementById("display");
    var numero=eval(display.value);
    var porce=numero/100;
    display.value=porce;
}
function factorial(){
	var display=document.getElementById("display");
    var numero=eval(display.value);
    var total = 1; 
	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
	display.value=total; 
}
function presEle(){
    var display = document.getElementById("display");
        var pote= prompt("Potencia a la que se quiere elevar: ")
        var numero=eval(display.value); 
        var res= Math.pow(numero,pote);
         display.value = res;
}