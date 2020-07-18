// Switch

debugger;

console.log(` Elegir opción
1.  Login
2.  Ver facturas
3.  Ver Reportes
`);

let rpta = +prompt("Ingresar Opción");

switch (rpta) {
    case 1:
        console.log("Usted eligió iniciar sesión");
        break;
    case 2:
        console.log("Usted eligió ver facturas");
        break;
    case 3:
        console.log("Usted eligió ver reportes");
        break;
    default :
        console.log("Por favor ingrese una opción valida");
}