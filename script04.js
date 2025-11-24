const edadMenor = -5;
const edadLetra = "Pedro";
const regexNumero = /^\d+$/;
function validarEdad(edad){
    if (edad < 0 || !regexNumero.test(edad))
        throw new Error ("Edad inválida")
}
try {
    validarEdad(edadMenor);
}
catch (e){
    console.log(e.message);
}
try {
    validarEdad(edadLetra);
}
catch (e){
    console.log(e.message);
}