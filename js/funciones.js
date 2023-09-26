//funcion que no recibe parametros  y no retorna nada
function saltodelinea(params) {
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
//funcion que recibe un parametro y no retorna nada
function imprimir(frase) {
    document.write(frase);
    saltodelinea();
}


//imprimir("Elder");
//imprimir("Pineda");
//imprimir("Pineda");
//imprimir("35");

//funciones que reciben paramentros y retornan valores
function calculadoraIMC(nombre, peso, altura) {
    let imc = peso/(altura*peso);
    imprimir("El IMC de: "+nombre+ " es de : "+imc);
}
let nombre = prompt("¿Cuál es tu nombre?")
let peso = prompt("¿Cuál es tu peso?")
let altura = prompt("¿Cuál es tu altura?")

calculadoraIMC(nombre, peso, altura);


