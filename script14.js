const numeros = [1, 2, 3, 4, 5];
function procesarNumero(numero) {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * 1001 + 500);
        setTimeout(() => {
            console.log(`Procesando ${numero}...`);
            resolve();
        }, tiempo);
    });
}
function procesarLista(arreglo) {
    const acciones = arreglo.map((num) => procesarNumero(num));
    return Promise.all(acciones).then(() => "Proceso completado");
}
procesarLista(numeros)
    .then((mensaje) => console.log(mensaje));