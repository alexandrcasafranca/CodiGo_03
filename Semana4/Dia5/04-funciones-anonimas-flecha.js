// las funciones anonimas son funciones que cuyo valor se guarda en una variable

let sumar = function (a, b) {
    let total = a + b;
    return total;
}

let respuesta = sumar (7, 8);
console.log(respuesta);

// funciones de flecha

const sumarFlecha = (a, b) => {
    return a + b;
}

let total = sumarFlecha(500, 20);

console.log(total);

