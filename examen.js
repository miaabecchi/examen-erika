function modificarElemento(tipo, elemento) {
    if (confirm(`¿Deseas cambiar el tipo de ${tipo}?`)) {
        const opciones = ["la mejor profe", "el mejor año", "la mejor escuela"];
        let mensaje = `Elige una opción para el tipo de ${tipo}:\n`;

opciones.forEach((opcion, index) => {
    mensaje += `${index + 1}. ${opcion}\n`;
});

const eleccion = parseInt(prompt(mensaje));

if (eleccion >= 1 && eleccion <= 3) {
    elemento.innerHTML = opciones[eleccion - 1];
} else {
    alert("Opción no válida. No se realizará ningún cambio.");
}
}
}

const titulo = document.querySelector("#soyH1");
const subtitulo = document.querySelector("#unH3");
const texto = document.querySelector("#unTxt");

modificarElemento("título", titulo);
modificarElemento("subtítulo", subtitulo);
modificarElemento("párrafo", texto);
