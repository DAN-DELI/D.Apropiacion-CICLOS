console.log("\n===EJERCICIO 6: JUEGO DEL ADIVINADOR ===");

// Generamos un número aleatorio entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intento;
let intentos = 0;

alert("¡Bienvenido al juego del adivinador! Tienes que adivinar el número secreto entre 1 y 20.");
console.log("Ingresa tu número entre 1 y 20.");

while (true) {
    intento = parseInt(prompt("Ingresa tu número:"));
    intentos++;

    // Validar si el valor ingresado es un número válido
    if (isNaN(intento) || intento < 1 || intento > 20) {
        console.log("Ingresa un número válido entre 1 y 20.");
        continue;
    }

    // Comprobamos si acertó o damos pistas
    if (intento === numeroSecreto) {
        console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
        break;
    } else if (intento < numeroSecreto) {
        console.log("El número secreto es MAYOR. Intenta de nuevo.");
    } else {
        console.log("El número secreto es MENOR. Intenta de nuevo.");
    }
}
