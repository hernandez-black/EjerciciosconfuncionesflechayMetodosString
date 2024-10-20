function contienePalabra(cadena, palabra) {
    return cadena.toLowerCase().includes(palabra.toLowerCase());
  };

const texto = "Hola, este es un ejemplo de cadena de texto.";
const palabraBuscar = "ejemplo";
  
const resultado = contienePalabra(texto, palabraBuscar);
  
  if (resultado) {
    console.log("La palabra se encontró en la cadena.");
  } else {
    console.log("La palabra no se encontró en la cadena.");
  }