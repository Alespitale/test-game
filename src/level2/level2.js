export function obtenerMayor(x, y) {
  return x>y? x:y;
}

export function mayoriaDeEdad(edad) {
  return edad >= 18 ? "Allowed" : "Not allowed";
}

export function conection(status) {
  switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    case 3:
      return "Offline";
    default:
      return "Offline";
  }
}

export function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "ingles":
      return "Hello!";
    case "mandarin":
      return "Ni Hao!";
    default:
      return "Hola!";
  }
}

export function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

export function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

export function estaEnRango(numero) {
  return numero > 20 && numero < 50;
}

export function esEntero(numero) {
  return numero % 1 === 0;
}

export function fizzBuzz(numero) {
  let msg = "";
  if (!(numero % 3)) {
    msg += "fizz";
  }
  if (!(numero % 5)) {
    msg += "buzz";
  }
  return msg || numero;
}

export function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  return false;
}

export function esPrimo(numero) {
  if (numero === 1 || numero === 0) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

export function esVerdadero(valor) {
  return valor ? "Soy verdadero" : "Soy falso";
}

export function tablaDelSeis() {
  return [...Array(11).keys()].map((i) => i * 6);
}

export function tieneTresDigitos(numero) {
  return numero.toString().length === 3;
}

export function doWhile(numero) {
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
