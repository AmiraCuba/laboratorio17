function cargarMensaje (){
    return new Promise((resolve, reject) => {
        const estado = true;
        setTimeout(() => {
            if (estado)
                resolve("Mensaje cargado");
            else 
                reject("Hubo un error");
        }, 1000);
    });
}
cargarMensaje()
    .then((mensaje) => console.log(mensaje))
    .catch((e) => console.error(e));