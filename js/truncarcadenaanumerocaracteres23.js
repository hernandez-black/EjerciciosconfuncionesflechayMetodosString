const truncarCadena = (cadena, longitud) => cadena.slice(0, longitud);

const textoLargo = "Esto es un texto muy largo";
console.log("texto largo es: "+textoLargo)
const textoCortado = truncarCadena(textoLargo, 10);
console.log("texto truncado: "+textoCortado);