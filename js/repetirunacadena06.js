function repetirCadena(cadena, numeroRepeticiones) {
    if (typeof numeroRepeticiones !== 'number' || numeroRepeticiones < 1) {
      return "El número de repeticiones debe ser un entero positivo.";
    }
    return cadena.repeat(numeroRepeticiones);
  }
  let cadenaOriginal = "Hola ";
  let numeroVeces = 3;
  let cadenaRepetida = repetirCadena(cadenaOriginal, numeroVeces);
  console.log(cadenaRepetida);