// HAYA LOS NUMEROS PRIMOS

console.log("===NÚMEROS DEL 1 AL 50 que sean primos:===");

for (let z = 1; z <= 50; z++) {
  if (esPrimo(z)) {
  console.log(`${z}`)
  }
}

function esPrimo(numero) {
  for (let z = 2; z < numero; z++) {
    if (numero % z === 0) {
      return false;
    }
  }
  return true;
}