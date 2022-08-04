// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  return array[0];
}

export function devolverUltimoElemento(array) {
  return array[array.length - 1];
}

export function obtenerLargoDelArray(array) {
  return array.length;
}

export function incrementarPorUno(array) {
  return array.map(function (item) {
    return item + 1;
  });
}

export function agregarItemAlFinalDelArray(array, elemento) {
  return array.concat(elemento);
}

export function agregarItemAlComienzoDelArray(array, elemento) {
  return [elemento].concat(array);
}

export function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
}

export function arrayContiene(array, elemento) {
  return array.indexOf(elemento) !== -1;
}

export function agregarNumeros(numeros) {
  return numeros.reduce(function (a, b) {
    return a + b;
  });
}

export function promedioResultadosTest(resultadosTest) {
  return (
    resultadosTest.reduce(function (a, b) {
      return a + b;
    }) / resultadosTest.length
  );
}

export function numeroMasGrande(numeros) {
  return Math.max.apply(null, numeros);
}

export function multiplicarArgumentos() {
  return;
}

export function cuentoElementos(arreglo) {
  let counter = 0;
  arreglo.forEach((number) => (number > 18 ? counter++ : counter));
  return counter;
}

export function diaDeLaSemana(numeroDeDia) {
  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana";
    case 7:
      return "Es fin de semana";
    default:
      return "Es dia Laboral";
  }
}

export function empiezaConNueve(n) {
  return n.toString().startsWith("9");
}

export function todosIguales(arreglo) {
  return arreglo.every((item) => item === arreglo[0]);
}

export function mesesDelAño(array) {
  const newArray = ["Marzo", "Noviembre", "Enero"];
  let contains =
    array.includes(newArray[0]) &&
    array.includes(newArray[1]) &&
    array.includes(newArray[2]);
  return contains ? newArray : "No se encontraron los meses pedidos";
}

export function mayorACien(array) {
  return array.filter((item) => item > 100);
}

export function breakStatement(numero) {
  const array = [];
  for (let i = 0; i < 10; i++) {
    if (i === numero) break;
    numero = numero + 2;
    array.push(numero);
  }
  return array.length === 10 ? array : "Se interrumpió la ejecución";
}

export function continueStatement(numero) {
  const array = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    numero = numero + 2;
    array.push(numero);
  }
  return array;
}
