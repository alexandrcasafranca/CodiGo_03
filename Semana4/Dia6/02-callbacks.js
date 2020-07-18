// debugger;

// const buscarPorDni = (x) => {
//     x();
// }

// const mostrarResultado = ()=> {
//     console.log("Mostrando resultado");
// }

// buscarPorDni(mostrarResultado);

// buscarPorDni (()=> {
//     console.log("mostrando resultado");
// }, 15);



// creación
const buscarPorDni = (dni, callback) => {
    let nombreEncontrado = "------------------";

    // setTimeout es una funcion asincrona
    setTimeout(function () {
        console.log("Buscando en la BD");
        console.log("Se ejecuta luego de 2000 milisegundos");
        let nombreEncontrado = "Alexander Casafranca";        
        callback(nombreEncontrado);
    }, 2000);
    return nombreEncontrado;
};

// let encontrado = buscarPorDni("45875212");
// console.log(encontrado);


// consumo
buscarPorDni("45642456", (nombre) => {console.log(nombre);});