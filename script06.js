function funcion1() {
    try {
        console.log(x);
    } catch (e) {
        console.log("Nivel 2 atrapó el error:", e.message);
        throw e;
    }
}
function funcion2(funcion1) {
    try {
        funcion1();
    }
    catch (e) {
        console.log("Nivel 1 recibió el error:", e.message);
        throw e;
    }
}
try {
    funcion2(funcion1);
}
catch (e) {
    console.log("ERROR FINAL capturado en el nivel superior:", e.message);
}