//  Condicionales

// Se usa en tiempo de desarrollo cuando estamos aprendiendo
debugger;

let edad = +prompt("Ingrese su edad Joven");
// let peso = +prompt("¿Cuanto pesa joven (Kgs)?");
let peso = +prompt("¿Cuanto pesa joven (Kgs)?");
let altura = +prompt("¿Cuanto pesa joven (mts)?");
let indiceMasaCorporal = 0;

// let respuesta = edad > 17;
// console.log(respuesta);



//  Comparadores aritméticos

// > mayor
// < menor
// <= menor o igual
// >= mayor o igual
// !== diferente
// === igual

// Comparadores logicos
// Y    :   &&
// O    :   ||
// NOT  :   !



//Una condicional da una respuesta booleana
// No olvidar abrir y cerrar el ambito o scope

// {
// Esto es un scope o ambito
// }

// if ( edad > 17 ) {
//     console.log(`Si hay pase laboral`);
// } else {
//     console.log(`No, no hay pase laboral`);
// }



// Siempre va a imprimir true
// if (true) {
//caso uno
// } else {
// caso dos
// }

// La condición puede ejecutar uno o es true o es false
// Anidación

indiceMasaCorporal = peso / (altura * altura);

if (edad > 17 && indiceMasaCorporal <= 30) {
  console.log(`Si hay pase laboral`);  
} else {
  console.log(`No, no hay pase laboral #quedateEnCasa`);
  console.log(`Es usted muy moco  o el IMC excede el valor de 30`);
}

//  Factorizamos código
console.log(`Su indice de masa corporal ${indiceMasaCorporal}`);
console.log("Fin del programa, hasta pronto! 👏");

// Emojis en windows => tecla windows + . (Punto)
// Bug es igual a problema



//  Comparadores lógicos
//  Algebra de Boole


// Y        |       O       |       No





//  Tips
//  Atajo de teclas
// Capturar pantalla
// teclas  | windows + shift + s