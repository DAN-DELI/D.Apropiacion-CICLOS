console.log("\n===TABLA DE MULTIPLICAR===");
//Ingresa un numero y muestra su tabla de multiplicar del 1 al 12

// Usamos un ciclo while para permitir múltiples entradas. Anidamos un for el cual se encargara de
// mostrar la tabla de multiplicar del numero ingresado, junto a un "if" y "else if" para agregar 
// condicionales encargadas de continuar o finalizar el ciclo.

while (true) {
    let numero = parseInt(prompt("Ingrese un número para ver su tabla multiplicado 12 veces:"));
    console.log(`\nTabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }  
    let continuar = prompt("¿Desea ingresar otro número? (si/no):");
    if (continuar === 'si') {
        continue;
    } else if (continuar === 'no') {
        break;
    }
}