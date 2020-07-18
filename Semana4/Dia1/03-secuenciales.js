// 2.7 propuesto

//convertir texto en numero / con un valor entero
// let valor = parseInt(prompt(`Ingrese el valor`));
// console.log(valor);

// let valor = +prompt(`Ingrese el valor`);

// let suma = "35";

let costoBoleto = 0;

let recorrer = prompt("Ingrese los kilometros a recorrer");
let costoKilometro = prompt("Ingrese el costo por kilometro");

costoBoleto = recorrer * costoKilometro;

console.log(`Costo por Boleto ${costoBoleto} soles.`);