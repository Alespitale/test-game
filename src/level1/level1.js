// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  return str.toString();
}

export function suma(x, y) {
  return x + y;
}

export function resta(x, y) {
  return x - y;
}

export function multiplica(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

export function sonIguales(x, y) {
  return x === y;
}

export function tienenMismaLongitud(x, y) {
  return x.length === y.length;
}

export function menosQueNoventa(x) {
  return x < 90;
}

export function mayorQueCincuenta(x) {
  return x > 50;
}

export function obtenerResto(x, y) {
  return x % y;
}

export function esPar(x) {
  return x % 2 === 0;
}

export function esImpar(x) {
  return x % 2 !== 0;
}

export function elevarAlCuadrado(x) {
  return x * x;
}

export function elevarAlCubo(x) {
  return x * x * x;
}

export function elevar(x, y) {
  return x ** y;
}

export function redondearNumero(x) {
  return Math.round(x);
}

export function redondearHaciaArriba(x) {
  return Math.ceil(x);
}

export function numeroRandom() {
  return Math.random();
}

export function esPositivo(x) {
  if (x > 0) return "Es positivo";
  else if (x < 0) return "Es negativo";
  else return false;
}

export function agregarSimboloExclamacion(str) {
  return str + "!";
}

export function combinarNombres(str1, str2) {
  return str1 + " " + str2;
}

export function obtenerSaludo(str) {
  return "Hola " + str + "!";
}

export function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

export function retornarPerimetro(lado) {
  return lado * 4;
}

export function areaDelTriangulo(base, altura) {
  return (base * altura) / 2;
}

export function deEuroAdolar(euro) {
  return euro * 1.20;
}

export function esVocal(letra) {
  const array = ["a", "e", "i", "o", "u"];
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}
