const archivo = "{'Nombre': 'Amira'}";
try {
    let archivoJSON = JSON.parse(archivo);
    console.log(archivoJSON)
}
catch (e){
    console.log("Nombre del error:", e.name)
    console.log("Mensaje del error:", e.message)
}