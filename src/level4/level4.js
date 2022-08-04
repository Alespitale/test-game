export function crearGato(nombre, edad) {
  const cat = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };
  return cat;
}

export function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}

export function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

export function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}

export function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

export function nuevoUsuario(nombre, email, password) {
  const user = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return user;
}

export function tieneEmail(usuario) {
  return usuario.email !== undefined && usuario.email !== null;
}

export function tienePropiedad(objeto, propiedad) {
  const prop = objeto[propiedad];
  return prop !== undefined && prop !== null;
}

export function verificarPassword(usuario, password) {
  return usuario.password === password;
}

export function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}

export function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

export function pasarUsuarioAPremium(usuarios) {
  usuarios.forEach((usuario) => {
    usuario.esPremium = true;
  });
  return usuarios;
}

export function sumarLikesDeUsuario(usuario) {
  let suma = 0;
  usuario.posts.forEach((post) => {
    suma += post.likes;
  });
  return suma;
}

export function agregarMetodoCalculoDescuento(producto) {
  producto.calcularPrecioDescuento = function () {
    return this.precio - this.precio * this.porcentajeDeDescuento;
  };
  return producto;
}