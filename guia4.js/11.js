function buscarpalabra() {
    let frase = prompt("Ingrese una frase:");
    let palabra = prompt("Ingrese la palabra a buscar:");
    frase= frase.split(" ");
    let encontrado = false;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === palabra) {
            encontrado = true;
            break;
        }
    }
    if (encontrado===true) {
        console.log(`La palabra "${palabra}" si existe en el texto.`);
    } else {
        console.log(`La palabra "${palabra}" no existe en el texto.`);
    }   
}