// Dado un arreglo de numeros,
// hallar la cantidad de números positivos
// hallar la cantidad de números negativos
// hallar la cantidad de números iguales a 0
debugger;


// Formas de aumentar
// contador = contador+1;

// Forma resumida de la forma de arriba
// contador+=1;

// contador++;

let numeros = [0, 25, -9, -8, 0];
let contador = 0;

while(contador < numeros.length) {
    console.log(numeros[contador]);
    contador += 1;
}