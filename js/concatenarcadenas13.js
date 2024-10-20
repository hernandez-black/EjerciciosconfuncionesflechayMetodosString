const concatenarCadenas = (cadena1, cadena2) => cadena1 + cadena2;
const saludo = "esta es";
const nombre = "una concatenacion";
console.log("las cadenas son "+saludo+" y "+nombre);
const saludoCompleto = concatenarCadenas("la concatenacion "+saludo, nombre);
console.log(saludoCompleto);