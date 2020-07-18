// Funciones con parametros por defecto

function trinomioCuadrado(a,b,c) {

    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {

        let respuesta = a*a*a + b*b*b + c*c*c;
        return respuesta;

    } else {
        console.error("Los datos proporcionados no son correctos");
        return 0;
    }
    // console.log(`a = ${a}`);
    // console.log(`b = ${b}`);
    // console.log(`c = ${c}`);
}

let resultado = trinomioCuadrado(2,4,5);
console.log(resultado);




/**
 * Funcion que recine un arreglo de nombres y un nombre a buscar. 
 * Si el algoritmo encuentra el nombre buscado dentro del arreglo, retorna true, en caso contrario retorna false.
 * @param {array} nombres 
 * @param {string} busqueda 
 * @return {boolean}
 */

function buscarNombre(nombres = [], busqueda = "") {
    for (let i = 0; i < nombres.length ; i++) {
        if (nombres[i] === busqueda) {
            // La sentencia return en una funcion, no solo retorna un valor si no que tambien hace que la funcion deje de ejecutarse en esa sentencia, no importa si esta dentro de un for, while, if, etc.
            return true;
        }        
    }
}


let nombres = ["martin", "jaime", "anita", "bruno"];
resultadoBusqueda = buscarNombre(nombres, "anita");

console.log(resultadoBusqueda);

// TODO: explicar NaN


// function buscarNombre(arregloNombres, busqueda, posicionInicial = 0) {
//     for ( let i = posicionInicial, i < arregloNombres.length, i++) {}
// }

// let nombres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

//opcion 1:
// el algoritmo buscará el nombre desde la posición proporcionada. 

buscarNombre(nombres, "f", 8);

//opción 2:
//el algoritmo buscará el nombre desde la posición 0
buscarNombre(nombres, "f");


// Función isNaN

// es una función que devuelve TRUE si el valor que tiene dentro -NO ES UN NÚMERO-

//es una función qu devuelve FALSE si el valor que tiene dentro -ES UN NÚMERO-

//NotANumber

console.log(isNaN(5));
console.log(isNaN("TEXTO"));
console.log(isNaN(true));