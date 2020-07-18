//  Condicionales

// Se usa en tiempo de desarrollo cuando estamos aprendiendo
debugger;

let edad = +prompt("Ingrese su edad Joven");
// let peso = +prompt("¿Cuanto pesa joven (Kgs)?");
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
if ( edad > 17 ) {
    let peso = +prompt("¿Cuanto pesa joven (Kgs)?");
    let altura = +prompt("¿Cuanto pesa joven (mts)?");
    indiceMasaCorporal = peso / (altura * altura);
    if (peso >= 85) {
        console.log("No, no hay pase laboral #quedateEnCasa");
        console.log("Está usted en riesgo por exceso de comida");        
    } else {
        console.log(`Si hay pase laboral`);        
    }
    //  Factorizamos código
    console.log(`Su indice de masa corporal ${indiceMasaCorporal}`);    
} else {
    console.log(`No, no hay pase laboral #quedateEnCasa`);
    console.log(`Es usted muy moco 😢`);
}

//  Factorizamos código
console.log("Fin del programa, hasta pronto! 👏");

// Emojis en windows => tecla windows + . (Punto)
// Bug es igual a problema