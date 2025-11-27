const numeros = [1, 2, 3, 4, 5];
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function procesarLista(arreglo) {
    const promesas = arreglo.map(async (numero) => {
        const tiempo = Math.floor(Math.random() * 1001 + 500);
        await esperar(tiempo);
        console.log(`Procesando ${numero}...`);
    });
    await Promise.all(promesas);
    return "Proceso completado";
}
(async () => {
    const mensaje = await procesarLista(numeros);
    console.log(mensaje);
})();