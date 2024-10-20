function reemplazarPalabra(cadena, palabraAReemplazar, nuevaPalabra) {
    const cadenaModificada = cadena.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra);
    return cadenaModificada;
  }

  let textoOriginal = "El perro marrón salta sobre la valla.";
  console.log("este es tu primer texto"+textoOriginal)
  let nuevaCadena = reemplazarPalabra(textoOriginal, "marrón", "negro");
  console.log(nuevaCadena); 