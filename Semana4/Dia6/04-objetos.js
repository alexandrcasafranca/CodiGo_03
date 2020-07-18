// Objetos

//  Un objeto es un elemento que abstrae caracteristicas o atributos en común o que guardan relación

// ¿Como se crea?

let objPersona = {
  nombre: "Alexander",
  apellido: "Casafranca",
  edad: 29,
  peso: 40,
  casado: false,
};

// Forma 1 de acceder a los atributos
console.log(objPersona.casado);

// Forma 2 de acceder a los atributos
console.log(objPersona["apellido"]);

// Forma 1 de modificar un atributo
objPersona.casado = true;
objPersona.edad = 30;

console.log(objPersona);

// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["Cebiche", "Pastel de papa", "Rocoto Relleno"];

console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
  console.log(objPersona.platosFavoritos[i]);
}

let productos = [
  {
    nombre: "TV Sansung 40",
    precio: 8000.0,
    codigo: "12521",
    coloresDisponibles: ["azul", "plomo", "blanco", "negro"],
  },
  {
    nombre: "TV Sansung 41",
    precio: 9000.0,
    codigo: "12525",
    coloresDisponibles: ["azul", "plomo", "blanco", "negro"],
  },
  {
    nombre: "TV Sansung 43",
    precio: 10000.0,
    codigo: "12521",
    coloresDisponibles: ["azul", "plomo", "blanco", "negro"],
  },
  {
    nombre: "TV Sansung 44",
    precio: 11000.0,
    codigo: "12526",
    coloresDisponibles: ["azul", "plomo", "blanco", "negro"],
  },
];

// Atajo de teclas para reindentar codigo
// Alt + shift + F

for (let i = 0; i < productos.length; i++) {
  console.log(`---Producto ${i + 1}---`);
  console.log(`Nombre : ${productos[i].nombre}`);
  console.log(`Precio : ${productos[i].precio}`);
  console.log(`Productos : ${productos[i].codigo}`);
  console.log(productos[i]);

  for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
    console.log(productos[i].coloresDisponibles[j]);
  }
}
