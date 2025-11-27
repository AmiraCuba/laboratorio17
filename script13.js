function dividirAsync (a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b === 0) {
                reject(new Error(`No se puede dividir entre cero`)); 
            }
            else
                resolve(a/b);
        }, 1500);
    });
}
dividirAsync(7, 5)
    .then((mensaje) => console.log(mensaje))
    .catch((e) => console.error(e));