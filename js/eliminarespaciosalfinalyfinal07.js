function eliminarEspacios(cadena) {
    return cadena.trim();
  }

let cadenaConEspacios = "   Hola, men, hello brou";
let cadenaSinEspacios = eliminarEspacios(cadenaConEspacios);
console.log(cadenaSinEspacios);