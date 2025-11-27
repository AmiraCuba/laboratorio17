function cargarMensaje (callback){
    setTimeout(() => callback("Mensaje cargado"), 1000);
}
function imprimirEnPantalla(mensaje) {
    console.log(mensaje);
}
cargarMensaje(imprimirEnPantalla);