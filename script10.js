const numeros = [1, 2, 3, 4, 5];
function procesarLista(arreglo, callbackFinal) {
    let procesados = 0;
    arreglo.forEach((numero) => {
        const tiempo = Math.floor(Math.random() * 1001 + 500);
        
        setTimeout(() => {
            console.log(`Procesando ${numero}...`);
            procesados++;
            
            if (procesados === arreglo.length) {
                callbackFinal("Proceso completado");
            }
        }, tiempo);
    });
}
procesarLista(numeros, (mensaje) => console.log(mensaje));