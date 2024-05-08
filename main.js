function calcularIMC(){
    var peso = document.getEelementById('peso').value;
    var altura = document.getEelementById('altura').value;
    var imc = peso / (altura*altura);
    document.getEelementById('imc').value=imc.toFixed(2)
}