function quitarEspeciales(cadena) {
    return cadena.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  console.log(quitarEspeciales("Hola@este!ejemplo.contiene&caracter%sespecia!le$s")); // Output: Holamundo