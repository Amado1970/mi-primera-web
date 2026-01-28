function cambiarColor() {
    document.body.style.backgroundColor = "#0a589d";
}

function saludar() {
    alert("¡Hola! Bienvenido a mi web de amado 😄");
}

function mostrarNombre() {
    let nombre = document.getElementById("nombre").value;
    document.getElementById("descripcion").innerText =
        "Hola, " + nombre + " 👋 Bienvenido a mi página";
}