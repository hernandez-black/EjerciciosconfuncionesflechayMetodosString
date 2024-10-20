function obtenerSubcadena(cadena, inicio, fin) {
    if (inicio < 0 || fin > cadena.length || inicio > fin) {
      return "Los índices proporcionados no son válidos.";
    }
    const subcadena = cadena.substring(inicio, fin);
    return subcadena;
  }
  const miCadena = "Hola, mundo!";
  const subcadena = obtenerSubcadena(miCadena, 2, 7);
  console.log(subcadena);