const usuario = {
    id: 1,
    nombre: "Motta",
}
function cargarUsuario (usuario){
    let tiempo = Math.floor((Math.random()*801 + 700));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario!=null)
                resolve(`Usuario cargado: ${usuario.nombre} (ID:${usuario.id})`);
            else
                reject("Hubo un error");
        }, tiempo);
    });
}
cargarUsuario(usuario)
    .then((mensaje) => console.log(mensaje))
    .catch((e) => console.error(e));
