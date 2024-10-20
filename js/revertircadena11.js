const invertirCadena = cadena => cadena.split('').reverse().join('');
const cadenaOriginal = "Este ejemplo es de cadena invertida";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log("la cadena sin invertir es:"+cadenaOriginal);
console.log("la cadena invertida es"+cadenaInvertida);