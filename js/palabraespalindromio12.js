const esPalindromo = palabra => {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
};
  const palabra = "Ana";
  console.log(esPalindromo(palabra));
  console.log("la palabra es "+palabra);