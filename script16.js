const usuario = {
    id: 1,
    nombre: "Motta",
}
async function cargarUsuario (usuario){
    let tiempo = Math.floor((Math.random()*801 + 700));
    try {
        const mensaje = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if(usuario!=null)
                    resolve(`Usuario cargado: ${usuario.nombre} (ID:${usuario.id})`);
                else
                    reject("Hubo un error");
            }, tiempo);
        });
        console.log(mensaje)
    } catch (e) {
        console.error(e)
    }
}
cargarUsuario(usuario);