function toSnakeCase(cadena) {
    return cadena.replace(/\s+/g, '_').toLowerCase();
  }
  console.log(toSnakeCase("Hola este es un ejemplo de cadena para el ejercicio"));