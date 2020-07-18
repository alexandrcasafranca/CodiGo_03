// BREAK Y CONTINUE

// continue; en un scope de una estructura repetitiva, salta u obvia todas las sentencias de la iteración en la que nos encontremos y continuamos con la siguiente

debugger;

// break; en un scope de una estructura repetitiva, finaliza todos los ciclos o iteraciones que restan por hacer sin importar en qué iteración nos encontremos

let nombres = ["jorge", "Alberto", "Julio", "Alexander"];
let edades = [20, 15, 16 , 19];


// Que el usuario busque un nombre y cuando el algoritmo lo encuentre se imprima su edad y la posición en la que se encuentra


let buscar = prompt("Ingrese el nombre en la base de datos");


for (let i = 0; i < nombres.length ; i++) { 

    console.log(`i = ${i}`);

    if (nombres[i] === buscar) {
        console.log(`Encontrado ${buscar}`);
        console.log(`edad ${edades}`);
        break;
    }
}