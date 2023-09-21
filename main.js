var number1;
var number2;
var soma;

function soma(){
    number1 = Number(document.getElementById("numero1").value);
    number2 = Number(document.getElementById("numero2").value);
    soma = number1 + number2;
    console.log(soma);
}