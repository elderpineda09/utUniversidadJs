//Creando objetos

/*var Automodelo = "March";
var Automotor = 1.2;
var Autocolor = "Azul";
var Autoanio = 2018;

var auto ={
    nombre: 'March',
    motor: 1.6,
    color: 'Azul',
    anio: 2018
}
console.log(auto.motor);
console.log(auto.color);
document.write(auto.color);

//arreglos
var ligamx =['Cruz Azul', 'Chivas', 'America', 'Pachuca'];
console.log(ligamx);
console.log(ligamx[2]);
console.log(ligamx.length);
console.log(ligamx[3]);
//quitar el ultimo elemento
ligamx.pop();
console.log(ligamx[3]);
//quitar algun elemento en especifico
ligamx.splice(1,2); //borrame del arreglo 2 elementos a partir de la posicion 1 
console.log(ligamx);
// agregar un elemento al arreglo en la ultima posicion
ligamx.push("Atlas");
ligamx.push("Toluca");
console.log(ligamx);
// agregar un elemento al arreglo en la primera posicion
ligamx.unshift("Pumas");
console.log(ligamx);
// agregar un elemento al arreglo en cualquier posicion
ligamx.splice(2,1, "Santos");
console.log(ligamx); 

//numeros
var numero1= "15";
var numero2= 20;
var numero3= 21.5;
var numero4= "12.1458412";
var numero5= 301455;
var numero6 = true;

console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));
console.log(typeof(numero6));

var numero7 = parseFloat(numero4);
console.log(typeof(numero7));
console.log(numero7.toFixed(2)); 

//fechas

var fecha = new Date();
console.log(fecha);
/*console.log("El año actual es: " + fecha.getFullYear());
console.log("El dia actual es: " + fecha.getDay());
console.log("La fecha actual es: " + fecha.getDate());
console.log("La hora actual es: " + fecha.getHours() +":"+ fecha.getMinutes()); 

var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write("la fecha actual es "+ fecha.getDate() +" de "+meses[fecha.getMonth()] + " del "+ fecha.getFullYear()); */






/*STRING*/

/*var texto = "Esto es una cadena de texto";
console.log(texto);
console.log(typeof(texto));
//PASAR LETRAS A MAYUSCULA
console.log(texto.toUpperCase());
//SABER CANTIDAD DE CARACTERES EN LA CADENA
console.log(texto.length);
//SEPARAR TEXTO POR ESPACIOS EN UNA CADENA 
console.log(texto.split(" "));
//BUSCAR UN CARACTER O TEXTO ESPECIFICO
console.log(texto.indexOf("cadena"));
//MUESTRA TEXTO A PARTIR DE LA POSICION INDICADA
console.log(texto.slice(0,8));
var texto2 = "HOLA MUNDO";
//CAMBIAR TEXTO A MINISCULAS
console.log(texto2.toLocaleLowerCase()); */

/*IF
ESTRUCTURA BASICA DEL IF

if(condicion){
    //codigo
}

var numero = prompt("Dame un numero");
if (numero%2 == 0) {
    console.log("El numero proporcionado es par");
}else{
    console.log("El numero proporcionado es impar");
} 


var metododePago = "Paypal"

switch (metododePago) {
    case 'TC':
        console.log("pago con tarjeta de credito")
        break;
    case 'Efectivo':
        console.log("pago con efectivo")
        break;
    case 'Paypal':
        console.log("pago con Paypal")
        break;
    default:
        console.log("metodo de pago invalido");
        break;
} */

var numero10 = 20;
numero10= numero10 + 20;
console.log(numero10);

numero10 +=20;
console.log(numero10);

numero10 -=20;
console.log(numero10);

numero10 *=20;
console.log(numero10);

numero10 /=20;
console.log(numero10);

//CREA UNA LISTA DE LOS NUMEROS DEL 1-100 CON UN FOR
//CUANDO APAREZCA UN NUMERO DIVISIBLE ENTRE 3 NOS VA A MOSTRAR LA PALABRA UT
//SI ES DIVISIBLE ENTRE 5 DEBE MOSTRAR LA PALABRA INGENIERIA
//SI ES DIVISIBLE ENTRE 3 Y 5 DEBE MOSTRAR UT E INGENIERIA
var text1 = "UT";
  var text2 = "Ingeniería";
  for (let i = 0; i < 100; i++) {
    if(i%3==0 && i%5==0){
        console.log(text1+" "+text2);
    }else{
        if(i%3==0){
            console.log(text1);
        }else{
            if(i%5==0){
                console.log(text2);
            }else{
                console.log(i);
            }
        }
    }
    
    


  }


