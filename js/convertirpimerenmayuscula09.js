function capitalizarPrimeraLetra(cadena) {
    if (!cadena) {
      return cadena;
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }
let nombre = "universidad";
let nombreCapitalizado = capitalizarPrimeraLetra(nombre);
  console.log(nombreCapitalizado);