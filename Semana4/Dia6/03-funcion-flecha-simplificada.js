// Regla 1: Si la funcion solo tiene una linea de ejecución se pueden omitir las llaves "{}"

const sumar = (a, b) => console.log(a + b);
sumar(11, 25);

//Regla 2: Si la función recibe 1 parametro solamente se pueden omitir los parametros

const cuadrado = (numero) => console.log(numero * numero);
cuadrado(12);

// Regla3: Si la función solo tiene una linea de ejecución y a su vez retorna un valor.
// Se puede obviar la palabra reservada 'return' y en su lugar, encerrar el retorno en un parentesis

const cubo = n => (n*n*n);
console.log(cubo(5));
