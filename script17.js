async function dividirAsync (a, b){
    try{
        const mensaje = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if(b === 0) {
                    reject(new Error(`No se puede dividir entre cero`)); 
                }
                else
                    resolve(a/b);
            }, 1500);
        });
        console.log(mensaje);
    } catch (e){
        console.error(e);
    }
}
dividirAsync(7, 5);