console.log("\n===EJERCICIO 3: CAJERO AUTOMÁTICO ===");

const saldoInicial = 500000;
let saldo = saldoInicial;

while (true) {
    console.log(`\nSaldo actual: $${saldo}`);
    let retiro = parseInt(prompt("Ingrese el monto a retirar:"));

    // Validar si el valor ingresado es un número
    if (isNaN(retiro) || retiro <= 0) {
        console.log("Monto no válido. Intente de nuevo.");
        continue;
    }

    // Validar si hay fondos suficientes
    if (retiro > saldo) {
        console.log("Fondos insuficientes. No se puede realizar el retiro.");
    } else {
        saldo -= retiro;
        console.log(`Se retito $${retiro} correctamente. Nuevo saldo: $${saldo}`);
    }

    // Preguntar si desea continuar
    let continuar = prompt("¿Desea hacer otro retiro? (si/no):").toLowerCase();

    if (continuar === "si") {
        continue;
    } else if (continuar === "no") {
        console.log("\nGracias por usar el cajero automático");
        console.log(`Saldo final: $${saldo}`);
        break;
    } else {
        console.log("Opción no válida, se cerrará el cajero.");
        break;
    }
}
