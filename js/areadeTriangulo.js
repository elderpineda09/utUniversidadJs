//funciones que reciben paramentros y retornan valores
function imprimir(frase) {
    document.write(frase);
    saltodelinea();
}

function calculadoraIMC(base, altura) {
    let area = (altura*base)/2;
    imprimir("El area del triangulo es : "+area + "m2");
}
let base = prompt("¿Cuál es tu base?")
let altura = prompt("¿Cuál es tu altura?")

calculadoraIMC(base, altura);