console.log("\n=== CONTADOR DE PARES E IMPARES ===");

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i}:`));

    // Validar si es un número válido
    if (isNaN(numero)) {
        console.log("Valor no válido. Intente de nuevo.");
        i--;
        continue;
    }

    // Determinar si es par o impar
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Números pares ingresados: ${pares}`);
console.log(`Números impares ingresados: ${impares}`);
