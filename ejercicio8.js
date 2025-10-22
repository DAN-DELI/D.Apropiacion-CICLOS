console.log("\n===EJERCICIO 8: CONTROL DE ACCESO ===");

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

let practica = 0;
let acceso = false;

alert("Usuario: admin | Contraseña: 1234");

while (practica < 3) {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contrasena = prompt("Ingrese su contraseña:");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        console.log("Bienvenido, acceso concedido.");
        acceso = true;
        break;
    } else {
        practica++;
        console.log(`Usuario o contraseña incorrectos. Intento ${practica} de 3.`);
    }
}

if (!acceso) {
    console.log("Acceso denegado. Has superado el número de intentos.");
}
