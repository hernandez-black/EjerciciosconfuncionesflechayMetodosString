function comprimirCadena(cadena) {
    return cadena.replace(/(.)\1+/g, '$1');
  }
  console.log(comprimirCadena("eesste es un eejjemplo paaraa este codigo"));