function soloNumeros(cadena) {
    return /^\d+$/.test(cadena);
  }
  console.log(soloNumeros("1234"));
  console.log(soloNumeros("hola")); 