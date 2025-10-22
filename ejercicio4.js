console.log("\n=== PROMEDIO DE NOTAS ===");

for (let i = 1; i <= 5; i++) {
    console.log(`\nEstudiante ${i}:`);

    let suma = 0;
    let cantidadNotas = 3;

    for (let j = 1; j <= cantidadNotas; j++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${j} del estudiante ${i}:`));

        // Validar que la nota esté entre 0 y 5
        if (nota < 0 || nota > 5 || isNaN(nota)) {
            console.log("Nota inválida. Intente de nuevo.");
            j--;
            continue;
        }

        suma += nota;
    }

    let promedio = suma / cantidadNotas;

    console.log(`Promedio del estudiante ${i}: ${promedio.toFixed(2)}`);

    if (promedio >= 3.0) {
        console.log("Aprobó");
    } else {
        console.log("Reprobó");
    }
}
