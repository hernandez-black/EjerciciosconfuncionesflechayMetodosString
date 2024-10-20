const obtenerCaracter = (cadena, posicion) => cadena.charAt(posicion);
const texto = "JavaScript";
console.log("la cadena es "+texto);
const tercerCaracter = obtenerCaracter(texto, 2);
console.log("obtenemos la letra "+tercerCaracter+" que esta en la tercera posicion");