async function cargarMensaje (){
    try {
        const mensaje = await new Promise((resolve, reject) => {
            const estado = true;
            setTimeout(() => {
                if (estado)
                    resolve("Mensaje cargado");
                else 
                    reject("Hubo un error");
            }, 1000);
        });
        console.log(mensaje);
    } catch (e) {
        console.error(e)
    }
}
cargarMensaje();