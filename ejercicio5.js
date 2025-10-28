console.log("\n===EJERCICIO 5: TIENDA DE PRODUCTOS ===");

let totalCompra = 0;

while (true) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt(`Ingrese el precio de ${nombre}:`));
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombre}:`));

    // Validar si los datos ingresados son correctos
    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        console.log("Datos inválidos. Intente de nuevo.");
        continue;
    }

    let subtotal = precio * cantidad;
    totalCompra += subtotal;

    console.log(`Producto: ${nombre} | Subtotal: $${subtotal}`);

    // Preguntar si desea seguir comprando
    let continuar = prompt("¿Desea comprar otro producto? (si/no):").toLowerCase();
    if (continuar === "no") {
        break;
    }
}

// Aplicar descuento si supera $100.000
if (totalCompra > 100000) {
    let descuento = totalCompra * 0.10;
    totalCompra -= descuento;
    console.log(`Se aplicó un descuento del 10% ($${descuento.toFixed(0)}).`);
}

console.log(`Total final a pagar: $${totalCompra.toFixed(0)}`);
console.log("¡Gracias por su compra!");
