const usuario = {
    id: 1,
    nombre: "Motta",
}
function cargarUsuario (callback, usuario){
    let tiempo = Math.floor((Math.random()*801 + 700));
    setTimeout(() => callback(`Usuario cargado: ${usuario.nombre} (ID:${usuario.id})`), tiempo);
}
function imprimirEnPantalla(mensaje) {
    console.log(mensaje);
}
cargarUsuario(imprimirEnPantalla, usuario);