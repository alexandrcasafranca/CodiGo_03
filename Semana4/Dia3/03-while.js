// WHILE

// debugger;

let c = 0;

console.log(`C inicial es ${c}`);

while (c < 8) {
    // codigo a ejecutar mientras que la condición sea verdadera
    console.log(`C = ${c}`)
    c = c + 1;
}

console.log(`Valor de C = ${c}`);


console.log("--------------------");



//  Tabla de multiplicar de un número

// let base = 12;
let base = prompt("Ingresa tu numero");
let contador = 0;

while (contador <= 12 ) {
    // console.log(`12 + ${contador} = ${12 * contador}`);

    //Por lo general el contador no se modifica, solo se utiliza
    console.log(`${base} x ${contador} = ${base * contador}`);
    contador = contador + 1;
};