const convertirACamelCase = frase => frase.replace(/(?:^|\s)\w/g, letra => letra.toUpperCase()).replace(/\s+/g, '');
const frase = "hola mundo en javascript";
console.log("este es la cadena: "+frase)
const camelCase = convertirACamelCase(frase);
console.log(camelCase);