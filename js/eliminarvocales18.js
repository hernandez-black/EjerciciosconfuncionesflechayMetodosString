const eliminarVocales = cadena => cadena.replace(/[aeiou]/gi, '');
const palabra = "Este es un ejemplo que contiene todas las vocales";
console.log("aqui se muestran las vocales "+palabra)
const sinVocales = eliminarVocales(palabra);
console.log("este muestra sin vocales :"+sinVocales);