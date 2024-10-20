function palabraMasLarga(cadena) {
    return cadena.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}
  console.log(palabraMasLarga("Aprender JavaScript es emocionante y muy alucinantehacerlo")); // Output: emocionante