const contarPalabras = cadena => cadena.split(' ').length;
const texto = "Hola estudiante de tics, ¿cómo estás?";
console.log("este es la cadena: "+texto);
const numeroDePalabras = contarPalabras(texto);
console.log("este es el numero de palabras "+numeroDePalabras);