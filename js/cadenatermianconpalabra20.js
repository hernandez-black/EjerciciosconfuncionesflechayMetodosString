const terminaCon = (cadena, palabra) => cadena.endsWith(palabra);
const texto = "Hola, este es un ejemplo";
console.log("esta es la cadena: "+texto)
console.log(terminaCon(texto, "ejemplo"));