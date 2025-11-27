function dividirAsync (a, b, callback){
    setTimeout(() => {
        if(b === 0) {
            callback(new Error(`No se puede dividir entre cero`), null); 
        }
        else
            callback(null, a/b);
    }, 1500);
}
function procesarResultado(error, resultado) {
    if (error)
        console.error("Falló:", error.message);
    else {
        console.log("Resultado exitoso:", resultado);
    }
}
dividirAsync(7, 5, procesarResultado);