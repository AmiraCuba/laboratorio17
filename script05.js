const edad = 25;
try {
    const largoEdad = edad.length();
    console.log(largoEdad);
}
catch (e){
    if (e instanceof TypeError)
        console.log("Hay un error de tipeo");
    else
        console.log("Hay un error desconocido")
}