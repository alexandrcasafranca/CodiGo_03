// Variables
// -- Las variables se declaran o se crean una sola vez
// en el documento, luego, solo las usamos.

// Creando una variable

// Partes : Identificador de crear una variable | Variable | Valor
let x = 69;
let nombre = "Jorge";

// var : usa un scope general

// let usa un scope local

// Los signos son un scope
// Contenido dentro del scope
// {
//   Contenido;
// }

// Varios scope
// {
//   {
//     {
//     }
//   }
// }

// Para reindentar codigo alt + shift + f

//var : Las variables, varian.

// Las constantes siempre son constantes y nunca van a variar
const pi = 3.1416;
const igv = 0.18;

let precio = 1500;
let total = precio + (precio * igv); 

// Podriamos usar los bactics
console.log(`Total a pagar: ${total}`); // string
console.log(total); // number


let suma = 0;
let otronumero = 453;

suma = x + otronumero;

//Imprimiendo información en la consola
console.log("suma");
console.log(suma);

// Variables numericas / number

// Variables de texto / string / cadenas de texto

// Variables booleanas
// TRUE / FALSE
let soltero = true;

//Backtips / Bactics (Plantillas o templates)
// alt + 96 -->   ``

console.log("¿Es soltero?");
console.log(soltero);


// + 
// - 
// *
// /
// % modulo o residuo de una operación de división entera
let residuo = 20 % 7;
console.log(residuo);

// Empezar siempre con letras o respetar una nomenclatura, un standart
let par1 = 40 % 2;
let par2 = 900 % 2;
let par3 = 500 % 2;

//Cuando el residuo es 0 el valor es par
console.log(`${par1} + ${par2} + ${par3}`);

// Ahorra espacio en memoria usar bactics
console.log(`Suma ${par3 + residuo}`);


let alfanumerico = 35 + "35";
console.log(`alfanumerico => ${alfanumerico}`);


//  Estructura secuencial

//  1. Declaración de variables
//  2. Solución secuencial del problema (paso a paso)
//  3. Mostrar el resultado










