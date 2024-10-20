const reemplazarTodas = (cadena, palabra, reemplazo) => cadena.replaceAll(palabra, reemplazo);
const texto = "Hola, hola, ¿cómo estás?";
console.log("esta es la cadena de ejemplo: "+texto)
const nuevoTexto = reemplazarTodas(texto, "hola", "adiós");
console.log(nuevoTexto);