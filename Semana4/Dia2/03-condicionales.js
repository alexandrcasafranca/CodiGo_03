/*

Hacer un programa que indique ingresar al usuario ingresar al usuario las 3 primeras letras de un día de la semana y que el programa complete el día de la semana.

*/

let ingreso = prompt("Ingresar los 3 primeras letras del día de la semana (min)(MAYUS)");

// Para no indentar mucho, podria usar un else if
if (ingreso === "lun" || ingreso === "LUN") {
  console.log("El día es lunes");
} else if (ingreso === "mar" || ingreso === "MAR") {
  console.log("El día es Martes");
} else if (ingreso === "mie" || ingreso === "MIE") {
  console.log("El día es Miercoles");
} else if (ingreso === "jue" || ingreso === "JUE") {
  console.log("El día es Jueves");
} else if (ingreso === "vie" || ingreso === "VIE") {
  console.log("El día es Viernes");
} else {
    console.log("ERROR! Has ingresado data erronea 👀");
}
            




// if (ingreso === "lun" || ingreso === "LUN") {
//     console.log("El día es lunes");
// } else {
//     if (ingreso === "mar" || ingreso === "MAR") {
//         console.log("El día es Martes");
//     } else {
//         if ( ingreso === "mie" || ingreso === "MIE") {
//             console.log("El día es Miercoles");
//         } else {
//             if ( ingreso === "jue" || ingreso === "JUE") {
//                 console.log("El día es Jueves");
//             } else {
//                 if ( ingreso === "vie" || ingreso === "VIE") {
//                     console.log("El día es Viernes");
//                 }
//             }
//         }
//     }
// }


// Muchas preguntas, es valido pero no es lo correcto.
// if (ingreso === "lun" || ingreso === "LUN") {
//     console.log("El día es Martes");
// }

// if (ingreso === "mar" || ingreso === "MAR") {
//     console.log("El día es Martes");
// }

// if (ingreso === "mie" || ingreso === "MIE") {
//     console.log("El día es Martes");
// }