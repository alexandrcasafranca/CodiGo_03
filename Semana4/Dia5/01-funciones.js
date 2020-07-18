// Funciones

// 1. Funciones que no retornan valor ni reciben parametros declarando una función

function imprimirFecha() {
    // como crear una variable que guarde la fecha del ordenador.

    let fecha = new Date();
    console.log(fecha);
}


// Para llamar a la función se debe cololcar el nombre de la función y los parentesis (), Los parentesis son los que llaman a la función, no olvidarse del punto y coma ; .

// Una función se puede llamar varias veces.

// imprimirFecha();
// imprimirFecha();
// imprimirFecha();
// imprimirFecha();

// Llamando o invocando a una función
imprimirFecha();



// 2.   Funciones que retornan valor y no reciben parametros
// Se puede tener dos variables iguales pero en diferentes funciones. Es decir cada uno es un scope distinto.
function retornarFecha() {
    let fecha = new Date();
    //Retorna el valor de la fecha
    return fecha;
}

// No invoca o llama a la función, lo que hace es retornar un valor y lo esta guardando en la función mas no lo esta imprimiendo.

// retornarFecha();

console.log(retornarFecha());


// 3. Funciones que reciben parametros y retornan valor.


// Documentar nuestar función
// Primero digitar un slash / y luego dos veces * 
/**
 * Funcion que recibe dos numeros y calcula el binomio cuadrado perfecto de ambos
 * @param {number} a primer numero
 * @param {number} b segundo numero
 */

function retornarBinomio(a,b) {
    let respuesta  = (a*a) + (2*a*b) + (b*b);
    return respuesta;
}

// Invocando a la funcion
let resultadoBinomio = retornarBinomio(8, 5);
console.log(resultadoBinomio);


// 4. Funciones que no retornan valor y que reciben parametros

function imprimirPares(numeros) {
    
};

let arreglo = [2,4,6,1,8,10];
imprimirPares(arreglo);

